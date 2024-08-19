import emailjs from "@emailjs/browser";
import { keyframes } from "@emotion/react";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { RefObject, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Popup from "reactjs-popup";

import {
  faChevronRight,
  faClose,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Reveal } from "react-awesome-reveal";
import Footer from "../../../components/footer/Footer";
import Gallery from "../../../components/gallery/gallery";
import PcGallery from "../../../components/gallery/pc_gallery";
import PcServiceGallery from "../../../components/gallery/pc_services_gallery";
import ServiceGallery from "../../../components/gallery/services_gallery";
import Header from "../../../components/header/header";
import ReviewGallery from "../../../components/reviews/ReviewGallery";
import ReviewGalleryDesktop from "../../../components/reviews/ReviewGalleryDesktop";
import "../../../components/service_template/styles/services_styles.css";

const pavelGallery = require("../../../assets/pavel_gallery.webp");
const pavelGalleryPc = require("../../../assets/pavel_pc.webp");

const mainService = require("../../../assets/service_pc.webp");
const whiteningPc = require("../../../assets/whitening_pc.webp");

const doctorOnePc = require("../../../assets/1.webp");
const doctorTwoPc = require("../../../assets/karen_pc.webp");
const doctorThreePc = require("../../../assets/3.webp");
const doctorFourPc = require("../../../assets/islam_pc.webp");
const doctorFivePc = require("../../../assets/elena_pc.webp");
const doctorSixPc = require("../../../assets/tatyana_pc.webp");
const doctorSevenPc = require("../../../assets/marina_pc.webp");
const doctorEightPc = require("../../../assets/karen_pc.webp");
const doctorNinePc = require("../../../assets/karen_pc.webp");
const doctorTenPc = require("../../../assets/orthoped_mob.webp");
const doctorElevenPc = require("../../../assets/sadiga.webp");

const doctorOneMob = require("../../../assets/01.webp");
const doctorTwoMob = require("../../../assets/marina_mob.webp");
const doctorThreeMob = require("../../../assets/03.webp");
const doctorFourMob = require("../../../assets/islam_mob.webp");
const doctorFiveMob = require("../../../assets/elena_mob.webp");
const doctorSixMob = require("../../../assets/tatyana_mob.webp");
const doctorSevenMob = require("../../../assets/marina_mob.webp");
const doctorEightMob = require("../../../assets/karen_mob.webp");
const doctorNineMob = require("../../../assets/marina_mob.webp");
const doctorTenMob = require("../../../assets/orthoped_mob.webp");
const doctorElevenMob = require("../../../assets/marina_mob.webp");

const modalImage: string = require("../../../assets/example_modal.webp");
const logoMobile = require("../../../assets/logo_mob.svg").default;

const serviceOnePc = require("../../../assets/service_1.webp");
const serviceTwoPc = require("../../../assets/service_2.webp");
const ServiceThreePc = require("../../../assets/service_3.webp");
const ServiceFourPc = require("../../../assets/service_4.webp");

const serviceOneMob = require("../../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../../assets/service_mob_03.webp");
const serviceFourMob = require("../../../assets/service_mob_04.webp");

const doctorEleven = require("../../../assets/sadiga.webp");

const AmazingWhite = () => {
  const [thankYou, setThankYou] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

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
    <div className="div">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Профессиональное отбеливание зубов Amazing White в Ивантеевке{" "}
        </title>
        <meta
          property="og:title"
          content="Профессиональное отбеливание зубов Amazing White в Ивантеевке"
        ></meta>
        <meta
          property="og:description"
          content="Улучшите цвет зубов и получите красивую улыбку с профессиональным отбеливанием зубов Amazing White в Ивантеевке. Запишитесь на прием в нашу сеть стоматологий уже сегодня!
"
        ></meta>
        <meta
          name="description"
          content="Улучшите цвет зубов и получите красивую улыбку с профессиональным отбеливанием зубов Amazing White в Ивантеевке. Запишитесь на прием в нашу сеть стоматологий уже сегодня!
"
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
              Профессиональное отбеливание зубов Amazing White в Ивантеевке{" "}
            </title>
            <meta
              property="og:title"
              content="Профессиональное отбеливание зубов Amazing White в Ивантеевке"
            ></meta>
            <meta
              property="og:description"
              content="Улучшите цвет зубов и получите красивую улыбку с профессиональным отбеливанием зубов Amazing White в Ивантеевке. Запишитесь на прием в нашу сеть стоматологий уже сегодня!
"
            ></meta>
            <meta
              name="description"
              content="Улучшите цвет зубов и получите красивую улыбку с профессиональным отбеливанием зубов Amazing White в Ивантеевке. Запишитесь на прием в нашу сеть стоматологий уже сегодня!
"
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
                  <Link to="/services/AmazingWhite" className="link active">
                    Отбеливание
                  </Link>
                </div>
                <h1 className="heading">
                  Профессиональное отбеливание зубов Amazing White в Ивантеевке
                </h1>
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
                    Отбеливание Amazing White
                  </h3>
                  <p className="information-paragraph">
                    Профессиональное отбеливание зубов Amazing White в
                    Ивантеевке - это идеальный способ получить яркий и
                    белоснежный улыбку! Наша стоматологическая клиника
                    предлагает процедуру отбеливания зубов, которая позволит вам
                    получить результаты уже после первого посещения. Мы
                    используем только современные технологии и материалы, чтобы
                    обеспечить максимальный эффект от процедуры.
                    <br />
                    <br />
                    Процедура отбеливания зубов Amazing White проводится нашими
                    профессиональными стоматологами, которые имеют большой опыт
                    работы в данной области. Они помогут вам выбрать наилучший
                    вариант отбеливания зубов, учитывая индивидуальные
                    особенности вашей улыбки. Отбеливание зубов Amazing White -
                    это безопасная и эффективная процедура, которая не повредит
                    вашим зубам и деснам. Мы гарантируем высокое качество
                    процедуры и длительный результат.
                    <br />
                    <br />
                    Записаться на процедуру отбеливания зубов Amazing White
                    можно по телефону, указанному на нашем сайте. Стоматологи
                    Dental Home готовы ответить на все ваши вопросы и провести
                    консультацию перед процедурой. Не откладывайте получение
                    яркой и белоснежной улыбки на потом! Запишитесь на процедуру
                    отбеливания зубов Amazing White в Ивантеевке уже сегодня и
                    получите профессиональную помощь в достижении желаемого
                    результата. Наша стоматологическая клиника готова помочь вам
                    в любое время!
                  </p>
                </section>
                <div className="divider"></div>
                <div className="plate">
                  <section className="tab-one">
                    <h5 className="plate-heading">Отбеливание</h5>
                    <span className="text">
                      {" "}
                      {""}
                      <a
                        href="https://dental-home.ru/services/zoom-whitening"
                        style={{
                          color: "white",
                        }}
                        className="white"
                      >
                        Профессиональное отбеливание зубов клиническое - система
                        "ZOOM"
                      </a>
                      <br /> <br /> (А16.07.050.001)
                    </span>
                    <span className="price">От 30.000 ₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Капповое домашнее отбеливание зубов клиническое - система
                      "ZOOM" <br /> <br /> (А16.07.050.002)
                    </span>
                    <span className="price">От 9.990 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Профессиональное отбеливание зубов в клиническое - система
                      "Amazing White" <br /> <br /> (А16.07.050.003)
                    </span>
                    <span className="price">От 11.000 ₽</span>
                  </section>
                  <section className="tab-three" style={{ marginTop: "0px" }}>
                    <span className="text">
                      Внутриканальное отбеливание (первый сеанс) <br /> <br />{" "}
                      (А16.07.050.004)
                    </span>
                    <span className="price ">От 1.900 ₽</span>
                  </section>
                  <section className="tab-three" style={{ marginTop: "0px" }}>
                    <span className="text">
                      Внутриканальное отбеливание (последующий сеанс) <br />{" "}
                      <br /> (А16.07.050.005)
                    </span>
                    <span className="price last">От 1.000₽</span>
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
                  imageSrcTwo={doctorTwoMob}
                  imageSrcThree={doctorThreeMob}
                  openModal={openModal}
                  imageSrcFour={doctorFourMob}
                  imageSrcFive={doctorFiveMob}
                  imageSrcSix={doctorSixMob}
                  imageSrcSeven={doctorTenMob}
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
                          Фамилия врача
                        </label>
                        <input
                          type="text"
                          name="doctorName"
                          value={doctorName}
                          onChange={(event) =>
                            setDoctorName(event.target.value)
                          }
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
                        <label htmlFor="service" className="la">
                          Цель визита
                        </label>
                        <input
                          type="text"
                          value={visitGoal}
                          onChange={(event) => setVisitGoal(event.target.value)}
                          name="visitGoal"
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
                    <Link to="/services/whitening" className="link active">
                      отбеливание
                    </Link>
                  </div>
                  <h1 className="heading w40">
                    Отбеливание зубов Amazing White
                  </h1>
                  <button className="button" onClick={openModal}>
                    <span className="text">Записаться</span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="icon"
                    ></FontAwesomeIcon>
                  </button>
                </div>
                <img
                  src={whiteningPc}
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
                      className="button"
                      style={{ width: "110%" }}
                    >
                      Основная информация
                    </ScrollLink>
                    <ScrollLink to="doctors" className="button">
                      Врачи
                    </ScrollLink>
                    <ScrollLink to="prices" className="button">
                      Цена
                    </ScrollLink>
                    <ScrollLink to="works" className="button">
                      Работы
                    </ScrollLink>
                    <ScrollLink to="reviews" className="button">
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
                    <h3 className="heading-info">Отбеливание Amazing White</h3>
                    <p className="p-info">
                      Профессиональное отбеливание зубов Amazing White в
                      Ивантеевке - это идеальный способ получить яркий и
                      белоснежный улыбку! Наша стоматологическая клиника
                      предлагает процедуру отбеливания зубов, которая позволит
                      вам получить результаты уже после первого посещения. Мы
                      используем только современные технологии и материалы,
                      чтобы обеспечить максимальный эффект от процедуры.
                      <br />
                      <br />
                      Процедура отбеливания зубов Amazing White проводится
                      нашими профессиональными стоматологами, которые имеют
                      большой опыт работы в данной области. Они помогут вам
                      выбрать наилучший вариант отбеливания зубов, учитывая
                      индивидуальные особенности вашей улыбки. Отбеливание зубов
                      Amazing White - это безопасная и эффективная процедура,
                      которая не повредит вашим зубам и деснам. Мы гарантируем
                      высокое качество процедуры и длительный результат.
                      <br />
                      <br />
                      Записаться на процедуру отбеливания зубов Amazing White
                      можно по телефону, указанному на нашем сайте. Стоматологи
                      Dental Home готовы ответить на все ваши вопросы и провести
                      консультацию перед процедурой. Не откладывайте получение
                      яркой и белоснежной улыбки на потом! Запишитесь на
                      процедуру отбеливания зубов Amazing White в Ивантеевке уже
                      сегодня и получите профессиональную помощь в достижении
                      желаемого результата. Наша стоматологическая клиника
                      готова помочь вам в любое время!
                    </p>
                  </div>
                  <div className="price-tab" id="prices">
                    <h4 className="price-heading">Отбеливание</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          <a
                            href="https://dental-home.ru/services/zoom-whitening"
                            className="white"
                          >
                            Профессиональное отбеливание зубов клиническое -
                            система "ZOOM"
                          </a>{" "}
                          <br /> <br /> (А16.07.050.001)
                        </span>
                        <span className="price">От 30.000 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Капповое домашнее отбеливание(включая стоимость
                          изготовления капп и набор отбеливающего геля) 2
                          челюсти <br /> <br /> (А16.07.050.002)
                        </span>
                        <span className="price">От 9.900 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Профессиональное отбеливание зубов клиническое -
                          система "Amazing White" <br /> <br /> (А16.07.050.003)
                        </span>
                        <span className="price">От 11.000 ₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Внутриканальное отбеливание(первый сеанс) <br />{" "}
                          <br /> (А16.07.050.004)
                        </span>
                        <span className="price">От 1.900 ₽</span>
                      </div>
                      <div className="price-row last">
                        <span className="text">
                          Внутриканальное отбеливание (последующий сеанс) <br />{" "}
                          <br /> (А16.07.050.005)
                        </span>
                        <span className="price">От 1.000 ₽</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="gallery"
                id="works"
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
                className="gallery"
                id="doctors"
                style={{
                  borderTop: "1px solid #202637",
                }}
              >
                <PcGallery
                  imageSrc={doctorOnePc}
                  imageSrc2={doctorTwoPc}
                  imageSrc3={doctorThreePc}
                  imageSrc4={doctorFourPc}
                  imageSrc5={doctorFivePc}
                  imageSrc6={doctorSixPc}
                  imageSrc7={doctorTenPc}
                  imageSrc8={doctorSevenPc}
                  imageSrc9={doctorNinePc}
                />
                <div
                  className="gallery"
                  id="reviews"
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

export default AmazingWhite;
