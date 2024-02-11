import React, { useState, useRef, RefObject, useEffect } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
  Link as ScrollLink,
} from "react-scroll";
import { keyframes } from "@emotion/react";
import { MDBCheckbox } from "mdb-react-ui-kit";
import emailjs from "@emailjs/browser";
import { Reveal } from "react-awesome-reveal";
import Header from "../../../components/header/header";
import ReviewGallery from "../../../components/reviews/ReviewGallery";
import Footer from "../../../components/footer/Footer";
import Gallery from "../../../components/gallery/gallery";
import ServiceGallery from "../../../components/gallery/services_gallery";
import PcServiceGallery from "../../../components/gallery/pc_services_gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import "../../../components/service_template/styles/services_styles.css";
import PcGallery from "../../../components/gallery/pc_gallery";
import ReviewGalleryDesktop from "../../../components/reviews/ReviewGalleryDesktop";
import { Helmet } from "react-helmet";

const pavelGallery = require("../../../assets/pavel_gallery.webp");
const pavelGalleryPc = require("../../../assets/pavel_pc.webp");

const modalImage = require("../../../assets/example_modal.webp");
const logoMobile = require("../../../assets/logo_mob.svg").default;
const mainService = require("../../../assets/vinirs_pc.webp");

const doctorOne = require("../../../assets/1.webp");
const doctorTwo = require("../../../assets/2.webp");
const doctorThree = require("../../../assets/3.webp");
const doctorFour = require("../../../assets/4.webp");
const doctorFive = require("../../../assets/5.webp");
const doctorSix = require("../../../assets/6.webp");
const doctorSeven = require("../../../assets/7.webp");
const doctorEight = require("../../../assets/8.webp");
const doctorNine = require("../../../assets/9.webp");

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

const doctorTen = require("../../../assets/yana_pc.webp");
const doctorTenMob = require("../../../assets/yana_mob.webp");

const BugelPage = () => {
  const [thankYou, setThankYou] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [comment, setComment] = useState("");

  const form: RefObject<HTMLDivElement> = useRef(null);

  const [open, setOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

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
          Протезирование зубов в Ивантеевке | Стоматологии Dental Home
        </title>
        <meta
          property="og:title"
          content="Протезирование зубов в Ивантеевке | Стоматологии Dental Home"
        ></meta>
        <meta
          property="og:description"
          content="Восстановите утраченные зубы и функцию прикуса с помощью протезирования в Ивантеевке. Запишитесь на прием в нашу сеть стоматологий уже сегодня!"
        ></meta>
        <meta
          name="description"
          content="Восстановите утраченные зубы и функцию прикуса с помощью протезирования в Ивантеевке. Запишитесь на прием в нашу сеть стоматологий уже сегодня!"
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
              Протезирование зубов в Ивантеевке | Стоматологии Dental Home
            </title>
            <meta
              property="og:title"
              content="Протезирование зубов в Ивантеевке | Стоматологии Dental Home"
            ></meta>
            <meta
              property="og:description"
              content="Восстановите утраченные зубы и функцию прикуса с помощью протезирования в Ивантеевке. Запишитесь на прием в нашу сеть стоматологий уже сегодня!"
            ></meta>
            <meta
              name="description"
              content="Восстановите утраченные зубы и функцию прикуса с помощью протезирования в Ивантеевке. Запишитесь на прием в нашу сеть стоматологий уже сегодня!"
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
                  <Link to="/services/bugel" className="link active">
                    Протезирование зубов
                  </Link>
                </div>
                <h1 className="heading">Протезирование зубов в Ивантеевке</h1>
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
                  <h3 className="information-heading">Протезирование зубов</h3>
                  <p className="information-paragraph">
                    Протезирование зубов в Ивантеевке: съемные и бюгельные
                    протезы для восстановления улыбки Если у вас есть проблемы с
                    зубами, которые мешают вам улыбаться и жить полной жизнью,
                    то протезирование зубов - это то, что вам нужно. В нашей
                    клинике Dental Home мы предлагаем качественные услуги по
                    установке съемных и бюгельных протезов, которые помогут
                    восстановить вашу уверенность в себе и улыбку.
                    <br />
                    <br />
                    Съемные протезы - это один из самых распространенных видов
                    протезирования зубов. Они состоят из акриловой базы и
                    искусственных зубов, которые устанавливаются на десны.
                    Съемные протезы легко снимаются и очищаются, что делает их
                    удобными для использования. Они также могут быть
                    использованы для замены нескольких зубов или всех зубов в
                    верхней или нижней челюсти.
                    <br />
                    <br />
                    Бюгельные протезы - это более прочный и долговечный вид
                    протезирования зубов. Они состоят из металлической рамы,
                    которая крепится к оставшимся зубам, и акриловой базы с
                    искусственными зубами. Бюгельные протезы обеспечивают лучшую
                    поддержку и удобство, чем съемные протезы, и могут
                    использоваться для замены нескольких зубов или всех зубов в
                    верхней или нижней челюсти.
                    <br />
                    <br />
                    Установка протезов - это процедура, которая проводится в
                    несколько этапов. Сначала наш специалист проводит осмотр и
                    консультацию, после чего планируется хирургическая операция
                    по установке протеза. Затем происходит период ожидания,
                    когда протез приваривается к оставшимся зубам. После этого
                    проводится этап коррекции, когда протез регулируется для
                    достижения оптимального результата.
                    <br />
                    <br />
                    Цена на установку протезов зависит от сложности процедуры и
                    используемых материалов. Но мы гарантируем, что наши цены
                    будут доступными и адекватными. Вы можете узнать стоимость
                    установки протезов, связавшись с нами по телефону или через
                    сайт.
                    <br />
                    <br />
                    Не откладывайте поход к стоматологу на потом! Запишитесь на
                    консультацию по установке протезов уже сегодня и получите
                    профессиональную помощь в достижении желаемого результата.
                    Восстановите свою уверенность в себе и улыбку с помощью
                    протезирования зубов в Ивантеевке.
                  </p>
                </section>
                <div className="divider"></div>
                <div className="plate">
                  <section className="tab-one">
                    <h5 className="plate-heading">Ортопедия</h5>
                    <span className="text">
                      Повторная фиксация на постоянный цемент несъемных
                      ортопедических конструкций <br /> <br /> (ОРТ-A16.07.049)
                    </span>
                    <span className="price">От 1 500₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Фиксация на RELYX Luting несъемных ортопедических
                      конструкций <br /> <br /> (ОРТ-A16.07.049.001)
                    </span>
                    <span className="price">От 3 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Фиксация несъемных ортопедических конструкций на временный
                      цемент Temp bond <br /> <br /> (ОРТ-А16.07.050)
                    </span>
                    <span className="price">От 1000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие несъемной ортопедической конструкции (1 единица){" "}
                      <br /> <br /> (ОРТ-А16.07.053)
                    </span>
                    <span className="price">От 1 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление вкладки <br /> <br /> (ОРТ-А16.07.094){" "}
                    </span>
                    <span className="price">От 4 000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Коррекция протеза, изготовленного в другой клинике <br />{" "}
                      <br /> (ОРТ-А23.07.002.001)
                    </span>
                    <span className="price">От 1 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Починка (перебазировка) съемного протеза лабораторным
                      методом <br /> <br /> (ОРТ-А23.07.002.034)
                    </span>
                    <span className="price">От 5 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Приварка 1 кламмера <br /> <br /> (ОРТ-А23.07.002.035){" "}
                    </span>
                    <span className="price">От 5 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Приварка 1 зуба <br /> <br /> (ОРТ-А23.07.002.036){" "}
                    </span>
                    <span className="price">От 5 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      {" "}
                      Замена матрицы на бюгельном протезе (1 протез) <br />{" "}
                      <br /> (ОРТ-А23.07.002.036)
                    </span>
                    <span className="price">От 5 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      {" "}
                      Изготовление каппы для депрограмирования мышц
                    </span>
                    <span className="price">От 5 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Коррекция съемного протеза изготовленного в другой клинике{" "}
                      <br /> <br /> (ОРТ-А26)
                    </span>
                    <span className="price">От 1 500₽</span>
                  </section>
                  <section className="tab-three"></section>
                  <section className="tab-three">
                    <span className="text">
                      Каппа для стабилизации прикуса (Ортотик) <br /> <br />{" "}
                      (ОРТ-А27)
                    </span>
                    <span className="price last">От 20 000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">Оттиски</h5>
                    <span className="text">
                      Снятие оттиска с одной челюсти альгинатными массами <br />{" "}
                      <br /> (ОРТ-A02.07.010.001)
                    </span>
                    <span className="price">От 1.000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Снятие оттиска с одной челюсти массой из С-силикона <br />{" "}
                      <br /> (ОРТ-A02.07.010.002)
                    </span>
                    <span className="price">От 1.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие оттиска с одной челюсти массой из А-силикона <br />{" "}
                      <br /> (ОРТ-A02.07.010.003)
                    </span>
                    <span className="price">От 2.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Прикусной блок <br /> <br /> (ОРТ-A02.07.010.004){" "}
                    </span>
                    <span className="price">От 1.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Изготовление прикусного шаблона и индивидуальной ложки{" "}
                      <br /> <br /> (ОРТ-A02.07.010.005)
                    </span>
                    <span className="price">От 3.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие оттиска с одной челюсти для изготовления
                      силиконового ключа <br /> <br /> (ОРТ-A02.07.010.006)
                    </span>
                    <span className="price">От 1.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие оттиска с одной челюсти с имплантов с
                      использованием индивидуальной ложки <br /> <br />{" "}
                      (ОРТ-A02.07.010.007)
                    </span>
                    <span className="price">От 2.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Wax up восковое моделирование <br /> <br />{" "}
                      (ОРТ-A02.07.010.008){" "}
                    </span>
                    <span className="price">От 2.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Цифровой оттиск (сканирование верхней и нижней челюсти,
                      прикус) <br /> <br /> (ОРТ-А02.07.010.009)
                    </span>
                    <span className="price last">От 5.500₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">Вкладки</h5>
                    <span className="text">
                      Восстановление зуба с использованием керамической вкладки
                      (накладки) Emax <br /> <br /> (ОРТ-А16.07.003.001)
                    </span>
                    <span className="price">От 25.000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Восстановление зуба с использованием цельнолитой культевой
                      вкладки <br /> <br /> (ОРТ-А16.07.033.001)
                    </span>
                    <span className="price">От 7.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба с использованием культевой вкладки из
                      диоксида циркония <br /> <br /> (ОРТ-А16.07.033.003)
                    </span>
                    <span className="price">От 15.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба с использованием золотой вкладки (без
                      стоимости золота) <br /> <br /> (ОРТ-А16.07.033.004)
                    </span>
                    <span className="price last">От 10.000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">Коронки</h5>
                    <span className="text">
                      Восстановление зуба коронкой временной прямым методом{" "}
                      <br /> <br /> (ОРТ-А16.07.004.001)
                    </span>
                    <span className="price">От 3.500₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Восстановление зуба коронкой временной лабораторным
                      способом <br /> <br /> (ОРТ-А16.07.004.002)
                    </span>
                    <span className="price">От 6.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба коронкой металлокерамической класса
                      "стандарт" <br /> <br /> (ОРТ-А16.07.004.004)
                    </span>
                    <span className="price">От 18.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба коронкой металлокерамической класса
                      "премиум" <br /> <br /> (ОРТ-А16.07.004.005)
                    </span>
                    <span className="price">От 27.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба коронкой металлокерамической на
                      драгоценном сплаве (без учета стоимости драгоценного
                      металла) <br /> <br /> (ОРТ-А16.07.004.008)
                    </span>
                    <span className="price">От 27.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба коронкой из диоксида циркония класса
                      "стандарт" <br /> <br /> (ОРТ-А16.07.004.009)
                    </span>
                    <span className="price">От 27.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба коронкой из диоксида циркония класса
                      "премиум" <br /> <br /> (ОРТ-А16.07.004.010)
                    </span>
                    <span className="price last">От 39.000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">
                      Восстаовление зуба виниром E-max
                    </h5>
                    <span className="text">
                      Восстановление зуба виниром E-max класса "стандарт" <br />{" "}
                      <br /> (ОРТ--)
                    </span>
                    <span className="price">От 30.000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Восстановление зуба виниром E-max класса "премиум" <br />{" "}
                      <br /> (ОРТ--)
                    </span>
                    <span className="price">От 40.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Диагностика прикуса при помощи миостимулятора "МИСТ ТЕНС"{" "}
                      <br /> <br /> (ОРТ-1)
                    </span>
                    <span className="price last">От 10.000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">
                      Съемные, Бюгельные протезы
                    </h5>
                    <span className="text">
                      Протезирование зубов полным съемным пластиночным протезом
                      (Японский гарнитур, пластм) <br /> <br />{" "}
                      (ОРТ-A16.07.023.001)
                    </span>
                    <span className="price">От 45.000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Протезирование частичным съемным пластиночным протезом для
                      временного замещения отсутствующих 1-2 зубов
                      (иммедиат-протез) <br /> <br /> (ОРТ-A16.07.035.001)
                    </span>
                    <span className="price">От 12.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование частичным съемным пластиночным протезом
                      (Японский гарнитур, пластм) <br /> <br />{" "}
                      (ОРТ-A16.07.035.002)
                    </span>
                    <span className="price">От 45.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Протезирование съемным бюгельным протезом кламерным <br />{" "}
                      <br /> (ОРТ-A16.07.036.001)
                    </span>
                    <span className="price last">От 50.000₽</span>
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
                  imageSrcFour={doctorFourMob}
                  imageSrcFive={doctorFiveMob}
                  imageSrcSix={doctorSixMob}
                  imageSrcSeven={doctorTenMob}
                  imageSrcEight={doctorEightMob}
                  imageSrcNine={doctorNineMob}
                  openModal={openModal}
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
                    <Link to="/services/bugel" className="link active">
                      Протезирование зубов
                    </Link>
                  </div>
                  <h1 className="heading" style={{ width: "30%" }}>
                    Протезирование зубов в Ивантеевке
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
                  src={mainService}
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
                    <h3 className="heading-info">Протезирование зубов</h3>
                    <p className="p-info">
                      Протезирование зубов в Ивантеевке: съемные и бюгельные
                      протезы для восстановления улыбки Если у вас есть проблемы
                      с зубами, которые мешают вам улыбаться и жить полной
                      жизнью, то протезирование зубов - это то, что вам нужно. В
                      нашей клинике Dental Home мы предлагаем качественные
                      услуги по установке съемных и бюгельных протезов, которые
                      помогут восстановить вашу уверенность в себе и улыбку.
                      <br />
                      <br />
                      Съемные протезы - это один из самых распространенных видов
                      протезирования зубов. Они состоят из акриловой базы и
                      искусственных зубов, которые устанавливаются на десны.
                      Съемные протезы легко снимаются и очищаются, что делает их
                      удобными для использования. Они также могут быть
                      использованы для замены нескольких зубов или всех зубов в
                      верхней или нижней челюсти.
                      <br />
                      <br />
                      Бюгельные протезы - это более прочный и долговечный вид
                      протезирования зубов. Они состоят из металлической рамы,
                      которая крепится к оставшимся зубам, и акриловой базы с
                      искусственными зубами. Бюгельные протезы обеспечивают
                      лучшую поддержку и удобство, чем съемные протезы, и могут
                      использоваться для замены нескольких зубов или всех зубов
                      в верхней или нижней челюсти.
                      <br />
                      <br />
                      Установка протезов - это процедура, которая проводится в
                      несколько этапов. Сначала наш специалист проводит осмотр и
                      консультацию, после чего планируется хирургическая
                      операция по установке протеза. Затем происходит период
                      ожидания, когда протез приваривается к оставшимся зубам.
                      После этого проводится этап коррекции, когда протез
                      регулируется для достижения оптимального результата.
                      <br />
                      <br />
                      Цена на установку протезов зависит от сложности процедуры
                      и используемых материалов. Но мы гарантируем, что наши
                      цены будут доступными и адекватными. Вы можете узнать
                      стоимость установки протезов, связавшись с нами по
                      телефону или через сайт.
                      <br />
                      <br />
                      Не откладывайте поход к стоматологу на потом! Запишитесь
                      на консультацию по установке протезов уже сегодня и
                      получите профессиональную помощь в достижении желаемого
                      результата. Восстановите свою уверенность в себе и улыбку
                      с помощью протезирования зубов в Ивантеевке.
                    </p>
                  </div>
                  <div className="price-tab" id="prices">
                    <h4 className="price-heading">Ортопедия</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Повторная фиксация на постоянный цемент несъемных
                          ортопедических конструкций <br /> <br />{" "}
                          (ОРТ-A16.07.049)
                        </span>
                        <span className="price">От 1.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Фиксация на RELYX Luting несъемных ортопедических
                          конструкций <br /> <br /> (ОРТ-A16.07.049.001)
                        </span>
                        <span className="price">От 3.500₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Фиксация несъемных ортопедических конструкций на
                          временный цемент Temp bond <br /> <br />{" "}
                          (ОРТ-А16.07.050)
                        </span>
                        <span className="price">От 1.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Снятие несъемной ортопедической конструкции (1
                          единица) <br /> <br /> (ОРТ-А16.07.053)
                        </span>
                        <span className="price">От 1.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление вкладки <br /> <br /> (ОРТ-А16.07.094){" "}
                        </span>
                        <span className="price">От 4.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Коррекция протеза, изготовленного в другой клинике{" "}
                          <br /> <br /> (ОРТ-А23.07.002.001)
                        </span>
                        <span className="price">От 1.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Починка (перебазировка) съемного протеза лабораторным
                          методом <br /> <br /> (ОРТ-А23.07.002.034)
                        </span>
                        <span className="price">От 5.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Приварка 1 кламмера <br /> <br /> (ОРТ-А23.07.002.035){" "}
                        </span>
                        <span className="price">От 5.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Приварка 1 зуба <br /> <br /> (ОРТ-А23.07.002.036){" "}
                        </span>
                        <span className="price">От 5.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Замена матрицы на бюгельном протезе (1 протез) <br />{" "}
                          <br /> (ОРТ-А23.07.002.036)
                        </span>
                        <span className="price">От 5.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          {" "}
                          Изготовление каппы для депрограмирования мышц
                        </span>
                        <span className="price">От 5.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Коррекция съемного протеза изготовленного в другой
                          клинике <br /> <br /> (ОРТ-А26)
                        </span>
                        <span className="price">От 1.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Каппа для стабилизации прикуса (Ортотик) <br /> <br />{" "}
                          (ОРТ-А27)
                        </span>
                        <span className="price last">От 20.000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">Оттиски</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Снятие оттиска с одной челюсти альгинатными массами{" "}
                          <br /> <br /> (ОРТ-A02.07.010.001)
                        </span>
                        <span className="price">От 2.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Снятие оттиска с одной челюсти массой из С-силикона{" "}
                          <br /> <br /> (ОРТ-A02.07.010.002)
                        </span>
                        <span className="price">От 2.500₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Снятие оттиска с одной челюсти массой из А-силикона{" "}
                          <br /> <br /> (ОРТ-A02.07.010.003)
                        </span>
                        <span className="price">От 3.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Прикусной блок <br /> <br /> (ОРТ-A02.07.010.004){" "}
                        </span>
                        <span className="price">От 1.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Изготовление прикусного шаблона и индивидуальной ложки{" "}
                          <br /> <br /> (ОРТ-A02.07.010.005)
                        </span>
                        <span className="price">От 4.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Снятие оттиска с одной челюсти для изготовления
                          силиконового ключа <br /> <br /> (ОРТ-A02.07.010.006)
                        </span>
                        <span className="price">От 2.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Снятие оттиска с одной челюсти с имплантов с
                          использованием индивидуальной ложки <br /> <br />{" "}
                          (ОРТ-A02.07.010.007)
                        </span>
                        <span className="price">От 4.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Wax up восковое моделирование <br /> <br />{" "}
                          (ОРТ-A02.07.010.008)
                        </span>
                        <span className="price">От 2.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Цифровой оттиск (сканирование верхней и нижней
                          челюсти, прикус) <br /> <br /> (ОРТ-А02.07.010.009)
                        </span>
                        <span className="price last">От 8.000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">Вкладки</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба с использованием керамической
                          вкладки (накладки) Emax <br /> <br />{" "}
                          (ОРТ-А16.07.003.001)
                        </span>
                        <span className="price">От 30.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба с использованием цельнолитой
                          культевой вкладки <br /> <br /> (ОРТ-А16.07.033.001)
                        </span>
                        <span className="price">От 12.500₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Восстановление зуба с использованием культевой вкладки
                          из диоксида циркония <br /> <br />{" "}
                          (ОРТ-А16.07.033.003)
                        </span>
                        <span className="price">От 18.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба с использованием золотой вкладки
                          (без стоимости золота) <br /> <br />{" "}
                          (ОРТ-А16.07.033.004)
                        </span>
                        <span className="price last">От 20.000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">Коронки</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой временной прямым методом{" "}
                          <br /> <br /> (ОРТ-А16.07.004.001)
                        </span>
                        <span className="price">От 3.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой временной лабораторным
                          способом <br /> <br /> (ОРТ-А16.07.004.002)
                        </span>
                        <span className="price">От 6.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Восстановление зуба коронкой металлокерамической
                          класса "стандарт" <br /> <br /> (ОРТ-А16.07.004.004)
                        </span>
                        <span className="price">От 18.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой металлокерамической
                          класса "премиум" <br /> <br /> (ОРТ-А16.07.004.005)
                        </span>
                        <span className="price">От 27.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой металлокерамической на
                          драгоценном сплаве (без учета стоимости драгоценного
                          металла) <br /> <br /> (ОРТ-А16.07.004.008)
                        </span>
                        <span className="price">От 27.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой из диоксида циркония
                          класса "стандарт" <br /> <br /> (ОРТ-А16.07.004.009)
                        </span>
                        <span className="price">От 27.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба коронкой из диоксида циркония
                          класса "премиум" <br /> <br /> (ОРТ-А16.07.004.010)
                        </span>
                        <span className="price last">От 39.000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">
                      Восстаовление зуба виниром E-max
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба виниром E-max класса "стандарт"{" "}
                          <br /> <br /> (ОРТ--)
                        </span>
                        <span className="price">От 30.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба виниром E-max класса "премиум"{" "}
                          <br /> <br /> (ОРТ--)
                        </span>
                        <span className="price">От 40.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Диагностика прикуса при помощи миостимулятора "МИСТ
                          ТЕНС" <br /> <br /> (ОРТ-1)
                        </span>
                        <span className="price last">От 10.000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">
                      Съемные, Бюгельные протезы
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Протезирование зубов полным съемным пластиночным
                          протезом (Японский гарнитур, пластм) <br /> <br />{" "}
                          (ОРТ-A16.07.023.001)
                        </span>
                        <span className="price">От 45.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Протезирование частичным съемным пластиночным протезом
                          для временного замещения отсутствующих 1-3 зубов
                          (иммедиат-протез) <br /> <br /> (ОРТ-A16.07.035.001)
                        </span>
                        <span className="price">От 12.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Протезирование частичным съемным пластиночным протезом
                          (Японский гарнитур, пластм) <br /> <br />{" "}
                          (ОРТ-A16.07.035.002)
                        </span>
                        <span className="price">От 45.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Протезирование съемным бюгельным протезом кламерным{" "}
                          <br /> <br /> (ОРТ-A16.07.036.001)
                        </span>
                        <span className="price last">От 50.000₽</span>
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
                  imageSrc={doctorOne}
                  imageSrc2={doctorTwo}
                  imageSrc3={doctorThree}
                  imageSrc4={doctorFour}
                  imageSrc5={doctorFive}
                  imageSrc6={doctorSix}
                  imageSrc7={doctorTen}
                  imageSrc8={doctorEight}
                  imageSrc9={doctorNine}
                  openModal={openModal}
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

export default BugelPage;