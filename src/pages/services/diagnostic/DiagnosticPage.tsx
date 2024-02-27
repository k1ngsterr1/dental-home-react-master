import React, { useState, useRef, RefObject, useEffect } from "react";
import Popup from "reactjs-popup";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";
import emailjs from "@emailjs/browser";
import { Reveal } from "react-awesome-reveal";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
  Link as ScrollLink,
} from "react-scroll";
import { MDBCheckbox } from "mdb-react-ui-kit";

import Header from "../../../components/header/header";
import ReviewGallery from "../../../components/reviews/ReviewGallery";
import Footer from "../../../components/footer/Footer";
import Gallery from "../../../components/gallery/gallery";
import ServiceGallery from "../../../components/gallery/services_gallery";
import PcServiceGallery from "../../../components/gallery/pc_services_gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faC,
  faChevronRight,
  faPhone,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import "../../../components/service_template/styles/services_styles.css";
import PcGallery from "../../../components/gallery/pc_gallery";
import ReviewGalleryDesktop from "../../../components/reviews/ReviewGalleryDesktop";

const pavelGallery = require("../../../assets/pavel_gallery.webp");
const pavelGalleryPc = require("../../../assets/pavel_pc.webp");

const mainService = require("../../../assets/service_pc.webp");

const doctorOne = require("../../../assets/1.webp");
const doctorTwo = require("../../../assets/2.webp");
const doctorThree = require("../../../assets/3.webp");
const doctorFour = require("../../../assets/4.webp");
const doctorFive = require("../../../assets/5.webp");
const doctorSix = require("../../../assets/6.webp");
const doctorSeven = require("../../../assets/7.webp");
const doctorEight = require("../../../assets/8.webp");
const doctorNine = require("../../../assets/9.webp");

const modalImage = require("../../../assets/example_modal.webp");
const logoMobile = require("../../../assets/logo_mob.svg").default;

const doctorOneMob = require("../../../assets/01.webp");
const doctorTwoMob = require("../../../assets/02.webp");
const doctorThreeMob = require("../../../assets/03.webp");
const doctorFourMob = require("../../../assets/04.webp");
const doctorFiveMob = require("../../../assets/05.webp");
const doctorSixMob = require("../../../assets/06.webp");
const doctorSevenMob = require("../../../assets/07.webp");
const doctorEightMob = require("../../../assets/08.webp");
const doctorNineMob = require("../../../assets/09.webp");

const serviceOnePc = require("../../../assets/service_1.webp");
const serviceTwoPc = require("../../../assets/service_2.webp");
const ServiceThreePc = require("../../../assets/service_3.webp");
const ServiceFourPc = require("../../../assets/service_4.webp");

const serviceOneMob = require("../../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../../assets/service_mob_03.webp");
const serviceFourMob = require("../../../assets/service_mob_04.webp");

const diagnosticPc = require("../../../assets/diagnostic_pc.webp");

const doctorTen = require("../../../assets/yana_pc.webp");
const doctorTenMob = require("../../../assets/yana_mob.webp");

const doctorEleven = require("../../../assets/sadiga.webp");
const doctorElevenMob = require("../../../assets/sadiga_mob.webp");

const DiagnosticPage = () => {
  const [thankYou, setThankYou] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const phoneForm = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [comment, setComment] = useState("");

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
    setThankYou(false);
    setOpen(false);
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

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {};
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

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

  const form: RefObject<HTMLDivElement> = useRef(null);

  return (
    <div className="div">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Стоматологические консультации в Ивантеевке в Dental Home</title>
        <meta
          property="og:title"
          content="Стоматологические консультации в Ивантеевке в Dental Home"
        ></meta>
        <meta
          property="og:description"
          content="Стоматологическая консультация в Ивантеевке. Мы также предлагаем рентгенологию, анестезию и различные диагностические процедуры для точной диагностики и планирования лечения"
        ></meta>
        <meta
          name="description"
          content="Стоматологическая консультация в Ивантеевке. Мы также предлагаем рентгенологию, анестезию и различные диагностические процедуры для точной диагностики и планирования лечения"
        ></meta>
      </Helmet>
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
              Стоматологические консультации в Ивантеевке в Dental Home
            </title>
            <meta
              property="og:title"
              content="Стоматологические консультации в Ивантеевке в Dental Home"
            ></meta>
            <meta
              property="og:description"
              content="Стоматологическая консультация в Ивантеевке. Мы также предлагаем рентгенологию, анестезию и различные диагностические процедуры для точной диагностики и планирования лечения"
            ></meta>
            <meta
              name="description"
              content="Стоматологическая консультация в Ивантеевке. Мы также предлагаем рентгенологию, анестезию и различные диагностические процедуры для точной диагностики и планирования лечения"
            ></meta>
          </Helmet>
          <main className="services-screen-mobile">
            <div className="content">
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
              <div className="heading-container">
                <div className="bread-dots">
                  <Link to="/" className="link">
                    Главная
                  </Link>
                  <div className="circle"></div>
                  <Link to="/#services" className="link">
                    Услуги
                  </Link>
                  <div className="circle"></div>
                  <Link to="/services/diagnostic" className="link active">
                    Диагностика
                  </Link>
                </div>
                <h1 className="heading">Диагностика</h1>
                <button className="golden-button" onClick={openModal}>
                  <span className="text">Записаться</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon"
                  ></FontAwesomeIcon>
                </button>
              </div>
              <div className="information-container">
                <div className="divider-container">
                  <div className="divider"></div>
                  <span className="text">Об услуге</span>
                </div>
                <section className="information">
                  <h3 className="information-heading">
                    Современная диагностика заболеваний зубов в клинике Dental
                    Home в Ивантеевке
                  </h3>
                  <p className="information-paragraph">
                    Клиника Dental Home в Ивантеевке предлагает современные
                    методы диагностики заболеваний зубов, которые позволяют
                    точно определить причину проблемы и разработать эффективный
                    план лечения.
                    <a href="https://dental-home.ru/doctors">
                      {""}
                      Наша команда специалистов {""}
                    </a>
                    использует передовое оборудование и технологии, чтобы
                    обеспечить максимальную точность и надежность диагностики.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Комплексный подход к диагностике заболеваний зубов в клинике
                    Dental Home в Ивантеевке
                  </h3>
                  <p className="information-paragraph">
                    В клинике Dental Home в Ивантеевке мы применяем комплексный
                    подход к диагностике заболеваний зубов. Наша команда
                    проводит тщательное обследование пациента, используя
                    различные методы и инструменты, чтобы получить полную
                    картину состояния зубов и десен. Мы также уделяем особое
                    внимание анализу рентгеновских снимков и других специальных
                    исследований, чтобы выявить скрытые проблемы и предотвратить
                    их развитие.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Преимущества диагностики заболеваний зубов в клинике Dental
                    Home в Ивантеевке
                  </h3>
                  <p className="information-paragraph">
                    Диагностика заболеваний зубов в клинике Dental Home в
                    Ивантеевке имеет ряд преимуществ, делающих нашу клинику
                    лучшим выбором для пациентов. Во-первых, мы используем самые
                    современные методы и технологии, которые позволяют нам
                    обнаруживать проблемы на ранних стадиях и предотвращать их
                    развитие. Наша команда специалистов обладает высокой
                    квалификацией и опытом работы, что гарантирует точность и
                    надежность результатов диагностики.
                    <br />
                    <br />
                    Во-вторых, мы предлагаем индивидуальный подход к каждому
                    пациенту. Мы учитываем все особенности здоровья и историю
                    болезни каждого пациента, чтобы разработать оптимальный план
                    лечения. Мы также обеспечиваем постоянное мониторинг
                    состояния зубов и десен, чтобы предотвратить возникновение
                    новых проблем.
                    <br />
                    <br />
                    Если вам необходима диагностика заболевания зубов в
                    Ивантеевке, обратитесь в клинику Dental Home. Мы гарантируем
                    высокое качество работы, точность диагностики и эффективное
                    лечение. Доверьте свое здоровье опытным специалистам и
                    получите здоровую и красивую улыбку, о которой всегда
                    мечтали.
                  </p>
                </section>
                <div className="divider"></div>
                <div className="plate">
                  <section className="tab-one">
                    <h5 className="plate-heading" style={{ width: "90%" }}>
                      Консультации
                    </h5>
                    <span className="text">
                      Прием (осмотр, консультация) врача-стоматолога первичный{" "}
                      <br /> <br />
                      (В01.065.007)
                    </span>
                    <span className="price">От 1.000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Диспансерный прием (осмотр, консультация)
                      врача-стоматолога <br /> <br />
                      (В04.065.005)
                    </span>
                    <span className="price">От 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Профилактический прием (осмотр, консультация)
                      врача-стоматолога <br /> <br /> (В04.065.006)
                    </span>
                    <span className="price last">0 ₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading" style={{ width: "90%" }}>
                      Рентгенология
                    </h5>
                    <span className="text">
                      Радиовизиография <br /> <br /> (А06.07.010 )
                    </span>
                    <span className="price">От 400 ₽</span>
                  </section>
                  {/* <section className="tab-two">
                    <span className="text">
                      Получение снимка на электронный адрес
                    </span>
                    <span className="price">От 100 ₽</span>
                  </section> */}
                  {/* <section className="tab-three">
                    <span className="text">
                      Запись на электронный носитель CD
                    </span>
                    <span className="price">От 300 ₽</span>
                  </section> */}
                  <section className="tab-three">
                    <span className="text">
                      Запись на электронный носитель USB <br /> <br />
                      (А06.07.013.002)
                    </span>
                    <span className="price">От 500 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Повторный диагностический снимок
                      <br /> <br />
                      (А06.07.013.003)
                    </span>
                    <span className="price last">От 0 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Компьютерная томография верхней и нижней челюсти и
                      придаточные пазухи (за исключением лобной пазухи)
                      <br /> <br />
                      (А06.07.013.003)
                    </span>
                    <span className="price last">От 4.100₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Компьютерная томография 5*5 область 2-3 рядом стоящих
                      зубов <br /> <br />
                      (А06.07.013.005)
                    </span>
                    <span className="price last">От 1.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Компьютерная томография 6*9 область одной челюсти <br />{" "}
                      <br />
                      (А06.07.013.006)
                    </span>
                    <span className="price last">От 2.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Компьютерная томография ВНЧС (височно-нижнечелюстного
                      сустава) <br /> <br /> (А06.07.013.007)
                    </span>
                    <span className="price last">От 1.500₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading" style={{ width: "90%" }}>
                      Исследования и диагностика
                    </h5>
                    <span className="text">
                      Исследование на диагностических моделях челюстей <br />
                      <br />
                      (A12.07.001 )
                    </span>
                    <span className="price">От 500 ₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Витальное окрашивание твердых тканей зуба <br /> <br />
                      (А02.07.002)
                    </span>
                    <span className="price">От 380 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Исследование кариозных полостей с использованием
                      стоматологического зонда <br /> <br /> (А02.07.005)
                    </span>
                    <span className="price">От 70₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Термодиагностика зуба <br /> <br /> (А02.07.005 ){" "}
                    </span>
                    <span className="price">От 50₽</span>
                  </section>

                  <section className="tab-three">
                    <span className="text">
                      Определение прикуса <br /> <br /> (А02.07.006){" "}
                    </span>
                    <span className="price">От 500 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Определение вида смыкания зубных рядов с помощью лицевой
                      дуги <br /> <br /> (А02.07.006.001)
                    </span>
                    <span className="price">От 1.500 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Перкуссия зубов <br /> <br /> (А02.07.007){" "}
                    </span>
                    <span className="price">От 40 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Электроодонтометрия зуба (ЭОД) <br /> <br /> (А05.07.001 ){" "}
                    </span>
                    <span className="price">От 120 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Определение индексов гигиены полости рта <br /> <br />
                      (А12.07.003 )
                    </span>
                    <span className="price last">От 250 ₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading" style={{ width: "90%" }}>
                      Реставрации
                    </h5>
                    <span className="text">
                      Реставрация 1 степени сложности <br /> <br />
                      (ТР-1)
                    </span>
                    <span className="price">От 4.000 ₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Реставрация 2 степени сложности <br /> <br /> (ТР-2)
                    </span>
                    <span className="price">От 4.900 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Реставрация 3 степени сложности <br /> <br /> (ТР-3)
                    </span>
                    <span className="price">От 5.500 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Художественная реставрация зуба <br /> <br /> (ТР-4)
                    </span>
                    <span className="price last">От 7.500 ₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading" style={{ width: "90%" }}>
                      Анестезия
                    </h5>
                    <span className="text">
                      Проводниковая анестезия <br /> <br /> (B01.003.004:002){" "}
                    </span>
                    <span className="price">От 1000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Аппликационная анестезия <br /> <br /> (B01.003.004:004){" "}
                    </span>
                    <span className="price">От 300₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Инфильтрационная анестезия <br /> <br /> (B01.003.004:005){" "}
                    </span>
                    <span className="price last">От 800 ₽</span>
                  </section>
                </div>
              </div>
              <div className="services-gallery">
                <h4 className="heading">Работы</h4>
                <div className="divider"></div>
                <ServiceGallery
                  imageSrc={serviceOneMob}
                  imageSrcTwo={serviceTwoMob}
                  imageSrcThree={serviceOneMob}
                  imageSrcFour={serviceFourMob}
                />
              </div>
              <div className="services-gallery">
                <h4 className="heading">Наши специалисты</h4>
                <div className="divider"></div>
                <Gallery
                  imageSrc={doctorOneMob}
                  // imageSrcTwo={doctorTwoMob}
                  imageSrcThree={doctorThreeMob}
                  imageSrcFour={doctorFourMob}
                  imageSrcFive={doctorFiveMob}
                  imageSrcSix={doctorSixMob}
                  imageSrcSeven={doctorTenMob}
                  openModal={openModal}
                  imageSrcEight={doctorEightMob}
                  imageSrcNine={doctorElevenMob}
                />
              </div>
              <div className="services-gallery">
                <h4 className="heading">Отзывы</h4>
                <div className="divider"></div>
                <ReviewGallery></ReviewGallery>
                <div className="form-screen" id="form-screen-mob">
                  <section className="content">
                    <div className="form-heading-container">
                      <h3 className="form-heading">Записаться На Прием</h3>
                    </div>
                    <div className="divider"></div>
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
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
                          name="phoneNumber"
                          className="input-text"
                          placeholder="+7 (925) 222-90-22"
                        />
                      </div>
                      <div className="input-container">
                        <label htmlFor="service" className="la">
                          Услуга
                        </label>
                        <input
                          type="text"
                          value={serviceName}
                          onChange={(event) =>
                            setServiceName(event.target.value)
                          }
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
                          Врач
                        </label>
                        <input
                          type="text"
                          name="doctorName"
                          value={doctorName}
                          onChange={(event) =>
                            setDoctorName(event.target.value)
                          }
                          placeholder="Выберите Врача"
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
                      <button className="form-button" onClick={sendEmail}>
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
                  </section>
                </div>
              </div>
            </div>
          </main>
          <main className="services-pc">
            <div className="pc-content">
              <Header
                isMenuPcOpen={isMenuPcOpen}
                openModal={openModal}
                togglePcMenu={togglePcMenu}
              ></Header>
              <div className="upper-content">
                <div className="heading-container">
                  <div className="bread-dots-container">
                    <Link to="/" className="link">
                      Главная
                    </Link>
                    <div className="circle"></div>
                    <Link to="/#services" className="link">
                      Услуги
                    </Link>
                    <div className="circle"></div>
                    <Link to="/services/diagnostic" className="link active">
                      Диагностика
                    </Link>
                  </div>
                  <h1 className="heading">Диагностика</h1>
                  <button className="button" onClick={openModal}>
                    <span className="text">Записаться</span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon"
                    ></FontAwesomeIcon>
                  </button>
                </div>
                <img
                  src={diagnosticPc}
                  alt="service"
                  className="service-image"
                ></img>
              </div>
              <div className="services-content">
                <div className="services-list">
                  <span className="text">Содержание</span>
                  <div className="buttons">
                    <ScrollLink
                      to="information"
                      value={"Основная информация"}
                      className="button"
                    >
                      Основная информация
                    </ScrollLink>
                    <ScrollLink to="doctors" value={"Врачи"} className="button">
                      Врачи
                    </ScrollLink>
                    <ScrollLink to="prices" value={"Цены"} className="button">
                      Цены
                    </ScrollLink>
                    <ScrollLink to="works" value={"Работы"} className="button">
                      Работы
                    </ScrollLink>

                    <ScrollLink
                      to="reviews"
                      value={"Отзывы"}
                      className="button"
                    >
                      Отзывы
                    </ScrollLink>
                    <ScrollLink
                      to="form-screen"
                      value={"Записаться на прием"}
                      className="button"
                    >
                      Записаться на прием
                    </ScrollLink>
                  </div>
                </div>
                <div className="services-information" id="information">
                  <span className="text">Об услуге</span>
                  <div className="information-one">
                    <h3 className="heading-info">
                      {" "}
                      Современная диагностика заболеваний зубов в клинике Dental
                      Home в Ивантеевке
                    </h3>
                    <p className="p-info">
                      Клиника Dental Home в Ивантеевке предлагает современные
                      методы диагностики заболеваний зубов, которые позволяют
                      точно определить причину проблемы и разработать
                      эффективный план лечения. Наша команда специалистов
                      использует передовое оборудование и технологии, чтобы
                      обеспечить максимальную точность и надежность диагностики.
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">
                      {" "}
                      Комплексный подход к диагностике заболеваний зубов в
                      клинике Dental Home в Ивантеевке
                    </h3>
                    <p className="p-info two">
                      В клинике Dental Home в Ивантеевке мы применяем
                      комплексный подход к диагностике заболеваний зубов. Наша
                      команда проводит тщательное обследование пациента,
                      используя различные методы и инструменты, чтобы получить
                      полную картину состояния зубов и десен. Мы также уделяем
                      особое внимание анализу рентгеновских снимков и других
                      специальных исследований, чтобы выявить скрытые проблемы и
                      предотвратить их развитие.
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">
                      {" "}
                      Преимущества диагностики заболеваний зубов в клинике
                      Dental Home в Ивантеевке
                    </h3>
                    <p className="p-info two">
                      Диагностика заболеваний зубов в клинике Dental Home в
                      Ивантеевке имеет ряд преимуществ, делающих нашу клинику
                      лучшим выбором для пациентов. Во-первых, мы используем
                      самые современные методы и технологии, которые позволяют
                      нам обнаруживать проблемы на ранних стадиях и
                      предотвращать их развитие. {""}
                      <a href="https://dental-home.ru/doctors">
                        {""}
                        {""}
                        Наша команда специалистов {""}
                      </a>
                      обладает высокой квалификацией и опытом работы, что
                      гарантирует точность и надежность результатов диагностики.
                      <br />
                      <br />
                      Во-вторых, мы предлагаем индивидуальный подход к каждому
                      пациенту. Мы учитываем все особенности здоровья и историю
                      болезни каждого пациента, чтобы разработать оптимальный
                      план лечения. Мы также обеспечиваем постоянное мониторинг
                      состояния зубов и десен, чтобы предотвратить возникновение
                      новых проблем.
                      <br />
                      <br />
                      Если вам необходима диагностика заболевания зубов в
                      Ивантеевке, обратитесь в клинику Dental Home. Мы
                      гарантируем высокое качество работы, точность диагностики
                      и эффективное лечение. Доверьте свое здоровье опытным
                      специалистам и получите здоровую и красивую улыбку, о
                      которой всегда мечтали.
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="price-tab" id="prices">
                    <h4 className="price-heading">Консультации</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Прием (осмотр, консультация) врача-стоматолога
                          первичный <br /> <br />
                          (В01.065.007)
                        </span>
                        <span className="price">От 1000 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Диспансерный прием (осмотр, консультация)
                          врача-стоматолога <br /> <br /> (В04.065.005)
                        </span>
                        <span className="price">От 500 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Профилактический прием (осмотр, консультация)
                          врача-стоматолога <br /> <br /> (В04.065.006)
                        </span>
                        <span className="price last">0 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Адаптационный прием <br /> <br /> (В04.065.008 )
                        </span>
                        <span className="price last">0 ₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h4 className="price-heading">Рентгенология</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Радиовизиография <br /> <br /> (А06.07.010){" "}
                        </span>
                        <span className="price">От 500 ₽</span>
                      </div>
                      {/* <div className="price-row">
                        <span className="text">
                          Получение снимка на электронный адрес
                        </span>
                        <span className="price">От 100 ₽</span>
                      </div> */}
                      {/* <div className="price-row">
                        <span className="text">
                          Запись на электронный носитель CD
                        </span>
                        <span className="price">От 300 ₽</span>
                      </div> */}
                      <div className="price-row">
                        <span className="text">
                          Запись на электронный носитель USB <br /> <br />
                          (А06.07.013.002)
                        </span>
                        <span className="price">От 500 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Повторный диагностический снимок <br />
                          <br />
                          (А06.07.013.003 )
                        </span>
                        <span className="price last"> 0 ₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h4 className="price-heading">
                      Исследования и диагностика
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Исследование на диагностических моделях челюстей{" "}
                          <br /> <br />
                          (A02.07.010)
                        </span>
                        <span className="price">От 500 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Витальное окрашивание твердых тканей зуба <br />
                          <br />
                          (A12.07.001 )
                        </span>
                        <span className="price">От 380 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Исследование кариозных полостей с использованием
                          стоматологического зонда <br /> <br /> (А02.07.002 )
                        </span>
                        <span className="price">От 70 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Термодиагностика зуба <br /> <br /> (А02.07.005 )
                        </span>
                        <span className="price">От 50 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Определение прикуса <br /> <br /> (А02.07.006 )
                        </span>
                        <span className="price">От 500 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Определение вида смыкания зубных рядов с помощью
                          лицевой дуги <br /> <br /> (А02.07.006.001 )
                        </span>
                        <span className="price">От 1.500 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Перкуссия зубов <br /> <br />
                          (А02.07.007 )
                        </span>
                        <span className="price">От 40 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Электроодонтометрия зуба (ЭОД) <br /> <br />{" "}
                          (А05.07.001 )
                        </span>
                        <span className="price">От 120 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Определение индексов гигиены полости рта <br />
                          <br />
                          (А12.07.003)
                        </span>
                        <span className="price last">От 250 ₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h4 className="price-heading">Анестезия</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Проводниковая анестезия <br /> <br />
                          (B01.003.004:002)
                        </span>
                        <span className="price">От 1000 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Аппликационная анестезия <br /> <br />{" "}
                          (B01.003.004:004 )
                        </span>
                        <span className="price last">От 300 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Инфильтрационная анестезия <br /> <br />
                          (B01.003.004:005 )
                        </span>
                        <span className="price last">От 800 ₽</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="services"
                className="gallery"
                style={{
                  borderTop: "1px solid #202637",
                  marginTop: "clamp(32px,3.33312vw,128px)",
                }}
              >
                <PcServiceGallery
                  imageSrc={serviceOnePc}
                  imageSrc2={serviceTwoPc}
                  imageSrc3={ServiceThreePc}
                  imageSrc4={ServiceFourPc}
                ></PcServiceGallery>
              </div>
              <div
                id="doctors"
                className="gallery"
                style={{
                  borderTop: "1px solid #202637",
                }}
              >
                <PcGallery
                  imageSrc={doctorOne}
                  // imageSrc2={doctorTwo}
                  imageSrc3={doctorThree}
                  imageSrc4={doctorFour}
                  imageSrc5={doctorFive}
                  imageSrc6={doctorSix}
                  imageSrc7={doctorTen}
                  imageSrc8={doctorEight}
                  imageSrc9={doctorEleven}
                  openModal={openModal}
                />
                <div
                  className="gallery"
                  style={{
                    borderTop: "1px solid #202637",
                    marginTop: "clamp(32px,3.33312vw,128px)",
                  }}
                >
                  <ReviewGalleryDesktop />
                </div>
                <div
                  className="form-pc-screen"
                  id="form-screen"
                  ref={form}
                  style={{ marginBottom: "clamp(64px,6.66624vw,256px)" }}
                  onSubmit={sendEmail}
                >
                  <section className="content">
                    <div className="heading-container">
                      <h5 className="heading">Записаться На Прием</h5>
                    </div>
                    <div className="divider"></div>
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
                            onChange={(event) =>
                              setFullName(event.target.value)
                            }
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
                            placeholder="+7 (925) 222-90-22"
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
                          <span className="text">Врач</span>
                          <input
                            type="text"
                            placeholder="Выберите Врача"
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
                        <button
                          className="golden-btn"
                          value="Send"
                          onClick={() => console.log(form)}
                        >
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
                  </section>
                </div>
              </div>
            </div>
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
          >
            <div className="modal">
              <img
                className="modal-img"
                src={modalImage}
                alt="modal-picture"
              ></img>
              <div className="modal-content">
                <img className="logo" src={logoMobile} alt="logotype"></img>
                <span className="text">
                  Хотите получить бесплатную консультацию?
                </span>
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

export default DiagnosticPage;
