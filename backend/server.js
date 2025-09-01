const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 5000;

// Email configuration
const EMAIL_CONFIG = {
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  user: "identalhome@yandex.ru",
  pass: "gyqtvkhmymymjvrc",
};

// CORS origins
const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://dental-home.ru",
  "https://www.dental-home.ru",
];

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: {
    error: "Слишком много запросов с этого IP, попробуйте позже.",
  },
});

app.use("/api", limiter);

// CORS configuration
app.use(
  cors({
    origin: ALLOWED_ORIGINS,
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Multer configuration for file uploads (resumes)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow common resume formats
    const allowedMimes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "text/plain",
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Неподдерживаемый формат файла. Разрешены: PDF, DOC, DOCX, TXT"
        ),
        false
      );
    }
  },
});

// Email transporter configuration
const transporter = nodemailer.createTransporter({
  host: EMAIL_CONFIG.host,
  port: EMAIL_CONFIG.port,
  secure: EMAIL_CONFIG.secure,
  auth: {
    user: EMAIL_CONFIG.user,
    pass: EMAIL_CONFIG.pass,
  },
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Email configuration error:", error);
  } else {
    console.log("Email server ready");
  }
});

// Vacancy application endpoint
app.post("/api/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, phone, email, message, vacancy } = req.body;

    // Validation
    if (!name || !phone || !email) {
      return res.status(400).json({
        error: 'Поля "Имя", "Телефон" и "Email" обязательны для заполнения',
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Некорректный формат email",
      });
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        error: "Некорректный формат телефона",
      });
    }

    // Prepare email content
    const emailSubject = vacancy
      ? `Новая заявка на вакансию: ${vacancy}`
      : "Новая заявка на работу - Dental Home";

    let emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #007bff;">Новая заявка на работу</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${vacancy ? `<p><strong>Вакансия:</strong> ${vacancy}</p>` : ""}
          ${
            message
              ? `
            <p><strong>Сопроводительное письмо:</strong></p>
            <div style="background: #fff; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          `
              : ""
          }
        </div>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #666;">
          Заявка отправлена через сайт Dental Home<br>
          Время отправки: ${new Date().toLocaleString("ru-RU", {
            timeZone: "Europe/Moscow",
          })}
        </p>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: {
        name: "Dental Home Website",
        address: EMAIL_CONFIG.user,
      },
      to: EMAIL_CONFIG.user,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
    };

    // Add resume attachment if provided
    if (req.file) {
      const fileExtension = path.extname(req.file.originalname);
      const fileName = `resume_${name.replace(
        /\s+/g,
        "_"
      )}_${Date.now()}${fileExtension}`;

      mailOptions.attachments = [
        {
          filename: fileName,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        },
      ];
    }

    // Send email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to applicant
    const confirmationEmail = {
      from: {
        name: "Dental Home",
        address: EMAIL_CONFIG.user,
      },
      to: email,
      subject: "Спасибо за вашу заявку - Dental Home",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #007bff;">Спасибо за вашу заявку!</h2>
          <p>Здравствуйте, ${name}!</p>
          <p>Мы получили вашу заявку на работу в клинике Dental Home и обязательно рассмотрим её в ближайшее время.</p>
          <p>Наш HR-специалист свяжется с вами в течение 2-3 рабочих дней.</p>
          <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Ваши данные:</strong></p>
            <p>Имя: ${name}</p>
            <p>Телефон: ${phone}</p>
            <p>Email: ${email}</p>
            ${vacancy ? `<p>Вакансия: ${vacancy}</p>` : ""}
          </div>
          <p>С уважением,<br>Команда Dental Home</p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            Если у вас есть вопросы, свяжитесь с нами:<br>
            Телефон: +7 (925) 222-90-22<br>
            Email: identalhome@yandex.ru
          </p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    console.log(
      `Vacancy application received from: ${email} for ${
        vacancy || "general application"
      }`
    );

    res.status(200).json({
      success: true,
      message:
        "Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
    });
  } catch (error) {
    console.error("Error processing vacancy application:", error);

    if (error.message.includes("Неподдерживаемый формат файла")) {
      return res.status(400).json({
        error: error.message,
      });
    }

    res.status(500).json({
      error:
        "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.",
    });
  }
});

// General contact form endpoint (for other forms on the site)
app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, email, message, service } = req.body;

    if (!name || !phone) {
      return res.status(400).json({
        error: 'Поля "Имя" и "Телефон" обязательны для заполнения',
      });
    }

    const emailSubject = service
      ? `Новая заявка на услугу: ${service}`
      : "Новая заявка с сайта Dental Home";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #007bff;">Новая заявка с сайта</h2>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
          ${service ? `<p><strong>Услуга:</strong> ${service}</p>` : ""}
          ${
            message
              ? `
            <p><strong>Сообщение:</strong></p>
            <div style="background: #fff; padding: 15px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          `
              : ""
          }
        </div>
        <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #666;">
          Заявка отправлена через сайт Dental Home<br>
          Время отправки: ${new Date().toLocaleString("ru-RU", {
            timeZone: "Europe/Moscow",
          })}
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: {
        name: "Dental Home Website",
        address: EMAIL_CONFIG.user,
      },
      to: EMAIL_CONFIG.user,
      replyTo: email || undefined,
      subject: emailSubject,
      html: emailHtml,
    });

    console.log(
      `Contact form submission from: ${phone} (${email || "no email"})`
    );

    res.status(200).json({
      success: true,
      message:
        "Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({
      error:
        "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.",
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    server: "Dental Home Backend",
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint not found",
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("Server error:", error);
  res.status(500).json({
    error: "Internal server error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🚀 Dental Home Backend Server running on port ${PORT}`);
  console.log(`📧 Email configured for: ${EMAIL_CONFIG.user}`);
  console.log(`🌐 CORS enabled for: ${ALLOWED_ORIGINS.join(", ")}`);
  console.log(`📋 Available endpoints:`);
  console.log(`   POST /api/apply - Vacancy applications`);
  console.log(`   POST /api/contact - General contact form`);
  console.log(`   GET  /api/health - Health check`);
  console.log(`\n✅ Server ready to handle requests!`);
});

module.exports = app;
