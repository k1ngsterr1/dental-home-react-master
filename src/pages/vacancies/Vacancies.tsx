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
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Popup from "reactjs-popup";
// // MDBCheckbox import removed // Removed due to ES module compatibility
import emailjs from "@emailjs/browser";
import Mheader from "../../components/header/m-header";

const Vacancies = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChecked) {
      setErrorMessage(
        "Пожалуйста, дайте согласие на обработку персональных данных"
      );
      return;
    }

    const templateParams = {
      from_name: name,
      phone: phone,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams,
        "YOUR_USER_ID" // Replace with your EmailJS user ID
      )
      .then(() => {
        setSuccessMessage(
          "Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время."
        );
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
        setIsChecked(false);
      })
      .catch(() => {
        setErrorMessage(
          "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже."
        );
      });
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
      <Mheader
        isMenuOpen={isMenuOpen}
        openModal={openModal}
        toggleMenu={toggleMenu}
      ></Mheader>
      <main className="content">
        <div className="header-container" style={{ width: "100%" }}></div>
        <div className="tablet" style={{ width: "100%" }}>
          <Header
            isMenuPcOpen={isMenuPcOpen}
            openModal={openModal}
            togglePcMenu={togglePcMenu}
          ></Header>
        </div>
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
                      <a
                        href="#application-form"
                        style={{
                          display: "inline-block",
                          padding: "12px 24px",
                          backgroundColor: "#007bff",
                          color: "#fff",
                          borderRadius: "5px",
                          textDecoration: "none",
                          fontWeight: "600",
                          fontSize: "16px",
                          transition: "background-color 0.3s ease",
                        }}
                      >
                        Откликнуться на вакансию
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Application form section */}
        <Reveal style={{ width: "100%" }}>
          <div
            id="application-form"
            style={{
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
              padding: "40px 30px",
              maxWidth: "800px",
              margin: "0 auto",
              boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "30px",
                textAlign: "center",
                fontWeight: "700",
                color: "#222",
              }}
            >
              Отправить резюме
            </h2>

            {successMessage && (
              <div
                style={{
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  padding: "15px",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                {successMessage}
              </div>
            )}

            {errorMessage && (
              <div
                style={{
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  padding: "15px",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleFormSubmit}>
              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  Имя*
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                    backgroundColor: "#fff",
                  }}
                />
              </div>

              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  Телефон*
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                    backgroundColor: "#fff",
                  }}
                />
              </div>

              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "16px",
                    backgroundColor: "#fff",
                  }}
                />
              </div>

              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <label
                  htmlFor="message"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "#333",
                  }}
                >
                  Сопроводительное письмо
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "12px 15px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    resize: "vertical",
                    fontSize: "16px",
                    backgroundColor: "#fff",
                  }}
                />
              </div>

              <div
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <MDBCheckbox
                  name="privacy"
                  id="privacy"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  label=""
                />
                <label
                  htmlFor="privacy"
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    marginLeft: "10px",
                  }}
                >
                  Я согласен(на) на обработку{" "}
                  <Link
                    to="/privacy"
                    style={{
                      color: "#007bff",
                      textDecoration: "underline",
                    }}
                  >
                    персональных данных
                  </Link>
                </label>
              </div>

              <div
                style={{
                  textAlign: "center",
                }}
              >
                <button
                  type="submit"
                  style={{
                    padding: "14px 28px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    fontSize: "18px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Отправить резюме
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};

export default Vacancies;
