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

const doctorEleven = require("../../../assets/sadiga.webp");
const doctorElevenMob = require("../../../assets/sadiga_mob.webp");

const BracesPage = () => {
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
          Виниры, коронки и ортопедическое лечение в Ивантеевке - Dental Home{" "}
        </title>
        <meta
          property="og:title"
          content="Виниры, коронки и ортопедическое лечение в Ивантеевке - Dental Home"
        ></meta>
        <meta
          property="og:description"
          content="Доверьте свою улыбку опытным ортопедам в клинике Dental Home в Ивантеевке. Виниры, коронки, вкладки, оттиски под ключ "
        ></meta>
        <meta
          name="description"
          content="Доверьте свою улыбку опытным ортопедам в клинике Dental Home в Ивантеевке. Виниры, коронки, вкладки, оттиски под ключ "
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
              Установка брекетов под ключ в Ивантеевке | Стоматологии Dental
              Home
            </title>
            <meta
              property="og:title"
              content="Установка брекетов под ключ в Ивантеевке | Стоматологии Dental Home"
            ></meta>
            <meta
              property="og:description"
              content="Исправьте прикус и получите красивую улыбку с помощью установки брекетов в Ивантеевке. Запишитесь на прием в нашу сеть стоматологий уже сегодня!"
            ></meta>
            <meta
              name="description"
              content="Исправьте прикус и получите красивую улыбку с помощью установки брекетов в Ивантеевке. Запишитесь на прием в нашу сеть стоматологий уже сегодня!"
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
                  <Link to="/services/braces" className="link active">
                    Установка брекетов
                  </Link>
                </div>
                <h1 className="heading">
                  {" "}
                  Установка брекетов в Ивантеевке под ключ
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
                  <h3 className="information-heading">Установка брекетов</h3>
                  <p className="information-paragraph">
                    Установка брекетов в Ивантеевке – это надежный и эффективный
                    способ{""}
                    <a href="https://dental-home.ru/services/bite-correction">
                      исправить неправильное положение зубов {""}
                      {""}
                    </a>
                    {""}
                    {""}
                    и получить прекрасную улыбку. Наша клиника предлагает
                    качественные услуги по установке брекетов, которые помогут
                    вам достичь желаемого результата.
                    <br />
                    <br />
                    Мы используем только самые современные технологии и
                    материалы для установки брекетов, чтобы обеспечить
                    максимальный комфорт и безопасность наших пациентов. Наши
                    специалисты помогут вам выбрать наиболее подходящий тип
                    брекетов, который будет соответствовать вашим потребностям и
                    пожеланиям.
                    <br />
                    <br />
                    Установка брекетов – это процедура, которая проводится в
                    несколько этапов. Сначала наш специалист проводит осмотр и
                    консультацию, после чего планируется хирургическая операция
                    по установке брекетов. Затем происходит период ожидания,
                    когда зубы постепенно перемещаются в нужное положение. После
                    этого проводится этап коррекции, когда брекеты регулируются
                    для достижения оптимального результата.
                    <br />
                    <br />
                    Установка брекетов цена зависит от сложности процедуры и
                    используемых материалов. Но мы гарантируем, что наши цены
                    будут доступными и адекватными.
                    <br />
                    <br />
                    Где лучше ставить брекеты? Наша клиника находится в
                    Ивантеевке и предлагает качественные услуги по установке
                    брекетов в Московской области. Мы гарантируем максимальный
                    результат и безболезненную процедуру.
                    <br />
                    <br />
                    Установка брекетов – это возможность получить прекрасную
                    улыбку и уверенность в себе. Наша клиника предлагает
                    качественные услуги по установке брекетов в Ивантеевке,
                    которые помогут вам достичь желаемого результата. Не
                    откладывайте поход к стоматологу на потом! Запишитесь на
                    консультацию по установке брекетов уже сегодня и получите
                    профессиональную помощь в достижении желаемого результата.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Преимущества виниров и коронок:
                  </h3>
                  <p className="information-paragraph">
                    <br />
                    <br />
                    - Эстетическая привлекательность. Виниры и коронки позволяют
                    изменить форму, цвет и положение зубов, создавая красивую
                    улыбку.
                    <br />
                    <br />
                    - Функциональность. Протезы восстанавливают поврежденные
                    зубы, обеспечивая нормальное жевание и речь.
                    <br />
                    <br />
                    - Долговечность. Керамические и циркониевые виниры и коронки
                    имеют высокую прочность и долгий срок службы.
                    <br />
                    <br />
                    - Безопасность. Материалы, используемые для изготовления
                    виниров и коронок, не вызывают аллергических реакций и не
                    взаимодействуют с тканями ротовой полости.
                    <br />
                    <br />
                    Если вы ищете качественные стоматологические услуги по
                    установке виниров и коронок в Ивантеевке, обратитесь в нашу
                    клинику Dental Home. Наша команда опытных специалистов
                    гарантирует высокое качество работы, индивидуальный подход к
                    каждому пациенту и использование современных технологий. Мы
                    поможем вам достичь желаемого результата и получить красивую
                    улыбку.
                  </p>
                </section>
                <div className="divider"></div>
                <div className="plate">
                  <section className="tab-one">
                    <h5 className="plate-heading">
                      Ортодонтическая коррекция съемным ортодонтическим
                      аппаратом
                    </h5>
                    <span className="text">
                      Лицевая маска
                      <br /> (ОРД-А16.07.04.007)
                    </span>
                    <span className="price">От 15.000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Разобщающая пластинка
                      <br /> (ОРД-А16.07.047.001)
                    </span>
                    <span className="price">От 10.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Аппарат "Myobrace"
                      <br /> (ОРД-А16.07.047.002)
                    </span>
                    <span className="price">От 15.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Пластиночный аппарат с исскуственными зубами
                      <br /> (ОРД-А16.07.047.003)
                    </span>
                    <span className="price">От 13.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Съемный пластиночный аппарат из импортных материалов на 1
                      зубной ряд
                      <br /> (ОРД-А16.07.047.004){" "}
                    </span>
                    <span className="price">От 15.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Съемный двухчелюстной функциональный аппарат <br />{" "}
                      (ОРД-А16.07.047.005)
                    </span>
                    <span className="price">От 23.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Винт для съемного пластиночного аппарата
                      <br /> (ОРД-А16.07.047.006)
                    </span>
                    <span className="price">От 1.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Коррекция и активация съемного ортодонтического аппарата{" "}
                      <br />
                      (ОРД-А23.07.001.001 )
                    </span>
                    <span className="price">От 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Починка (перебазировка) пластиночного аппарата
                      <br /> (ОРД-А23.07.001.002){" "}
                    </span>
                    <span className="price">От 3.500₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">
                      {" "}
                      Ортодонтическая коррекция с применением брекет-систем
                    </h5>
                    <span className="text">
                      I степени сложности
                      <br /> (ОРД-А16.07.048.001 )
                    </span>
                    <span className="price">От 1.000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      II степени сложности
                      <br /> (ОРД-А16.07.048.002 )
                    </span>
                    <span className="price">От 1.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      III степени сложности
                      <br /> (ОРД-А16.07.048.003 )
                    </span>
                    <span className="price">От 2.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Фиксация брекет-системы (одна челюсть)
                      <br /> (ОРД-А16.07.048.004 ){" "}
                    </span>
                    <span className="price">От 1.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Изготовление прикусного шаблона и индивидуальной ложки{" "}
                      <br /> (ОРТ-A02.07.010.005)
                    </span>
                    <span className="price">От 3.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Брекет-система металлическая безлигатурная
                      <br /> (ОРД-А16.07.048.006 )
                    </span>
                    <span className="price">От 25.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Брекет-система Damon Q <br /> (ОРД-А16.07.048.007 )
                    </span>
                    <span className="price">От 30.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Брекет-система сапфировая, керамическая
                      <br /> (ОРД-А16.07.048.008 ){" "}
                    </span>
                    <span className="price">От 32.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Брекет-система керамическая безлигатурная
                      <br /> (ОРД-А16.07.048.009 )
                    </span>
                    <span className="price last">От 5.500₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading"> Ретенция</h5>
                    <span className="text">
                      Несъемный ретейнер на 1 зубной ряд
                      <br /> (ОРД-А16.07.018)
                    </span>
                    <span className="price">От 12.000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Ретенционный съемный аппарат на 1 зубной ряд
                      <br /> (ОРД-А16.07.047.009)
                    </span>
                    <span className="price">От 7.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие ретейнера
                      <br /> (ОРД-А16.07.048.021)
                    </span>
                    <span className="price">От 5.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Починка несъемного ретейнера
                      <br /> (ОРД-А23.07.001.002)
                    </span>
                    <span className="price last">От 2.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Изготовление ретенционной каппы
                      <br /> (ОРД-А24)
                    </span>
                    <span className="price last">От 6.500₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">
                      {" "}
                      Дополнительные приспособления
                    </h5>
                    <span className="text">
                      активация ортодонтического винта
                      <br /> (ОРД-23.07.002.052)
                    </span>
                    <span className="price">От 2.500₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Лечение с помощью аппарата Марко-Росса
                      <br /> (ОРД-A16.07.046.001 )
                    </span>
                    <span className="price">От 29.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Аппарат для дистализации моляров
                      <br /> (ОРД-A16.07.046.002)
                    </span>
                    <span className="price">От 33.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Лечение с помощью небного бюгеля
                      <br /> (ОРД-A16.07.046.003)
                    </span>
                    <span className="price">От 4.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Межчелюстные тяги
                      <br /> (ОРД-A16.07.046.004)
                    </span>
                    <span className="price">От 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Изготовление коронки ортодонтической " <br />{" "}
                      (ОРД-A23.07.002.055 )
                    </span>
                    <span className="price">От 5.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Изготовление кольца-петли ортодонтического
                      <br /> (ОРД-А23.07.002.051)
                    </span>
                    <span className="price last">От 9.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Повторная фиксация кольца-петли ортодонтического
                      <br /> (ОРД-А23.07.002.052)
                    </span>
                    <span className="price last">От 2.000₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading">Элайнеры</h5>
                    <span className="text">
                      Компьютерное моделирование (диагностика КТ, расчеты,
                      компьютерное моделирование в лаборатории, составление
                      плана лечения)
                      <br /> (ОРД-ОРТО2023-1)
                    </span>
                    <span className="price">От 55.000₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Оплата кейса(запуск в производство)
                      <br /> (ОРД-ОРТО2023-2)
                    </span>
                    <span className="price">От 190.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Оплата кейса(запуск в производство: 1 этап - до 12 капп)
                      <br /> (ОРД-ОРТО2023-3)
                    </span>
                    <span className="price">От 95.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Оплата кейса(запуск в производство: 2 этап - продолжение
                      лечения)
                      <br /> (ОРД-ОРТО2023-4)
                    </span>
                    <span className="price">От 95.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Установка аттачментов, припасовка элайнеров
                      <br /> (ОРД-ОРТО2023-5)
                    </span>
                    <span className="price">От 20.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Наблюдение на этапе ортодонтического лечения на элайнерах
                      <br /> (ОРД-ОРТО2023-6)
                    </span>
                    <span className="price">От 3.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Ретенционный период (снятие аттачментов, установка
                      ретейнеров)
                      <br /> (ОРД-ОРТО2023-7)
                    </span>
                    <span className="price last">От 20.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие оттиска с одной челюсти альгинатными массами
                      <br /> (ОРД-A02.07.010.002 )
                    </span>
                    <span className="price last">От 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Изготовление прикусного шаблона
                      <br /> (ОРД-A02.07.010.005)
                    </span>
                    <span className="price last">От 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Антропометрические исследования (Компьютерный анализ ТРГ
                      головы)
                      <br /> (ОРД-А02.07.004)
                    </span>
                    <span className="price last">От 2.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Изготовление контрольной модели (из гипса)
                      <br /> (ОРД-А23.07.002.027)
                    </span>
                    <span className="price last">От 500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Прием (осмотр, консультация) врача-ортодонта первичный
                      <br /> (ОРД-В01.063.001)
                    </span>
                    <span className="price last">От 1.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Прием (осмотр, наблюдение) врача-ортодонта повторный
                      <br /> (ОРД-В01.063.002 )
                    </span>
                    <span className="price last">От 700₽</span>
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
                  imageSrcNine={doctorElevenMob}
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
                    <Link to="/services/vinirs" className="link active">
                      Виниры и коронки
                    </Link>
                  </div>
                  <h1 className="heading" style={{ width: "30%" }}>
                    Установка брекетов в Ивантеевке под ключ
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
                    <h3 className="heading-info">Виниры и коронки</h3>
                    <p className="p-info">
                      Установка брекетов в Ивантеевке – это надежный и
                      эффективный способ{" "}
                      <a href="https://dental-home.ru/services/bite-correction">
                        исправить неправильное положение зубов {""} {""}
                      </a>
                      {""}
                      {""}
                      {""}
                      и получить прекрасную улыбку. Наша клиника предлагает
                      качественные услуги по установке брекетов, которые помогут
                      вам достичь желаемого результата.
                      <br />
                      <br />
                      Мы используем только самые современные технологии и
                      материалы для установки брекетов, чтобы обеспечить
                      максимальный комфорт и безопасность наших пациентов. Наши
                      специалисты помогут вам выбрать наиболее подходящий тип
                      брекетов, который будет соответствовать вашим потребностям
                      и пожеланиям.
                      <br />
                      <br />
                      Установка брекетов – это процедура, которая проводится в
                      несколько этапов. Сначала наш специалист проводит осмотр и
                      консультацию, после чего планируется хирургическая
                      операция по установке брекетов. Затем происходит период
                      ожидания, когда зубы постепенно перемещаются в нужное
                      положение. После этого проводится этап коррекции, когда
                      брекеты регулируются для достижения оптимального
                      результата.
                      <br />
                      <br />
                      Установка брекетов цена зависит от сложности процедуры и
                      используемых материалов. Но мы гарантируем, что наши цены
                      будут доступными и адекватными.
                      <br />
                      <br />
                      Где лучше ставить брекеты? Наша клиника находится в
                      Ивантеевке и предлагает качественные услуги по установке
                      брекетов в Московской области. Мы гарантируем максимальный
                      результат и безболезненную процедуру.
                      <br />
                      <br />
                      Установка брекетов – это возможность получить прекрасную
                      улыбку и уверенность в себе. Наша клиника предлагает
                      качественные услуги по установке брекетов в Ивантеевке,
                      которые помогут вам достичь желаемого результата. Не
                      откладывайте поход к стоматологу на потом! Запишитесь на
                      консультацию по установке брекетов уже сегодня и получите
                      профессиональную помощь в достижении желаемого результата.
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">
                      Преимущества виниров и коронок:
                    </h3>
                    <p className="p-info two">
                      <br />
                      <br />
                      - Эстетическая привлекательность. Виниры и коронки
                      позволяют изменить форму, цвет и положение зубов, создавая
                      красивую улыбку.
                      <br />
                      <br />
                      - Функциональность. Протезы восстанавливают поврежденные
                      зубы, обеспечивая нормальное жевание и речь.
                      <br />
                      <br />
                      - Долговечность. Керамические и циркониевые виниры и
                      коронки имеют высокую прочность и долгий срок службы.
                      <br />
                      <br />
                      - Безопасность. Материалы, используемые для изготовления
                      виниров и коронок, не вызывают аллергических реакций и не
                      взаимодействуют с тканями ротовой полости.
                      <br />
                      <br />
                      Если вы ищете качественные стоматологические услуги по
                      установке виниров и коронок в Ивантеевке, обратитесь в
                      нашу клинику Dental Home. Наша команда опытных
                      специалистов гарантирует высокое качество работы,
                      индивидуальный подход к каждому пациенту и использование
                      современных технологий. Мы поможем вам достичь желаемого
                      результата и получить красивую улыбку.
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">
                      {" "}
                      Процесс протезирования в клинике Dental Home
                    </h3>
                    <p className="p-info two">
                      <br />
                      <br />
                      <strong>3.1 Консультация и планирование</strong>
                      <br />
                      <br />
                      Перед началом лечения мы проводим детальную консультацию,
                      в ходе которой определяем ваши цели и ожидания от
                      протезирования. На основе этой информации мы разрабатываем
                      индивидуальный план лечения.{""}{" "}
                      <a href="https://dental-home.ru/services/child-bite-correction">
                        Исправление прикуса у детей брекетами
                      </a>
                      <br />
                      <br />
                      <strong>3.2 Подготовительные процедуры</strong>
                      <br />
                      <br />
                      В некоторых случаях может потребоваться подготовительная
                      работа, такая как удаление зубов или лечение зубочелюстной
                      системы. Наша команда специалистов проведет все
                      необходимые процедуры перед протезированием.
                      <br />
                      <br />
                      <strong>3.3 Изготовление и установка протеза</strong>
                      <br />
                      <br />
                      После подготовительных процедур мы приступаем к
                      изготовлению протеза в нашей собственной лаборатории.
                      Когда протез будет готов, мы проведем его установку и
                      проверим его соответствие вашим потребностям и ожиданиям.
                    </p>
                  </div>

                  <div className="price-tab" id="prices">
                    <h4 className="price-heading"> Ортодонтия</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Лицевая маска
                          <br /> (ОРД-А16.07.04.007)
                        </span>
                        <span className="price">От 15.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Разобщающая пластинка
                          <br /> (ОРД-А16.07.047.001)
                        </span>
                        <span className="price">От 10.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Аппарат "Myobrace"
                          <br /> (ОРД-А16.07.047.002 )
                        </span>
                        <span className="price">От 15.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Пластиночный аппарат с исскуственными зубами
                          <br /> (ОРД-А16.07.047.003 )
                        </span>
                        <span className="price">От 13.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Съемный пластиночный аппарат из импортных материалов
                          на 1 зубной ряд
                          <br /> (ОРД-А16.07.047.004){" "}
                        </span>
                        <span className="price">От 15.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Съемный двухчелюстной функциональный аппарат <br />{" "}
                          (ОРД-А16.07.047.005)
                        </span>
                        <span className="price">От 23.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Винт для съемного пластиночного аппарата
                          <br /> (ОРД-А16.07.047.006)
                        </span>
                        <span className="price">От 1.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Коррекция и активация съемного ортодонтического
                          аппарата
                          <br /> (ОРД-А23.07.001.001){" "}
                        </span>
                        <span className="price">От 500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Починка (перебазировка) пластиночного аппарата
                          <br /> (ОРД-А23.07.001.002 ){" "}
                        </span>
                        <span className="price">От 5.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Замена матрицы на бюгельном протезе (1 протез) <br />{" "}
                          (ОРД-А23.07.001.002 )
                        </span>
                        <span className="price">От 5.500₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">
                      {" "}
                      Ортодонтическая коррекция с применением брекет-систем
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          I степени сложности <br /> <br />
                          (ОРД-А16.07.048.001 )
                        </span>
                        <span className="price">От 65.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          II степени сложности <br /> <br /> (ОРД-А16.07.048.002
                          )
                        </span>
                        <span className="price">От 70.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          III степени сложности <br /> <br />{" "}
                          (ОРД-А16.07.048.003 )
                        </span>
                        <span className="price">От 75.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Фиксация брекет-системы (одна челюсть)
                          <br /> <br /> (ОРД-А16.07.048.004 ){" "}
                        </span>
                        <span className="price">От 80.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Фиксация эстетической брекет-системы(одна челюсть)
                          <br /> <br /> (ОРД-А16.07.048.005)
                        </span>
                        <span className="price">От 95.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Брекет-система металлическая безлигатурная
                          <br /> <br /> (ОРД-А16.07.048.006 )
                        </span>
                        <span className="price">От 2.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Брекет-система Damon Q
                          <br /> <br /> (ОРД-А16.07.048.007 )
                        </span>
                        <span className="price">От 30.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Брекет-система сапфировая, керамическая
                          <br /> <br /> (ОРД-А16.07.048.008 )
                        </span>
                        <span className="price">От 2.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Брекет-система керамическая безлигатурная <br />{" "}
                          <br /> (ОРД-А16.07.048.009 )
                        </span>
                        <span className="price last">От 35.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Фиксация одного брекета
                          <br /> <br /> (ОРД-А16.07.048.010 )
                        </span>
                        <span className="price last">От 2.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Замена одного брекета
                          <br /> <br /> (ОРД-А16.07.048.011)
                        </span>
                        <span className="price last">От 3.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Установка открывающей, закрывающей пружины
                          <br /> <br /> (ОРД-А16.07.048.015 )
                        </span>
                        <span className="price last">От 1.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Установка чейна (1 звено)
                          <br /> <br /> (ОРД-А16.07.048.016)
                        </span>
                        <span className="price last">От 130₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Установка лигатуры (1 шт.)
                          <br /> <br /> (ОРД-А16.07.048.017 )
                        </span>
                        <span className="price last">От 70₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Наложение длиной лигатуры
                          <br /> <br /> (ОРД-А16.07.048.018 )
                        </span>
                        <span className="price last">От 400₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Изгиб на дуге
                          <br /> <br /> (ОРД-А16.07.048.019)
                        </span>
                        <span className="price last">От 200₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">Ретенция</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Несъемный ретейнер на 1 зубной ряд
                          <br /> <br /> (ОРД-А16.07.018)
                        </span>
                        <span className="price">От 12.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Ретенционный съемный аппарат на 1 зубной ряд
                          <br /> <br /> (ОРД-А16.07.047.009)
                        </span>
                        <span className="price">От 8.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Снятие ретейнера
                          <br /> <br /> (ОРД-А16.07.048.021 )
                        </span>
                        <span className="price">От 5.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Починка несъемного ретейнера
                          <br /> <br /> (ОРД-А23.07.001.002)
                        </span>
                        <span className="price last">От 2.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Изготовление ретенционной каппы
                          <br /> <br /> (ОРД-А24)
                        </span>
                        <span className="price last">От 6.500₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">
                      {" "}
                      Дополнительные приспособления
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Активация ортодонтического винта
                          <br /> <br /> (ОРД-23.07.002.052)
                        </span>
                        <span className="price">От 3.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Лечение с помощью аппарата Марко-Росса
                          <br /> <br /> (ОРД-A16.07.046.001 )
                        </span>
                        <span className="price">От 29.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Аппарат для дистализации моляров
                          <br /> <br /> (ОРД-A16.07.046.002)
                        </span>
                        <span className="price">От 33.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Лечение с помощью небного бюгеля
                          <br /> <br /> (ОРД-A16.07.046.003)
                        </span>
                        <span className="price">От 4.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Межчелюстные тяги
                          <br /> <br /> (ОРД-A16.07.046.004 )
                        </span>
                        <span className="price">От 5.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Изготовление кольца-петли ортодонтического
                          <br /> <br /> (ОРД-А23.07.002.051)
                        </span>
                        <span className="price">От 9.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Повторная фиксация кольца-петли ортодонтического
                          <br /> <br /> (ОРД-А23.07.002.052)
                        </span>
                        <span className="price last">От 2.000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    id="prices"
                    style={{ marginTop: "clamp(16px,1.66656vw,64px)" }}
                  >
                    <h4 className="price-heading">Элайнеры</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Компьютерное моделирование (диагностика КТ, расчеты,
                          компьютерное моделирование в лаборатории, составление
                          плана лечения) <br /> <br /> (ОРД-ОРТО2023-1)
                        </span>
                        <span className="price">От 55.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Оплата кейса(запуск в производство)
                          <br /> <br /> (ОРД-ОРТО2023-2 )
                        </span>
                        <span className="price">От 190.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Оплата кейса(запуск в производство: 1 этап - до 12
                          капп)
                          <br /> <br /> (ОРД-ОРТО2023-3)
                        </span>
                        <span className="price last">От 95.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Установка аттачментов, припасовка элайнеров
                          <br /> <br /> (ОРД-ОРТО2023-5 )
                        </span>
                        <span className="price last">От 20.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Наблюдение на этапе ортодонтического лечения на
                          элайнерах
                          <br /> <br /> (ОРД-ОРТО2023-6)
                        </span>
                        <span className="price last">От 3.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Ретенционный период (снятие аттачментов, установка
                          ретейнеров)
                          <br /> <br /> (ОРД-ОРТО2023-7 )
                        </span>
                        <span className="price last">От 20.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Ретенционный период (снятие аттачментов, установка
                          ретейнеров)
                          <br /> <br /> (ОРД-ОРТО2023-7 )
                        </span>
                        <span className="price last">От 20.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Снятие оттиска с одной челюсти альгинатными массами
                          <br /> <br /> (ОРД-A02.07.010.002)
                        </span>
                        <span className="price last">От 500₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Изготовление прикусного шаблона
                          <br /> <br /> (ОРД-A02.07.010.005)
                        </span>
                        <span className="price last">От 2.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Изготовление контрольной модели (из гипса)
                          <br /> <br /> (ОРД-А23.07.002.027)
                        </span>
                        <span className="price last">От 500₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Прием (осмотр, консультация) врача-ортодонта первичный
                          <br /> <br /> (ОРД-В01.063.001 )
                        </span>
                        <span className="price last">От 1.000₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Прием (осмотр, наблюдение) врача-ортодонта повторный
                          <br /> <br /> (ОРД-В01.063.002 )
                        </span>
                        <span className="price last">От 700₽</span>
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
                  imageSrc9={doctorEleven}
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

export default BracesPage;
