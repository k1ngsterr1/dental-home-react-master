import React, { useState, useEffect, useRef, RefObject } from "react";
import Gallery from "../../components/gallery/gallery";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import Popup from "reactjs-popup";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Reveal } from "react-awesome-reveal";

import "./styles/children_styles.css";

import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
  faChevronRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import PcGallery from "../../components/gallery/pc_gallery";

const DoctorOnePc = require("../../assets/1.webp");
const DoctorTwoPc = require("../../assets/2.webp");
const DoctorThreePc = require("../../assets/3.webp");
const DoctorFourPc = require("../../assets/4.webp");
const DoctorFivePc = require("../../assets/5.webp");
const DoctorSixPc = require("../../assets/6.webp");
const DoctorSevenPc = require("../../assets/7.webp");
const DoctorEightPc = require("../../assets/8.webp");
const DoctorNinePc = require("../../assets/9.webp");
const doctorTen = require("../../assets/yana_pc.webp");

const doctorOneMob = require("../../assets/01.webp");
const doctorTwoMob = require("../../assets/02.webp");
const doctorThreeMob = require("../../assets/03.webp");
const doctorFourMob = require("../../assets/04.webp");
const doctorFiveMob = require("../../assets/05.webp");
const doctorSixMob = require("../../assets/06.webp");
const doctorSevenMob = require("../../assets/07.webp");
const doctorEightMob = require("../../assets/08.webp");
const doctorNineMob = require("../../assets/09.webp");
const doctorTenMob = require("../../assets/yana_mob.webp");

const childIllustration = require("../../assets/child_illustration.webp");

const Child01 = require("../../assets/child01.webp");
const Child02 = require("../../assets/child02.webp");
const Child03 = require("../../assets/child03.webp");
const Child04 = require("../../assets/child04.webp");
const Child05 = require("../../assets/child05.webp");
const Child06 = require("../../assets/child06.webp");
const modalImage = require("../../assets/example_modal.webp");

const logoMobile: string = require("../../assets/logo_mob.svg").default;

const ChildDental = () => {
  // Menu Function
  const navigate = useNavigate();
  const [thankYou, setThankYou] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const phoneForm = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
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

  const closeVideoModal = () => {
    setVideoOpen(false);
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

  const openVideoLink = () => {
    window.open("https://www.youtube.com/watch?v=3iBZgLHeOO4", "_blank");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const timerId = setTimeout(() => {
      setVideoOpen(true);
    }, 3000); // 3000ms = 3s

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

  return (
    <div className="div">
      {isLoading ? (
        <Reveal keyframes={customAnimation} delay={1000}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Детская стоматология Dental Home в Ивантеевке</title>
            <meta
              property="og:title"
              content="Детская стоматология Dental Home в Ивантеевке"
            ></meta>
            <meta
              property="og:description"
              content="Сеть клиник Dental Home - здоровье зубов и десен детей и качественное лечение. Стоматологи обеспечат игровую терапию и индивидуальный подход для комфорта ребенка"
            ></meta>
            <meta
              name="description"
              content="Сеть клиник Dental Home - здоровье зубов и десен детей и качественное лечение. Стоматологи обеспечат игровую терапию и индивидуальный подход для комфорта ребенка"
            ></meta>
          </Helmet>
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
        <div className="screen-children">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Детская стоматология Dental Home в Ивантеевке</title>
            <meta
              property="og:title"
              content="Детская стоматология Dental Home в Ивантеевке"
            ></meta>
            <meta
              property="og:description"
              content="Сеть клиник Dental Home - здоровье зубов и десен детей и качественное лечение. Стоматологи обеспечат игровую терапию и индивидуальный подход для комфорта ребенка"
            ></meta>
            <meta
              name="description"
              content="Сеть клиник Dental Home - здоровье зубов и десен детей и качественное лечение. Стоматологи обеспечат игровую терапию и индивидуальный подход для комфорта ребенка"
            ></meta>
          </Helmet>
          <div className="mob-screen">
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
            <div className="heading-content">
              <h1 className="heading">Dental Home - Детская стоматология</h1>
            </div>
            <img
              className="illustration"
              src={childIllustration}
              alt="illustration"
            ></img>
            <button className="golden-button" onClick={openModal}>
              Записаться на прием
            </button>
            <div className="services">
              <h2 className="service-heading">Наши услуги</h2>
              <div className="service-squares">
                <div className="service-cont">
                  <img
                    src={Child01}
                    onClick={() => navigate("/services/child-bite-correction")}
                    className="img"
                    alt="child"
                  />
                  <span className="text">Исправление прикуса</span>
                </div>
                <div className="service-cont">
                  <img
                    src={Child02}
                    onClick={() => navigate("/services/child-surgery")}
                    className="img"
                    alt="child"
                  />
                  <span className="text">Хирургия</span>
                </div>
                <div className="service-cont">
                  <img
                    src={Child03}
                    onClick={() => navigate("/services/child-teeth-healing")}
                    className="img"
                    alt="child"
                  />
                  <span className="text">Лечение зубов</span>
                </div>
                <div className="service-cont">
                  <img
                    src={Child04}
                    onClick={() => navigate("/services/child-diagnostic")}
                    className="img"
                    alt="child"
                  />
                  <span className="text">Диагностика</span>
                </div>
                <div className="service-cont">
                  <img
                    src={Child05}
                    onClick={() => navigate("/services/child-sleep")}
                    className="img"
                    alt="child"
                  />
                  <span className="text">Лечение во сне</span>
                </div>
                <div className="service-cont">
                  <img
                    src={Child06}
                    onClick={() => navigate("/services/child-hygiene")}
                    className="img"
                    alt="child"
                  />
                  <span className="text">Гигиена полости рта</span>
                </div>
              </div>
            </div>
            <Gallery
              imageSrc={doctorOneMob}
              // imageSrcTwo={doctorTwoMob}
              imageSrcThree={doctorThreeMob}
              openModal={openModal}
              imageSrcFour={doctorFourMob}
              imageSrcFive={doctorFiveMob}
              imageSrcSix={doctorSixMob}
              imageSrcSeven={doctorTenMob}
              imageSrcEight={doctorEightMob}
              imageSrcNine={doctorTenMob}
            />
            <div
              className="form-screen"
              id="form-screen-mob"
              ref={form}
              onSubmit={sendEmail}
            >
              <section className="content">
                <div className="form-heading-container">
                  <h3 className="form-heading">Записаться На Прием</h3>
                </div>
                <div className="divider"></div>
                <p className="paragraph text-center mt-16">
                  Детская стоматология в Ивантеевке - это наша специализация! Мы
                  предлагаем платную детскую стоматологию высокого уровня,
                  которая поможет сохранить здоровье зубов вашего ребенка на
                  долгие годы. Наша детская семейная стоматология в Ивантеевке
                  готова предложить вам комплексную процедуру лечения зубов.
                  Профессиональные стоматологи Dental Home используют только
                  современное оборудование и материалы для лечения зубов детей.
                  Мы проводим все виды лечения зубов, от простой пломбы до
                  сложной хирургической операции.
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
                      Врач
                    </label>
                    <input
                      type="text"
                      name="doctorName"
                      value={doctorName}
                      onChange={(event) => setDoctorName(event.target.value)}
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
                <p className="paragraph text-center mt-32">
                  Записаться к детскому стоматологу можно по телефону,
                  указанному на нашем сайте. Наши детские стоматологи готовы
                  ответить на все ваши вопросы и помочь выбрать наилучший
                  вариант лечения зубов для вашего ребенка. Мы заботимся о
                  здоровье зубов детей и предлагаем индивидуальный подход к
                  каждому маленькому пациенту. Мы стремимся сделать каждый визит
                  к нам максимально комфортным и безболезненным. Не откладывайте
                  визит к детскому стоматологу на потом! Запишитесь к нам уже
                  сегодня и получите профессиональную помощь в сохранении
                  здоровья зубов вашего ребенка. Наша детская стоматология в
                  Ивантеевке готова помочь вам в любое время!
                </p>
              </section>
            </div>
          </div>
          <div className="pc-screen">
            <Header
              togglePcMenu={togglePcMenu}
              isMenuPcOpen={isMenuPcOpen}
              openModal={openModal}
            ></Header>
            <div className="content-container">
              <div className="heading-container">
                <h1 className="heading">Dental Home - Детская стоматология</h1>
                <div className="button-row">
                  <button className="golden-button" onClick={openModal}>
                    Запись на прием
                  </button>
                  {/* <button
                    className="square-video"
                    onClick={() =>
                      (window.location.href =
                        "https://www.youtube.com/watch?v=3iBZgLHeOO4")
                    }
                  >
                    <FontAwesomeIcon
                      className="icon"
                      icon={faPlay}
                    ></FontAwesomeIcon>
                  </button> */}
                </div>
              </div>
              <img className="image" src={childIllustration} alt="image"></img>
            </div>
            <div className="service-container">
              <div className="heading-container">
                <h2 className="services-heading">Наши Услуги</h2>
                <Link
                  className="button"
                  to="/prices"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Прайс лист
                </Link>
              </div>
              <div className="squares-container">
                <div className="row">
                  <div
                    className="square-cont"
                    onClick={() => navigate("/services/child-bite-correction")}
                  >
                    <img src={Child01} className="square" alt="child"></img>
                    <span className="text">Исправление прикуса</span>
                  </div>
                  <div
                    className="square-cont"
                    onClick={() => navigate("/services/child-surgery")}
                  >
                    <img src={Child02} className="square" alt="child"></img>
                    <span className="text">Хирургия</span>
                  </div>
                  <div
                    className="square-cont"
                    onClick={() => navigate("/services/child-teeth")}
                  >
                    <img src={Child03} className="square" alt="child"></img>
                    <span className="text">Лечение зубов</span>
                  </div>
                </div>
                <div className="row two">
                  <div
                    className="square-cont"
                    onClick={() => navigate("/services/child-diagnostic")}
                  >
                    <img src={Child04} className="square" alt="child"></img>
                    <span className="text">Диагностика</span>
                  </div>
                  <div className="square-cont">
                    <img
                      src={Child05}
                      className="square"
                      alt="child"
                      onClick={() => navigate("/services/child-sleep")}
                    ></img>
                    <span className="text">Лечение во сне</span>
                  </div>
                  <div className="square-cont">
                    <img
                      src={Child06}
                      onClick={() => navigate("/services/child-hygiene")}
                      className="square"
                      alt="child"
                    ></img>
                    <span className="text">Гигиена полости рта</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-64">
              <PcGallery
                imageSrc={DoctorOnePc}
                imageSrc3={DoctorThreePc}
                openModal={openModal}
                imageSrc4={DoctorFourPc}
                imageSrc5={DoctorFivePc}
                imageSrc6={DoctorSixPc}
                imageSrc7={doctorTen}
                imageSrc8={DoctorEightPc}
                imageSrc9={doctorTen}
              />
            </div>
            <div
              className="form-pc-screen mt-64"
              id="form-screen"
              ref={form}
              onSubmit={sendEmail}
            >
              <section className="content">
                <div className="heading-container">
                  <h5 className="heading text-center">Записаться На Прием</h5>
                </div>
                <p className="paragraph text-center mt-16">
                  Детская стоматология в Ивантеевке - это наша специализация! Мы
                  предлагаем платную детскую стоматологию высокого уровня,
                  которая поможет сохранить здоровье зубов вашего ребенка на
                  долгие годы. Наша детская семейная стоматология в Ивантеевке
                  готова предложить вам комплексную процедуру лечения зубов.
                  Профессиональные стоматологи Dental Home используют только
                  современное оборудование и материалы для лечения зубов детей.
                  Мы проводим все виды лечения зубов, от простой пломбы до
                  сложной хирургической операции.
                  <br />
                  <br />
                  Записаться к детскому стоматологу можно по телефону,
                  указанному на нашем сайте. Наши детские стоматологи готовы
                  ответить на все ваши вопросы и помочь выбрать наилучший
                  вариант лечения зубов для вашего ребенка. Мы заботимся о
                  здоровье зубов детей и предлагаем индивидуальный подход к
                  каждому маленькому пациенту. Мы стремимся сделать каждый визит
                  к нам максимально комфортным и безболезненным. Не откладывайте
                  визит к детскому стоматологу на потом! Запишитесь к нам уже
                  сегодня и получите профессиональную помощь в сохранении
                  здоровья зубов вашего ребенка. Наша детская стоматология в
                  Ивантеевке готова помочь вам в любое время!
                </p>
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
                        onChange={(event) => setPhoneNumber(event.target.value)}
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
                        onChange={(event) => setServiceName(event.target.value)}
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
                        onChange={(event) => setDoctorName(event.target.value)}
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
              </section>
            </div>
          </div>
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
                {/* <img className="logo" src={logoMobile} alt="logotype"></img> */}
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
                    name="phone-number-input"
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
          {/* <Popup
            open={videoOpen}
            closeOnDocumentClick
            onClose={closeVideoModal}
            modal
            nested
            className="popup-container"
            position="center center"
          >
            <div className="video-modal">
              <iframe
                className="video"
                src="https://www.youtube.com/embed/3iBZgLHeOO4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <button
                className="phone-btn"
                value="Send"
                onClick={openVideoLink}
              >
                <FontAwesomeIcon
                  icon={faPlay}
                  className="icon"
                ></FontAwesomeIcon>
                Видео
              </button>
            </div>
          </Popup> */}
        </div>
      )}
    </div>
  );
};

export default ChildDental;
