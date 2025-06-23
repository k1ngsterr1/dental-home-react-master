import { keyframes } from "@emotion/react";
import {
  faChevronRight,
  faClose,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBCheckbox } from "mdb-react-ui-kit";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { Reveal } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { Map, Placemark, YMaps } from "react-yandex-maps";
import Popup from "reactjs-popup";
import { Swiper } from "swiper/react";
import Header from "../../components/header/header";

import emailjs from "@emailjs/browser";

import { Helmet } from "react-helmet";
import Footer from "../../components/footer/Footer";
import ReviewGallery from "../../components/reviews/ReviewGallery";
import ReviewGalleryDesktop from "../../components/reviews/ReviewGalleryDesktop";

// import "./styles/clinics_styles.css";

const doctorOneMob = require("../../assets/01.webp");
const doctorTwoMob = require("../../assets/02.webp");
const doctorThreeMob = require("../../assets/03.webp");
const doctorFourMob = require("../../assets/04.webp");
const doctorFiveMob = require("../../assets/05.webp");
const doctorSixMob = require("../../assets/06.webp");
const doctorSevenMob = require("../../assets/07.webp");
const doctorEightMob = require("../../assets/08.webp");
const doctorNineMob = require("../../assets/09.webp");

const doctorOnePc = require("../../assets/1.webp");
const doctorTwoPc = require("../../assets/2.webp");
const doctorThreePc = require("../../assets/3.webp");
const doctorFourPc = require("../../assets/4.webp");
const doctorFivePc = require("../../assets/5.webp");
const doctorSixPc = require("../../assets/6.webp");
const doctorSevenPc = require("../../assets/7.webp");
const doctorEightPc = require("../../assets/8.webp");
const doctorNinePc = require("../../assets/9.webp");
const modalImage = require("../../assets/example_modal.webp");

const featuresPhotoPc = require("../../assets/features_image.webp");
const galleryOnePic = require("../../assets/gallery_one_pic.webp");
const galleryTwoPic = require("../../assets/gallery_two_pic.webp");

const serviceOneMob = require("../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../assets/service_mob_03.webp");
const serviceFourMob = require("../../assets/service_mob_04.webp");

interface Tabprops {
  number: string;
  text: string;
  goldText?: string;
}

const FeatureTab: React.FC<Tabprops> = (props) => {
  return (
    <div className="feature-tab">
      <span className="number">{props.number}</span>
      <p className="paragraph">{props.text}</p>
      <p className="gold-text">{props.goldText}</p>
    </div>
  );
};

const FeatureLong: React.FC<Tabprops> = (props) => {
  return (
    <div className="feature-tab-long">
      <span className="number">{props.number}</span>
      <p
        className="paragraph-goldz"
        style={{
          color: "#E8CB6C",
          marginLeft: "clamp(8px,3.73824vw,32px)",
          marginTop: "clamp(13px,6.07464vw,52px)",
          fontSize: "clamp(8px,3.73824vw,32px)",
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

const pavel = require("../../assets/pavel.webp");
const featuresPhoto = require("../../assets/features_photo.png");
const logoMobile: string = require("../../assets/logo_mob.svg").default;
const bulb: string = require("../../assets/bulb.svg");

type Swiper = any;

const ContactsPage = () => {
  const [thankYou, setThankYou] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const mapData = {
    geometry: [55.9647, 37.915],
    zoom: 9,
  };

  const placeMark1 = {
    geometry: [55.965502, 37.920435],
    properties: {
      hintContent: "Клиника на Советском проспекте, 5",
      balloonContent: "Клиника Dental Home",
    },
  };

  const placeMark2 = {
    geometry: [55.974727, 37.905218],
    properties: {
      hintContent: "Клиника на Рощинской, 9",
      balloonContent: "Клиника Dental Home",
    },
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  const customAnimation = keyframes`
    from {
      opacity: 1;
      transform: translate3d(0px, 0px, 0);
    }
    
    to {
      opacity: 0;
      transform: translate3d(-2000, 0, 0);
    }
    `;

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [bookDate, setBookDate] = useState("");
  const [bookTime, setBookTime] = useState("");
  const [visitGoal, setVisitGoal] = useState("");
  const [comment, setComment] = useState("");

  const form: RefObject<HTMLDivElement> = useRef(null);

  function sendEmail(e: any) {
    e.preventDefault();
    setFullName("");
    setPhoneNumber("");
    setServiceName("");
    setDoctorName("");
    setServiceName("");

    emailjs
      .sendForm(
        "service_kwh5orp",
        "template_5kdc5wu",
        e.target,
        "b-K7bdT7JW4cqcN4y"
      )
      .then((res) => {
        setThankYou(true);
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  }

  const [open, setOpen] = useState(false);

  const phoneForm = useRef<HTMLFormElement>(null);

  function openPopupWindow() {
    setOpen(true);
  }

  function sendPhoneRequest(e: any) {
    e.preventDefault();
    setFullName("");
    setPhoneNumber("");

    emailjs
      .sendForm(
        "service_kwh5orp",
        "template_rgnaux5",
        e.target,
        "b-K7bdT7JW4cqcN4y"
      )
      .then((res) => {
        setThankYou(true);
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  }

  const openModal = () => {
    console.log("Opening modal");
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setThankYou(false);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {};
  }, []);

  return (
    <div>
      {isLoading ? (
        <Reveal keyframes={customAnimation} delay={1000}>
          <div className={`loader ${isLoading ? "" : "hidden"}`}>
            <div className="loader-container">
              <img className="logo" src={logoMobile} alt="logo"></img>
              <h1 className="loading-heading">
                Клиника Эстетической Стоматологии
              </h1>
            </div>
          </div>
        </Reveal>
      ) : (
        <div className="screen">
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              Dental Home в Ивантеевке - стоматологические клиники, адрес,
              телефон
            </title>
            <meta
              property="og:title"
              content="Dental Home в Ивантеевке - стоматологические клиники, адрес,
              телефон
"
            ></meta>
            <meta
              property="og:description"
              content="Наши клиники Dental Home в Ивантеевке на Советском проспекте 5 и Рощинской 9 готовы оказать качественные стоматологические услуги. Запишитесь на прием"
            ></meta>
            <meta
              name="description"
              content="Наши клиники Dental Home в Ивантеевке на Советском проспекте 5 и Рощинской 9 готовы оказать качественные стоматологические услуги. Запишитесь на прием"
            ></meta>
          </Helmet>
          <div className="content" style={{ width: "100%" }}>
            <div className="header-container" style={{ width: "100%" }}>
              <Header
                isMenuOpen={isMenuOpen}
                openModal={openModal}
                toggleMenu={toggleMenu}
              ></Header>
            </div>
            <div className="tablet" style={{ width: "100%" }}>
              <Header
                isMenuPcOpen={isMenuPcOpen}
                openModal={openModal}
                togglePcMenu={togglePcMenu}
              ></Header>
            </div>
            <main className="main-content">
              <div
                className="heading-content-container"
                style={{ width: "90%", margin: "auto" }}
              >
                <div className="bread-dots">
                  <Link to="/" className="main-link">
                    Главная
                  </Link>
                  <div className="circle"></div>
                  <Link to="/contacts" className="prices-link">
                    Контакты
                  </Link>
                </div>
                <h1 className="heading">Контакты</h1>
                <p
                  className="paragraph"
                  style={{
                    marginTop: "clamp(8px,3.73824vw,32px)",
                    color: "#202637",
                  }}
                >
                  Для связи с нами, оставьте заявку или позвоните нам
                </p>
                <div
                  className="adress"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span className="text">
                    г. Ивантеевка, Советский проспект 5
                  </span>
                  <span className="text">Пн-Вс - 9:00-21:00</span>
                </div>
                <div
                  className="adress"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "32px",
                  }}
                >
                  <span className="text">г. Ивантеевка, Рощинская 9</span>
                  <span className="text">Пн-Вс - 9:00-21:00</span>
                </div>
              </div>
              <div
                className="map-container"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "clamp(16px,7.47648vw,64px)",
                }}
              >
                <YMaps>
                  <Map
                    defaultState={{
                      center: [55.965502, 37.920435], // Your initial latitude and longitude
                      zoom: 12,
                    }}
                    width="90%"
                    height="345px"
                  >
                    <Placemark {...placeMark1}></Placemark>
                    <Placemark {...placeMark2}></Placemark>
                  </Map>
                </YMaps>
              </div>
              <div className="form-screen">
                <section className="content">
                  <div className="form-heading-container">
                    <h3 className="form-heading">Записаться На Прием</h3>
                  </div>
                  <div className="divider"></div>
                  <p className="paragraph text-center mt-16">
                    Сеть стоматологий Dental Home в Ивантеевке - это место, где
                    забота о вашей улыбке становится приоритетом. У нас также
                    есть отделение{" "}
                    <a href="https://dental-home.ru/children-dental">
                      {" "}
                      детской стоматологии
                    </a>
                    , где специалисты с опытом работы с детьми помогут создать
                    комфортную и безопасную атмосферу для маленьких пациентов.
                    Мы стремимся сделать поход к стоматологу приятным и
                    безболезненным, используя индивидуальный подход и игровые
                    методики. Врачи-стоматологи в Ивантеевке заботятся о
                    здоровье зубов с особым вниманием, помогая сохранить крепкие
                    и красивые зубы на долгие годы.
                  </p>
                  <form action="" className="form">
                    <div className="input-container">
                      <label htmlFor="name" className="la">
                        Имя*
                      </label>
                      <input
                        type="text"
                        required={true}
                        value={fullName}
                        name="fullName"
                        onChange={(event) => setFullName(event.target.value)}
                        className="input-text"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor="phone" className="la">
                        Номер телефона*
                      </label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        name="phoneNumber"
                        className="input-text"
                        placeholder="+7 (991) 779-39-95"
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor="service" className="la">
                        Услуга
                      </label>
                      <input
                        type="text"
                        value={serviceName}
                        onChange={(event) => setServiceName(event.target.value)}
                        name="serviceName"
                        placeholder="Выберите Услугу"
                        className="input-text"
                      />
                    </div>

                    {/* <div className="input-container">
                    <label htmlFor="direction" className="la">
                      Направление
                    </label>
                    <input
                      type="text"
                      name="direction"
                      placeholder="Выберите Направление"
                      className="input-text"
                    />
                  </div> */}
                    <div className="input-container">
                      <label htmlFor="doctor" className="la">
                        Фамилия врача
                      </label>
                      <input
                        type="text"
                        name="doctorName"
                        value={doctorName}
                        onChange={(event) => setDoctorName(event.target.value)}
                        placeholder="Фамилия врача"
                        className="input-text"
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor="service" className="la">
                        Дата приема
                      </label>
                      <input
                        type="text"
                        value={bookDate}
                        onChange={(event) => setBookDate(event.target.value)}
                        name="bookDate"
                        placeholder="Дата приема"
                        className="input-text"
                      />
                    </div>
                    <div className="input-container">
                      <label htmlFor="service" className="la">
                        Время приема
                      </label>
                      <input
                        type="text"
                        value={bookTime}
                        onChange={(event) => setBookDate(event.target.value)}
                        name="bookTime"
                        placeholder="Время приема"
                        className="input-text"
                      />
                    </div>

                    <div className="input-container">
                      <label htmlFor="comment" className="la">
                        Комментарий
                      </label>
                      <textarea
                        name="comment"
                        value={comment}
                        onChange={(event) => setComment(event.target.value)}
                        className="comment"
                      ></textarea>
                    </div>
                    <div className="checkbox-container">
                      <div className="checkbox-container-2">
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheckChecked"
                          label="Ознакомлен с Условиями обработки персональных данных"
                          defaultChecked
                        />
                      </div>
                    </div>
                    <button className="form-button" value="Send">
                      Записаться на прием
                      <FontAwesomeIcon
                        className="icon"
                        icon={faChevronRight}
                        style={{
                          fontSize: "clamp(7px,3.2709599999999996vw,28px",
                          marginLeft: "clamp(4px,1.86912vw,16px)",
                        }}
                      ></FontAwesomeIcon>
                    </button>
                  </form>

                  <ReviewGallery />
                </section>
              </div>
              <p className="paragraph text-center mt-64">
                Почтовый адрес: 141282, МО, г. Ивантеевка, ул. Рощинская, д. 9
              </p>
              <p className="paragraph text-center mt-16">
                Контактный телефон: 8 (991) 779-39-95
              </p>
              <p className="paragraph text-center mt-16">
                Электронный адрес: dental-home@mail.ru{" "}
              </p>
              <p className="paragraph text-center mt-32">
                <strong> Сведения о лицензии:</strong>
              </p>
              <p className="paragraph text-center mt-16 w80 m-auto mb-64">
                Лицензия на медицинскую деятельность № Л041-01162-50/00663420,
                выдана Министерством Здравоохранения Московской области, Дата
                выдачи: 13.07.2023
              </p>{" "}
              <span className="paragraph text-center mt-32">
                <strong>ИНН</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                5038163740
              </p>{" "}
              <span className="paragraph text-center mt-32">
                <strong>КПП</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                503801001
              </p>
              <span className="paragraph text-center mt-32">
                <strong>ОГРН</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                1225000038856
              </p>
              <span className="paragraph text-center mt-32">
                <strong>Дата образования</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                20.04.2022
              </p>
              <span className="paragraph text-center mt-32">
                <strong>Юридечский адрес</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                141282, Московская область, г.о. Пушкинский, г Ивантеевка, ул
                Рощинская, д. 9{" "}
              </p>
              <span className="paragraph text-center mt-32">
                <strong>Основной вид деятельности</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                Стоматологическая практика (86.23)
              </p>
              <span className="paragraph text-center mt-32">
                <strong>Руководители</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                Голубенкова Марина Михайловна (Генеральный Директор)
              </p>
              <span className="paragraph text-center pt-32 m-auto">
                <strong> Скачать выписку из ЕГРЮЛ:</strong>
                <br />
                <span>https://disk.yandex.ru/i/GPi7r6r04EyEdQ</span>
              </span>
              <span className="paragraph text-center pt-32 m-auto">
                <strong> Врачи-стоматологи в Ивантеевке:</strong>
                <br />
                <a href="https://dental-home.ru/doctors">
                  https://dental-home.ru/doctors
                </a>
              </span>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong> Номера телефонов справочных служб</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>МЧС: 101</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>Полиция: 102</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>Скорая помощь: 103</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>Аварийная газовая служба: 104</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>Вызов экстренных служб: 112</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>
                  Операторы линии «Ребёнок в опасности»: <br /> 121, 122, 123
                </strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong> Вышестоящие и контролирующие органы:</strong>
              </p>
              <p className="paragraph text-center pt-16 w80 m-auto">
                Департамент здравоохранения Московской области Адрес: 143407,
                Московская область, г. Красногорск, бульвар Строителей, д. 1.{" "}
                <br />
                <br />
                Телефон: 8 (498) 602-03-01; 8 (498) 602-03-03 Сергиево-Посадский
                территориальный отдел Управления Федеральной службы по надзору в
                сфере защиты прав потребителей и благополучия человека по
                Московской области Адрес: 141308, Московская область, г. Сергиев
                Посад, Хотьковский проезд, д.18 Телефон: 8-496-540-22-25 <br />{" "}
                <br />
                Территориальный орган Росздравнадзора по г. Москве и Московской
                области Адрес: 109316, Россия, г. Москва, Волгоградский
                проспект, дом 27. Телефон: 8(916) 256-76-76
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong> Сведения о ТФОМС:</strong>
              </p>
              <p className="paragraph text-center pt-16 w80 m-auto">
                Порядок и условия предоставления медицинской помощи в
                соответствии с программой и территориальной программой Вы можете
                узнать - https://www. mofoms.ru Предельные сроки ожидания
                оказания бесплатной медицинской помощи в соответствии с
                программой и территориальной программой Вы можете узнать -
                https://www. mofoms.ru
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>
                  {" "}
                  Стандарты медпомощи и клинические рекомендации:
                </strong>
              </p>
              <p className="paragraph text-center pt-16 w80 m-auto">
                pravo.gov.ru и cr.minzdrav.gov.ru
              </p>
            </main>
          </div>
          <div className="pc-content-c" style={{ width: "100%" }}>
            <main className="main-content" style={{ width: "100%" }}>
              <div
                className="header-container"
                style={{ width: "71.82291666666667%", margin: "auto" }}
              >
                <Header
                  isMenuPcOpen={isMenuPcOpen}
                  openModal={openModal}
                  togglePcMenu={togglePcMenu}
                ></Header>
              </div>
              <div
                className="upper-content"
                style={{
                  width: "71.82291666666667%",
                  margin: "auto",
                  marginTop: "clamp(32px,3.33312vw,128px)",
                }}
              >
                <div className="bread-dots-container">
                  <Link className="link" to="/">
                    Главная
                  </Link>
                  <div className="bread-dot"></div>
                  <Link className="link-prices" to="/contacts">
                    Контакты
                  </Link>
                </div>
                <div className="heading-container">
                  <h1 className="heading">Контакты</h1>
                </div>
                <p
                  className="paragraph"
                  style={{
                    fontSize: "clamp(11.5px,1.19784vw,46px)",
                    color: "#202637",
                  }}
                >
                  Для связи с нами, оставьте заявку или позвоните нам
                </p>
                <div
                  className="adress"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <span className="text">
                    г. Ивантеевка, Советский проспект 5
                  </span>
                  <span className="text">Пн-Вс - 9:00-21:00</span>
                </div>
                <div
                  className="adress"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "32px",
                  }}
                >
                  <span className="text">г. Ивантеевка, Рощинская 9</span>
                  <span className="text">Пн-Вс - 9:00-21:00</span>
                </div>
                <div className="divider-container">
                  <div className="divider"></div>
                </div>
              </div>
              <div
                className="map-container"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  className="map-heading"
                  style={{
                    marginTop: "clamp(16px,1.66656vw,64px)",
                    marginBottom: "clamp(16px,1.66656vw,64px)",
                  }}
                >
                  Клиники Dental Home на карте
                </h2>
                <YMaps>
                  <Map
                    defaultState={{ center: [55.9647, 37.915], zoom: 12 }}
                    width="75%"
                    height="clamp(215px,22.3944vw,860px)"
                  >
                    <Placemark {...placeMark1}></Placemark>
                    <Placemark {...placeMark2}></Placemark>
                  </Map>
                </YMaps>
              </div>
              <div
                className="form-pc-screen"
                ref={form}
                onSubmit={sendEmail}
                style={{
                  borderTop: "none",
                  marginTop: "clamp(32px,3.33312vw,128px)",
                  marginBottom: "clamp(64px,6.666666666666667vw,256px)",
                }}
              >
                <section className="content" style={{ borderTop: "none" }}>
                  <p className="paragraph text-center">
                    Сеть стоматологий Dental Home в Ивантеевке - это место, где
                    забота о вашей улыбке становится приоритетом. У нас также
                    есть отделение{" "}
                    <a href="https://dental-home.ru/children-dental">
                      {" "}
                      детской стоматологии
                    </a>
                    , где специалисты с опытом работы с детьми помогут создать
                    комфортную и безопасную атмосферу для маленьких пациентов.
                    Мы стремимся сделать поход к стоматологу приятным и
                    безболезненным, используя индивидуальный подход и игровые
                    методики. Врачи-стоматологи в Ивантеевке заботятся о
                    здоровье зубов с особым вниманием, помогая сохранить крепкие
                    и красивые зубы на долгие годы.
                  </p>
                  <form action="" className="form-content">
                    <div className="row-c">
                      <div className="input-container">
                        <span className="text">Имя*</span>
                        <input
                          type="text"
                          className="input-c"
                          required={true}
                          value={fullName}
                          name="fullName"
                          onChange={(event) => setFullName(event.target.value)}
                          placeholder="Иван Иванов"
                        />
                      </div>
                      <div className="input-container">
                        <span className="text">Телефон*</span>
                        <input
                          type="text"
                          className="input-c"
                          required={true}
                          value={phoneNumber}
                          name="phoneNumber"
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
                          placeholder="+7 (991) 779-39-95"
                        />
                      </div>
                    </div>
                    <div className="row-c">
                      <div className="input-container services">
                        <span className="text">Услуга</span>
                        <input
                          type="text"
                          placeholder="Выберите Услугу"
                          required={true}
                          value={serviceName}
                          name="serviceName"
                          onChange={(event) =>
                            setServiceName(event.target.value)
                          }
                          className="input-s"
                        />
                      </div>
                    </div>
                    <div className="row-c"></div>
                    <div className="row-c">
                      <div className="input-container services">
                        <span className="text">Фамилия врача</span>
                        <input
                          type="text"
                          placeholder="Фамилия врача"
                          required={true}
                          value={doctorName}
                          name="doctorName"
                          onChange={(event) =>
                            setDoctorName(event.target.value)
                          }
                          className="input-s"
                        />
                      </div>
                    </div>
                    <div className="row-c">
                      <div className="input-container services">
                        <span className="text">Дата приема</span>
                        <input
                          type="text"
                          placeholder="Дата приема"
                          // ! поменять на bookDate
                          value={bookDate}
                          name="bookDate"
                          onChange={(event) => setBookDate(event.target.value)}
                          className="input-s"
                        />
                      </div>
                    </div>
                    <div className="row-c">
                      <div className="input-container services">
                        <span className="text">Время приема</span>
                        <input
                          type="text"
                          placeholder="Время приема"
                          value={bookTime}
                          name="bookTime"
                          onChange={(event) => setBookTime(event.target.value)}
                          className="input-s"
                        />
                      </div>
                    </div>

                    <div className="row-c">
                      <div className="input-container services">
                        <span className="text">Комментарий</span>
                        <textarea
                          className="comment"
                          name="comment"
                          value={comment}
                          onChange={(event) => setComment(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="checkbox-container">
                      <div className="check-row">
                        <input type="checkbox" className="checkbox" />
                        <span className="text">
                          Ознакомлен с Условиями обработки персональных данных
                        </span>
                      </div>
                      <button className="golden-btn" value="Send">
                        Записаться на прием
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="icon"
                          style={{
                            fontSize: "clamp(6px,0.62496vw,24px)",
                            marginLeft: "clamp(4px,0.41664vw,16px)",
                          }}
                        ></FontAwesomeIcon>
                      </button>
                    </div>
                  </form>
                  <ReviewGalleryDesktop />
                </section>
              </div>
              <p className="paragraph text-center mt-64">
                Почтовый адрес: 141282, МО, г. Ивантеевка, ул. Рощинская, д. 9
              </p>
              <p className="paragraph text-center mt-16">
                Контактный телефон: 8 (991) 779-39-95
              </p>
              <p className="paragraph text-center mt-16">
                Электронный адрес: dental-home@mail.ru{" "}
              </p>
              <p className="paragraph text-center mt-32">
                <strong> Сведения о лицензии:</strong>
              </p>
              <p className="paragraph text-center mt-16 w80 m-auto mb-64">
                Лицензия на медицинскую деятельность № Л041-01162-50/00663420,
                выдана Министерством Здравоохранения Московской области, Дата
                выдачи: 13.07.2023
              </p>{" "}
              <span className="paragraph text-center mt-32">
                <strong>ИНН</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                5038163740
              </p>{" "}
              <span className="paragraph text-center mt-32">
                <strong>КПП</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                503801001
              </p>
              <span className="paragraph text-center mt-32">
                <strong>ОГРН</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                1225000038856
              </p>
              <span className="paragraph text-center mt-32">
                <strong>Дата образования</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                20.04.2022
              </p>
              <span className="paragraph text-center mt-32">
                <strong>Юридечский адрес</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                141282, Московская область, г.о. Пушкинский, г Ивантеевка, ул
                Рощинская, д. 9{" "}
              </p>
              <span className="paragraph text-center mt-32">
                <strong>Основной вид деятельности</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                Стоматологическая практика (86.23)
              </p>
              <span className="paragraph text-center mt-32">
                <strong>Руководители</strong>
              </span>
              <p className="paragraph text-center pt-16 w80 m-auto">
                Голубенкова Марина Михайловна (Генеральный Директор)
              </p>
              <span className="paragraph text-center pt-32 m-auto">
                <strong> Скачать выписку из ЕГРЮЛ:</strong>
                <br />
                <span>https://disk.yandex.ru/i/GPi7r6r04EyEdQ</span>
              </span>
              <span className="paragraph text-center pt-32 m-auto">
                <strong> Врачи-стоматологи в Ивантеевке:</strong>
                <br />
                <a href="https://dental-home.ru/doctors">
                  https://dental-home.ru/doctors
                </a>
              </span>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong> Номера телефонов справочных служб</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>МЧС: 101</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>Полиция: 102</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>Скорая помощь: 103</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>Аварийная газовая служба: 104</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>Вызов экстренных служб: 112</strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>
                  Операторы линии «Ребёнок в опасности»: <br /> 121, 122, 123
                </strong>
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong> Вышестоящие и контролирующие органы:</strong>
              </p>
              <p className="paragraph text-center pt-16 w80 m-auto">
                Департамент здравоохранения Московской области Адрес: 143407,
                Московская область, г. Красногорск, бульвар Строителей, д. 1.{" "}
                <br />
                <br />
                Телефон: 8 (498) 602-03-01; 8 (498) 602-03-03 Сергиево-Посадский
                территориальный отдел Управления Федеральной службы по надзору в
                сфере защиты прав потребителей и благополучия человека по
                Московской области Адрес: 141308, Московская область, г. Сергиев
                Посад, Хотьковский проезд, д.18 Телефон: 8-496-540-22-25 <br />{" "}
                <br />
                Территориальный орган Росздравнадзора по г. Москве и Московской
                области Адрес: 109316, Россия, г. Москва, Волгоградский
                проспект, дом 27. Телефон: 8(916) 256-76-76
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong> Сведения о ТФОМС:</strong>
              </p>
              <p className="paragraph text-center pt-16 w80 m-auto">
                Порядок и условия предоставления медицинской помощи в
                соответствии с программой и территориальной программой Вы можете
                узнать - https://www. mofoms.ru Предельные сроки ожидания
                оказания бесплатной медицинской помощи в соответствии с
                программой и территориальной программой Вы можете узнать -
                https://www. mofoms.ru
              </p>
              <p className="paragraph text-center pt-32 w80 m-auto">
                <strong>Стандарты медпомощи и клинические рекомендации:</strong>
              </p>
              <p className="paragraph text-center pt-16 pb-64 w80 m-auto">
                pravo.gov.ru и cr.minzdrav.gov.ru
              </p>
            </main>
          </div>
          <Footer></Footer>
          <Popup
            open={open}
            closeOnDocumentClick
            onClose={closeModal}
            modal
            nested
            className="popup-container"
            position="center center"
          >
            <div className="modal">
              <img
                className="modal-img"
                src={modalImage}
                alt="modal-picture"
              ></img>
              <FontAwesomeIcon
                icon={faClose}
                onClick={closeModal}
                className="gold-cross"
              ></FontAwesomeIcon>
              <div className="modal-content">
                <img className="logo" src={logoMobile} alt="logotype"></img>
                <span className="text">Хотите получить консультацию?</span>
                <span className="additional-text">
                  Оставьте свой номер и мы перезвоним вам
                </span>
                <form className="input-container" onSubmit={sendPhoneRequest}>
                  <label htmlFor="phone-number-input" className="label">
                    Ваш номер телефона*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="phone-number-input"
                    placeholder="+7 (925) 222-90-22"
                    required={true}
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    style={{ textAlign: "center" }}
                    id=""
                  />
                  <button className="phone-btn" value="Send">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="icon"
                    ></FontAwesomeIcon>
                    Хорошо жду звонка
                  </button>
                </form>
              </div>
            </div>
          </Popup>
          <Popup
            open={thankYou}
            closeOnDocumentClick
            onClose={closeModal}
            modal
            nested
            className="popup-container"
            position="center center"
            overlayStyle={{ background: "rgba(0,0,0,0.7)" }}
          >
            <div className="modal-thanks">
              <FontAwesomeIcon
                icon={faClose}
                onClick={closeModal}
                className="gold-cross"
              ></FontAwesomeIcon>
              <div className="modl-content">
                <img className="logo" src={logoMobile} alt="logotype"></img>
                <span className="text">Спасибо за вашу заявку</span>
                <span className="additional-text">
                  В скором времени мы свяжемся с вами
                </span>
              </div>
            </div>
          </Popup>
        </div>
      )}
    </div>
  );
};

export default ContactsPage;
