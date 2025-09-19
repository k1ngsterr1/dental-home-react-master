import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import { Reveal } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faChevronRight,
  faMinus,
  faPlus,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Popup from "reactjs-popup";
import { MDBCheckbox } from "mdb-react-ui-kit";
import emailjs from "@emailjs/browser";
import Mheader from "../../components/header/m-header";

const Vacancies = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [selectedVacancy, setSelectedVacancy] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Toggle for vacancy details
  const [expandedVacancies, setExpandedVacancies] = useState<number[]>([]);

  const toggleVacancy = (index: number) => {
    setExpandedVacancies((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  // List of available vacancies (mirroring the content from dental-home.ru/vakansii)
  const vacancies = [
    {
      title: "Администратор",
      requirements: [
        "Опыт работы администратором от 1 года в медицинском учреждении",
        "Грамотная речь, презентабельный внешний вид",
        "Уверенное пользование ПК, знание программ Word, Excel",
        "Умение работать в режиме многозадачности",
      ],
      responsibilities: [
        "Встреча, регистрация и координация пациентов",
        "Ведение телефонных переговоров, консультирование пациентов",
        "Ведение записи к специалистам",
        "Работа с кассой, терминалом, формирование отчетов",
      ],
      conditions: [
        "График работы 2/2, 3/3 (с 8:00 до 21:00)",
        "Оформление по ТК РФ",
        "Дружный коллектив",
        "Корпоративные мероприятия",
        "Своевременная оплата труда",
        "Возможность карьерного роста",
      ],
    },
    {
      title: "Ассистент стоматолога",
      requirements: [
        "Среднее медицинское образование",
        "Медицинская книжка",
        'Действующий сертификат "Сестринское дело"',
        "Опыт работы ассистентом стоматолога от 1 года",
      ],
      responsibilities: [
        "Подготовка кабинета к приему",
        "Помощь врачу-стоматологу во время лечения",
        "Стерилизация инструментов",
        "Ведение медицинской документации",
        "Соблюдение санитарно-эпидемиологического режима",
      ],
      conditions: [
        "График работы 2/2 (с 9:00 до 21:00)",
        "Оформление по ТК РФ",
        "Дружный коллектив",
        "Корпоративные мероприятия",
        "Своевременная оплата труда",
        "Возможность профессионального роста",
      ],
    },
    {
      title: "Стоматолог-терапевт",
      requirements: [
        "Высшее медицинское образование",
        'Действующий сертификат по специальности "Стоматология терапевтическая"',
        "Медицинская книжка",
        "Опыт работы стоматологом-терапевтом от 2 лет",
      ],
      responsibilities: [
        "Ведение пациентов от момента записи до выздоровления",
        "Диагностика и лечение заболеваний полости рта",
        "Эндодонтическое лечение зубов",
        "Реставрация зубов",
        "Ведение медицинской документации",
      ],
      conditions: [
        "Работа на материалах клиники",
        "График работы обсуждается индивидуально",
        "Стабильная заработная плата + %",
        "Оформление по ТК РФ",
        "Дружный коллектив",
        "Возможность профессионального и карьерного роста",
      ],
    },
  ];

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!isChecked) {
      setErrorMessage(
        "Пожалуйста, дайте согласие на обработку персональных данных"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("message", message);
      formData.append("vacancy", selectedVacancy);

      if (resume) {
        formData.append("resume", resume);
      }

      const response = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message);
        // Reset form
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setResume(null);
        setSelectedVacancy("");
        setIsChecked(false);

        // Reset file input
        const fileInput = document.getElementById("resume") as HTMLInputElement;
        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        setErrorMessage(data.error || "Произошла ошибка при отправке заявки");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "Произошла ошибка при отправке заявки. Проверьте подключение к интернету."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("Размер файла не должен превышать 5MB");
        return;
      }

      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ];

      if (!allowedTypes.includes(file.type)) {
        setErrorMessage(
          "Поддерживаются только файлы формата PDF, DOC, DOCX, TXT"
        );
        return;
      }

      setResume(file);
      setErrorMessage("");
    }
  };

  const [thankYou, setThankYou] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setThankYou(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    window.scrollTo(0, 0);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  return (
    <div>
      <style>{`
        .mobile-header {
          display: block;
        }
        @media (min-width: 1024px) {
          .mobile-header {
            display: none;
          }
        }
      `}</style>
      <Helmet>
        <title>Вакансии | Dental Home</title>
        <meta
          name="description"
          content="Актуальные вакансии в стоматологии Dental Home. Присоединяйтесь к нашей команде профессионалов!"
        />
      </Helmet>
      <main className="content">
        <Header
          isMenuPcOpen={isMenuPcOpen}
          openModal={openModal}
          togglePcMenu={togglePcMenu}
        ></Header>
        <div className="header-container" style={{ width: "100%" }}></div>
        <div className="tablet" style={{ width: "100%" }}></div>
        <Reveal>
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "40px",
              fontWeight: "700",
              color: "#222222",
              textAlign: "center",
            }}
          >
            Вакансии
          </h1>
        </Reveal>

        <Reveal>
          <div
            style={{
              width: "100%",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "#333",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              Мы всегда в поиске талантливых и увлеченных своим делом
              специалистов. Если вы хотите стать частью дружной команды
              профессионалов Dental Home, рассмотрите наши актуальные вакансии
              или отправьте свое резюме.
            </p>
          </div>
        </Reveal>

        {/* Vacancies list */}
        <Reveal style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginBottom: "60px",
            }}
          >
            {vacancies.map((vacancy, index) => (
              <div
                key={index}
                style={{
                  width: "100%",

                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                  backgroundColor: "#fff",
                }}
              >
                <div
                  onClick={() => toggleVacancy(index)}
                  style={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    backgroundColor: expandedVacancies.includes(index)
                      ? "#f5fbff"
                      : "#ffffff",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      margin: "0",
                      color: expandedVacancies.includes(index)
                        ? "#007bff"
                        : "#333",
                    }}
                  >
                    {vacancy.title}
                  </h3>
                  <FontAwesomeIcon
                    icon={expandedVacancies.includes(index) ? faMinus : faPlus}
                    style={{
                      fontSize: "16px",
                      color: expandedVacancies.includes(index)
                        ? "#007bff"
                        : "#666",
                    }}
                  />
                </div>

                {expandedVacancies.includes(index) && (
                  <div
                    style={{
                      padding: "0 20px 20px",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <div style={{ marginBottom: "20px" }}>
                      <h4
                        style={{
                          fontSize: "18px",
                          color: "#007bff",
                          marginBottom: "10px",
                          fontWeight: "600",
                        }}
                      >
                        Требования:
                      </h4>
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        {vacancy.requirements.map((req, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: "16px",
                              lineHeight: "1.6",
                              marginBottom: "5px",
                              color: "#333",
                            }}
                          >
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <h4
                        style={{
                          fontSize: "18px",
                          color: "#007bff",
                          marginBottom: "10px",
                          fontWeight: "600",
                        }}
                      >
                        Обязанности:
                      </h4>
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        {vacancy.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: "16px",
                              lineHeight: "1.6",
                              marginBottom: "5px",
                              color: "#333",
                            }}
                          >
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4
                        style={{
                          fontSize: "18px",
                          color: "#007bff",
                          marginBottom: "10px",
                          fontWeight: "600",
                        }}
                      >
                        Условия:
                      </h4>
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        {vacancy.conditions.map((cond, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: "16px",
                              lineHeight: "1.6",
                              marginBottom: "5px",
                              color: "#333",
                            }}
                          >
                            {cond}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      style={{
                        marginTop: "20px",
                        textAlign: "center",
                      }}
                    >
                      <button
                        onClick={() => {
                          setSelectedVacancy(vacancy.title);
                          document
                            .getElementById("application-form")
                            ?.scrollIntoView({
                              behavior: "smooth",
                            });
                        }}
                        style={{
                          display: "inline-block",
                          padding: "12px 24px",
                          backgroundColor: "#007bff",
                          color: "#fff",
                          borderRadius: "5px",
                          border: "none",
                          fontWeight: "600",
                          fontSize: "16px",
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                        }}
                      >
                        Откликнуться на вакансию
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </main>

      <Footer />

      <Popup
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        modal
        nested
        className="popup-container"
        position="center center"
        overlayStyle={{
          background: "rgba(32, 38, 55, 0.9)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          boxSizing: "border-box",
        }}
        contentStyle={{
          background: "transparent",
          border: "none",
          padding: 0,
          margin: 0,
          width: "100%",
          height: "auto",
          maxWidth: "600px",
          overflow: "visible",
        }}
      >
        <div
          className="modal"
          style={{
            position: "relative",
            background: "#fff",
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "40px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <FontAwesomeIcon
            icon={faClose}
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              fontSize: "24px",
              color: "#E6C96B",
              cursor: "pointer",
              background: "rgba(0,0,0,0.5)",
              padding: "8px",
              borderRadius: "50%",
              zIndex: 10000,
            }}
          />
          {thankYou ? (
            <div style={{ textAlign: "center" }}>
              <h2 style={{ marginBottom: "20px", color: "#333" }}>
                Спасибо за заявку!
              </h2>
              <p style={{ color: "#666" }}>
                Мы свяжемся с вами в ближайшее время.
              </p>
            </div>
          ) : (
            <div>
              <h2
                style={{
                  marginBottom: "30px",
                  textAlign: "center",
                  color: "#333",
                }}
              >
                Записаться на прием
              </h2>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <input
                  type="text"
                  placeholder="Ваше имя"
                  style={{
                    padding: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "16px",
                  }}
                />
                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  style={{
                    padding: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "16px",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "15px",
                    background: "#E6C96B",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Отправить
                </button>
              </form>
            </div>
          )}
        </div>
      </Popup>
    </div>
  );
};

export default Vacancies;
