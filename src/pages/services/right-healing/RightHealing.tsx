import React, { useState, useRef, RefObject, useEffect } from "react";
import { keyframes } from "@emotion/react";
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
import { MDBCheckbox } from "mdb-react-ui-kit";
import emailjs from "@emailjs/browser";

import Popup from "reactjs-popup";
import { Reveal } from "react-awesome-reveal";
import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import Header from "../../../components/header/header";
import ReviewGallery from "../../../components/reviews/ReviewGallery";
import Footer from "../../../components/footer/Footer";
import Gallery from "../../../components/gallery/gallery";
import ServiceGallery from "../../../components/gallery/services_gallery";
import PcServiceGallery from "../../../components/gallery/pc_services_gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "../../../components/service_template/styles/services_styles.css";
import PcGallery from "../../../components/gallery/pc_gallery";
import ReviewGalleryDesktop from "../../../components/reviews/ReviewGalleryDesktop";
import { Helmet } from "react-helmet";

const pavelGallery = require("../../../assets/pavel_gallery.webp");
const pavelGalleryPc = require("../../../assets/pavel_pc.webp");

const mainService = require("../../../assets/service_pc.webp");

const doctorOne = require("../../../assets/1.webp");
const doctorTwo = require("../../../assets/2.webp");
const doctorThree = require("../../../assets/3.webp");
const doctorFour = require("../../../assets/4.webp");
const doctorFive = require("../../../assets/5.webp");
const doctorSix = require("../../../assets/new_doctor.webp");
const doctorSeven = require("../../../assets/7.webp");
const doctorEight = require("../../../assets/8.webp");
const doctorNine = require("../../../assets/9.webp");

const modalImage = require("../../../assets/example_modal.webp");
const logoMobile = require("../../../assets/logo_mob.svg").default;
const teethHealingPc = require("../../../assets/teeth-healing_pc.webp");
const doctorOnePc = require("../../../assets/1.webp");
const doctorTwoPc = require("../../../assets/karen_pc.webp");
const doctorThreePc = require("../../../assets/3.webp");
const doctorFourPc = require("../../../assets/islam_pc.webp");
const doctorFivePc = require("../../../assets/elena_pc.webp");
const doctorSixPc = require("../../../assets/tatyana_pc.webp");
const doctorSevenPc = require("../../../assets/marina_pc.webp");
const doctorEightPc = require("../../../assets/karen_pc.webp");
const doctorNinePc = require("../../../assets/karen_pc.webp");
const doctorTenPc = require("../../../assets/evgenia_mob.webp");
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
const doctorTenMob = require("../../../assets/evgenia_mob.webp");
const doctorElevenMob = require("../../../assets/marina_mob.webp");

const serviceOnePc = require("../../../assets/service_1.webp");
const serviceTwoPc = require("../../../assets/service_2.webp");
const ServiceThreePc = require("../../../assets/service_3.webp");
const ServiceFourPc = require("../../../assets/service_4.webp");

const serviceOneMob = require("../../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../../assets/service_mob_03.webp");
const serviceFourMob = require("../../../assets/service_mob_04.webp");

const RightHealing = () => {
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
        <title>Лечение зубов в Ивантеевке</title>
        <meta
          property="og:title"
          content="Лечение десен в Ивантеевке | Dental Home
"
        ></meta>
        <meta
          property="og:description"
          content="Dental Home - сеть стоматологических клиник в Ивантеевке - преимущества, врачи и отзывы"
        ></meta>
        <meta
          name="description"
          content="Dental Home - сеть стоматологических клиник в Ивантеевке - преимущества, врачи и отзывы"
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
            <title>Лечение десен в Ивантеевке | Dental Home</title>
            <meta
              property="og:title"
              content="Лечение десен в Ивантеевке | Dental Home"
            ></meta>
            <meta
              property="og:description"
              content="В клинике Dental Home в Ивантеевке предлагается комплексное лечение десен для сохранения здоровья вашей улыбки. Запишитесь на консультацию прямо сейчас"
            ></meta>
            <meta
              name="description"
              content="В клинике Dental Home в Ивантеевке предлагается комплексное лечение десен для сохранения здоровья вашей улыбки. Запишитесь на консультацию прямо сейчас"
            ></meta>
          </Helmet>
          <main className="services-screen-mobile">
            <Helmet>
              <meta charSet="utf-8" />
              <title>Лечение десен в Ивантеевке | Dental Home</title>
              <meta
                property="og:title"
                content="Лечение десен в Ивантеевке | Dental Home"
              ></meta>
              <meta
                property="og:description"
                content="В клинике Dental Home в Ивантеевке предлагается комплексное лечение десен для сохранения здоровья вашей улыбки. Запишитесь на консультацию прямо сейчас"
              ></meta>
              <meta
                name="description"
                content="В клинике Dental Home в Ивантеевке предлагается комплексное лечение десен для сохранения здоровья вашей улыбки. Запишитесь на консультацию прямо сейчас"
              ></meta>
            </Helmet>
            <div className="content">
              <Header
                isMenuOpen={isMenuOpen}
                openModal={openModal}
                toggleMenu={toggleMenu}
              ></Header>
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
                  <Link to="/services/right-healing" className="link active">
                    Лечение десен
                  </Link>
                </div>
                <h1 className="heading" style={{ width: "50%" }}>
                  Лечение десен в Ивантеевке
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
                    Лечение десен в Ивантеевке: забота о вашем улыбке
                  </h3>
                  <p className="information-paragraph">
                    Важность здоровья десен не подлежит сомнению – они играют
                    ключевую роль в общем состоянии вашей устной полости. В
                    нашей стоматологической клинике в Ивантеевке мы предлагаем
                    профессиональное лечение десен, которое поможет вам
                    сохранить здоровье и красоту вашей улыбки.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Процедуры лечения десен в нашей клинике
                  </h3>
                  <p className="information-paragraph">
                    Наши опытные специалисты проведут тщательное обследование
                    состояния ваших десен и разработают индивидуальный план
                    лечения. Мы используем современное оборудование и
                    эффективные методики, чтобы обеспечить максимально
                    комфортное и эффективное лечение. Независимо от причины
                    проблем с деснами, мы найдем оптимальное решение для вас.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Почему стоит выбрать нашу клинику для лечения десен?
                  </h3>
                  <p className="information-paragraph">
                    Мы ценим каждого пациента и стремимся к высокому качеству
                    услуг. В нашей клинике вы найдете дружелюбный коллектив
                    специалистов, готовых помочь вам в любых вопросах по лечению
                    десен. Мы делаем все возможное, чтобы процедуры были
                    безболезненными и эффективными, а результат превзошел ваши
                    ожидания. <br /> <br /> Не откладывайте заботу о своих
                    деснах на потом – обратитесь к нам в клинику и доверьтесь
                    профессионалам. Мы поможем вам вернуть здоровье и красоту
                    вашей улыбке, чтобы вы могли наслаждаться жизнью без
                    беспокойств о состоянии вашего устного здоровья.
                  </p>
                </section>
                <div className="divider"></div>
                <div className="plate">
                  <section className="tab-one">
                    <h5 className="plate-heading" style={{ width: "90%" }}>
                      Восстановление зуба пломбой
                    </h5>
                    <span className="text">
                      Применение системы Коффердам, Роббердам <br /> <br />{" "}
                      (ТР-А02.07.001.001)
                    </span>
                    <span className="price">850 ₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Применение системы OptraGate <br /> <br />{" "}
                      (ТР-А02.07.001.002){" "}
                    </span>
                    <span className="price">750 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Микроабразия эмали (1 зуб) <br /> <br /> (ТР-А16.07.002)
                    </span>
                    <span className="price">2 650 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба пломбой I, V, VI класс по Блэку с
                      использованием материалов из фотополимеров SonicFill,
                      Asteria <br /> <br /> (ТР-А16.07.002.010.01)
                    </span>
                    <span className="price">3 900 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба пломбой I, V, VI класс по Блэку с
                      использованием материалов из фотополимеров Filtek, Gradia{" "}
                      <br /> <br /> (ТР-А16.07.002:010)
                    </span>
                    <span className="price">4 750 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба виниром, полукоронкой из
                      фотополимерного материала прямым методом <br /> <br />{" "}
                      (ТР-А16.07.003.001)
                    </span>
                    <span className="price">8 950 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Избирательное пришлифовывание твердых тканей зуба <br />{" "}
                      <br />
                      (ТР-А16.07.025 )
                    </span>
                    <span className="price">480 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба пломбировочным материалом с
                      использованием титановых штифтов <br /> <br />{" "}
                      (ТР-А16.07.031.01)
                    </span>
                    <span className="price">6 850 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба пломбировочным материалом с
                      использованием стекловолоконных штифтов <br /> <br />{" "}
                      (ТР-А16.07.031.02)
                    </span>
                    <span className="price">8 900 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие временной пломбы <br /> <br /> (ТР-А16.07.091){" "}
                    </span>
                    <span className="price">470₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Трепанация (препарирование) зуба <br /> <br />{" "}
                      (ТР-А16.07.092)
                    </span>
                    <span className="price">850₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба пломбой с нарушением контактоного
                      пункта II, III класс по Блэку с использованием материалов
                      из фотополимеров Filtek, Gradia <br /> <br />{" "}
                      (ТР-А16:07.002:011)
                    </span>
                    <span className="price">5 400 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба пломбой с нарушением контактоного
                      пункта II, III класс по Блэку с использованием материалов
                      из фотополимеров SonicFill, Asteria <br /> <br />{" "}
                      (ТР-А16:07.002:011.01)
                    </span>
                    <span className="price">4 300 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба пломбой IV класс по Блэку с
                      использованием материалов из фотополимеров Filtek, Gradia{" "}
                      <br /> <br /> (ТР-А16:07.002:012)
                    </span>
                    <span className="price">5 800 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба пломбой IV класс по Блэку с
                      использованием материалов из фотополимеров Asteria <br />{" "}
                      <br />
                      (ТР-А16:07.002:012.01 )
                    </span>
                    <span className="price">4 900 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Восстановление зуба пломбой с использованием материалов из
                      фотополимеров Filtek Flow <br /> <br />{" "}
                      (ТР-А16:07.002:014)
                    </span>
                    <span className="price">3 050 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Наложение лечебной или изолирующей прокладки <br /> <br />{" "}
                      (ТР-А16:07.030.004)
                    </span>
                    <span className="price last">950 ₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading" style={{ width: "90%" }}>
                      Лечение осложнений кариеса
                    </h5>
                    <span className="text">
                      Наложение девитализирующей пасты <br /> <br />{" "}
                      (ТР-А11.07.027)
                    </span>
                    <span className="price">550 ₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Пломбирование корневого канала зуба под контролем
                      апекс-локатора (процедура) <br /> <br />{" "}
                      (ТР-А16.07.0008.012)
                    </span>
                    <span className="price">400 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Наложение временной пломбы <br /> <br />{" "}
                      (ТР-А16.07.002:009){" "}
                    </span>
                    <span className="price">650 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Пломбирование корневого канала зуба пастой (1 канал){" "}
                      <br /> <br /> (ТР-А16.07.008.001)
                    </span>
                    <span className="price">350 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Пломбирование корневого канала зуба пастой с
                      гуттаперчевыми штифтами (1 канал) <br /> <br />{" "}
                      (ТР-А16.07.008.002)
                    </span>
                    <span className="price"> 950 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Закрытие перфорации стенки корневого канала зуба <br />{" "}
                      <br /> (ТР-А16.07.008.003)
                    </span>
                    <span className="price">1 600 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Инструментальная и медикаментозная обработка хорошо
                      проходимого корневого канала (1 канал) <br /> <br />{" "}
                      (ТР-А16.07.030.001)
                    </span>
                    <span className="price">850 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Инструментальная и медикаментозная обработка плохо
                      проходимого корневого канала (1 канала) <br /> <br />{" "}
                      (ТР-А16.07.030.002)
                    </span>
                    <span className="price">1 150 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Фиксация внутриканального <br /> <br /> (ТР-А16.07.093)
                    </span>
                    <span className="price">1 600 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление внутриканального штифта <br /> <br />{" "}
                      (ТР-А16.07.094)
                    </span>
                    <span className="price">2 200₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Временное пломбирование лекарственным препаратом корневого
                      канала ( 1 канал) <br /> <br /> (ТР-А16:07.030:003)
                    </span>
                    <span className="price">700₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Распломбировка корневого канала ранеее леченного пастой (1
                      канал) <br /> <br /> (ТР-А16:07.082:001)
                    </span>
                    <span className="price">650 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Распломбировка корневого канала ранеее леченного
                      фосфат-цементом/резорцин-формалиновым методом (1 канал){" "}
                      <br /> <br /> (ТР-А16:07.082:002)
                    </span>
                    <span className="price">1 350 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Депофорез корневого канала зуба <br /> <br />{" "}
                      (ТР-А17.07.006)
                    </span>
                    <span className="price"> 350 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Ультразвуковое расширение корневого канала зуба (1 канал){" "}
                      <br /> <br /> (ТР-А22.07.004)
                    </span>
                    <span className="price">350 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Механическая и медикаментозная обработка корневого канала{" "}
                      <br /> <br /> (ТР-А22.07.01)
                    </span>
                    <span className="price">1 600 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Пломбировка корневого канала гуттаперчивый штифт+паста{" "}
                      <br /> <br /> (ТР-А22.07.02)
                    </span>
                    <span className="price">1 600 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Временная пломбировка корневого канала Metapex/Colasept{" "}
                      <br /> <br />
                      (ТР-А22.07.03)
                    </span>
                    <span className="price last">550 ₽</span>
                  </section>
                </div>
                <div
                  className="plate"
                  style={{ marginTop: "clamp(16px,7.47648vw,64px)" }}
                >
                  <section className="tab-one">
                    <h5 className="plate-heading" style={{ width: "90%" }}>
                      Эндодоническое лечение
                    </h5>
                    <span className="text">
                      Эндодоническое лечение одноканального зуба <br /> <br />{" "}
                      (ТР-1)
                    </span>
                    <span className="price">6 300 ₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Эндодоническое лечение двухканального зуба <br /> <br />{" "}
                      (ТР-2)
                    </span>
                    <span className="price">10 500 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Эндодоническое лечение трехканального зуба <br /> <br />{" "}
                      (ТР-3)
                    </span>
                    <span className="price">14 700 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Эндодоническое лечение четырехканального зуба <br />{" "}
                      <br /> (ТР-4)
                    </span>
                    <span className="price">19 000 ₽</span>
                  </section>

                  <section className="tab-three">
                    <span className="text">
                      Эндодоническое лечение пятиканального зуба <br /> <br />{" "}
                      (ТР-5)
                    </span>
                    <span className="price">23 000 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Эндодоническое лечение одноканального зуба (периодонтит){" "}
                      <br /> <br /> (ТР-6 )
                    </span>
                    <span className="price">9 000 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Эндодоническое лечение двухканального зуба (периодонтит){" "}
                      <br /> <br /> (ТР-7)
                    </span>
                    <span className="price">13 150 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Эндодоническое лечение трехканального зуба (периодонтит){" "}
                      <br /> <br /> (ТР-8)
                    </span>
                    <span className="price">17 350 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Эндодоническое лечение четырехканального зуба
                      (периодонтит) <br /> <br /> (ТР-9)
                    </span>
                    <span className="price">21 500 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Эндодоническое лечение пятиканального зуба (периодонтит){" "}
                      <br /> <br /> (ТР-91)
                    </span>
                    <span className="price last">25 750 ₽</span>
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
                      Реставрация 1 степени сложности <br /> <br /> (ТР-1)
                    </span>
                    <span className="price">4 200 ₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Реставрация 2 степени сложности <br /> (ТР-2)
                    </span>
                    <span className="price">5 150 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Реставрация 3 степени сложности <br /> <br /> (ТР-3)
                    </span>
                    <span className="price">5 800 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Художественная реставрация зуба <br /> <br /> (ТР-4)
                    </span>
                    <span className="price last">9 500 ₽</span>
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
                    <span className="price"> 1000 ₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Аппликационная анестезия <br /> <br /> (B01.003.004:004){" "}
                    </span>
                    <span className="price">400 ₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Инфильтрационная анестезия <br /> <br /> (B01.003.004:005){" "}
                    </span>
                    <span className="price last"> 800 ₽</span>
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
                          onChange={(event) => setBookTime(event.target.value)}
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
                    <Link to="/services/right-healing" className="link active">
                      Лечение десен
                    </Link>
                  </div>
                  <h1 className="heading" style={{ width: "50%" }}>
                    Лечение десен в Ивантеевке
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
                  src={teethHealingPc}
                  alt="service"
                  className="service-image"
                ></img>
              </div>
              <div className="services-content">
                <div className="services-list">
                  <span className="text">Содержание</span>
                  <div className="buttons">
                    <ScrollLink to="information" className="button">
                      Основная информация
                    </ScrollLink>
                    <ScrollLink to="prices" className="button">
                      Цены
                    </ScrollLink>
                    <ScrollLink to="works" className="button">
                      Работы
                    </ScrollLink>
                    <ScrollLink to="doctors" className="button">
                      Врачи
                    </ScrollLink>
                    <ScrollLink to="reviews" className="button">
                      Отзывы
                    </ScrollLink>
                    <ScrollLink to="form-screen" className="button">
                      Записаться на прием
                    </ScrollLink>
                  </div>
                </div>
                <div className="services-information" id="information">
                  <span className="text">Об услуге</span>
                  <div className="information-one">
                    <h3 className="heading-info">
                      Лечение десен в Ивантеевке: забота о вашем улыбке
                    </h3>
                    <p className="p-info">
                      Важность здоровья десен не подлежит сомнению – они играют
                      ключевую роль в общем состоянии вашей устной полости. В
                      нашей стоматологической клинике в Ивантеевке мы предлагаем
                      профессиональное лечение десен, которое поможет вам
                      сохранить здоровье и красоту вашей улыбки.
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">
                      Процедуры лечения десен в нашей клинике
                    </h3>
                    <p className="p-info two">
                      Наши опытные специалисты проведут тщательное обследование
                      состояния ваших десен и разработают индивидуальный план
                      лечения. Мы используем современное оборудование и
                      эффективные методики, чтобы обеспечить максимально
                      комфортное и эффективное лечение. Независимо от причины
                      проблем с деснами, мы найдем оптимальное решение для вас.
                    </p>
                  </div>
                  <div className="information-two">
                    <h3 className="heading-info two">
                      Почему стоит выбрать нашу клинику для лечения десен?
                    </h3>
                    <p className="p-info two">
                      Мы ценим каждого пациента и стремимся к высокому качеству
                      услуг. В нашей клинике вы найдете дружелюбный коллектив
                      специалистов, готовых помочь вам в любых вопросах по
                      лечению десен. Мы делаем все возможное, чтобы процедуры
                      были безболезненными и эффективными, а результат превзошел
                      ваши ожидания. <br /> <br /> Не откладывайте заботу о
                      своих деснах на потом – обратитесь к нам в клинику и
                      доверьтесь профессионалам. Мы поможем вам вернуть здоровье
                      и красоту вашей улыбке, чтобы вы могли наслаждаться жизнью
                      без беспокойств о состоянии вашего устного здоровья.
                    </p>
                  </div>
                  <div className="divider"></div>
                  <div className="price-tab" id="prices">
                    <h4 className="price-heading">
                      Восстановление зуба пломбой
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Применение системы Коффердам, Роббердам <br /> <br />{" "}
                          (ТР-А02.07.001.001)
                        </span>
                        <span className="price">От 850₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Применение системы OptraGate <br /> <br />{" "}
                          (ТР-А02.07.001.002)
                        </span>
                        <span className="price">От 750₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Микроабразия эмали (1 зуб) <br /> <br />{" "}
                          (ТР-А16.07.002){" "}
                        </span>
                        <span className="price">От 2.650₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба пломбой I, V, VI класс по Блэку с
                          использованием материалов из фотополимеров SonicFill,
                          Asteria <br /> <br /> (ТР-А16.07.002.010.01)
                        </span>
                        <span className="price">От 3.900₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба пломбой I, V, VI класс по Блэку с
                          использованием материалов из фотополимеров Filtek,
                          Gradia <br /> <br /> (ТР-А16.07.002:010)
                        </span>
                        <span className="price">От 5.400₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба виниром, полукоронкой из
                          фотополимерного материала прямым методом <br /> <br />{" "}
                          (ТР-А16.07.003.001)
                        </span>
                        <span className="price">От 8.950₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Избирательное пришлифовывание твердых тканей зуба{" "}
                          <br /> <br /> (ТР-А16.07.025)
                        </span>
                        <span className="price">От 480₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба пломбировочным материалом с
                          использованием титановых штифтов <br /> <br />{" "}
                          (ТР-А16.07.031.01)
                        </span>
                        <span className="price">От 6.850₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба пломбировочным материалом с
                          использованием стекловолоконных штифтов <br /> <br />{" "}
                          (ТР-А16.07.031.02)
                        </span>
                        <span className="price">От 8.900₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Снятие временной пломбы <br /> <br /> (ТР-А16.07.091){" "}
                        </span>
                        <span className="price">От 470₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Трепанация (препарирование) зуба <br /> <br />{" "}
                          (ТР-А16.07.092)
                        </span>
                        <span className="price">От 850₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба пломбой с нарушением контактоного
                          пункта II, III класс по Блэку с использованием
                          материалов из фотополимеров Filtek, Gradia <br />{" "}
                          <br />
                          (ТР-А16:07.002:011)
                        </span>
                        <span className="price">От 4.750₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба пломбой с нарушением контактоного
                          пункта II, III класс по Блэку с использованием
                          материалов из фотополимеров SonicFill, Asteria <br />{" "}
                          <br /> (ТР-А16:07.002:011.01)
                        </span>
                        <span className="price">От 4.300₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба пломбой IV класс по Блэку с
                          использованием материалов из фотополимеров Filtek,
                          Gradia <br /> <br /> (ТР-А16:07.002:012)
                        </span>
                        <span className="price">От 5.800₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба пломбой IV класс по Блэку с
                          использованием материалов из фотополимеров Asteria{" "}
                          <br /> <br /> (ТР-А16:07.002:012.01)
                        </span>
                        <span className="price">От 4.900₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Восстановление зуба пломбой с использованием
                          материалов из фотополимеров Filtek Flow <br /> <br />
                          (ТР-А16:07.002:014)
                        </span>
                        <span className="price">От 3.050₽</span>
                      </div>
                      <div className="price-row last">
                        <span className="text">
                          Наложение лечебной или изолирующей прокладки <br />{" "}
                          <br /> (ТР-А16:07.030.004)
                        </span>
                        <span className="price last">От 1000₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h4 className="price-heading">
                      Лечение осложнений кариеса
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Наложение девитализирующей пасты <br /> <br />{" "}
                          (ТР-А11.07.027)
                        </span>
                        <span className="price">От 550₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Пломбирование корневого канала зуба под контролем
                          апекс-локатора (процедура) <br /> <br />{" "}
                          (ТР-А16.07.0008.012)
                        </span>
                        <span className="price">От 400₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Наложение временной пломбы <br /> <br />{" "}
                          (ТР-А16.07.002:009){" "}
                        </span>
                        <span className="price">От 650₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Пломбирование корневого канала зуба пастой (1 канал){" "}
                          <br /> <br /> (ТР-А16.07.008.001)
                        </span>
                        <span className="price">От 350₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Пломбирование корневого канала зуба пастой с
                          гуттаперчевыми штифтами (1 канал) <br /> <br />{" "}
                          (ТР-А16.07.008.002)
                        </span>
                        <span className="price">От 950₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Закрытие перформации стенки корневого канала зуба{" "}
                        </span>
                        <span className="price">От 1.600₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Инструментальная и медикаментозная обработка хорошо
                          проходимого корневого канала (1 канала) <br /> <br />{" "}
                          (ТР-А16.07.030.001)
                        </span>
                        <span className="price">От 850₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Инструментальная и медикаментозная обработка плохо
                          проходимого корневого канала (1 канала) <br /> <br />{" "}
                          (ТР-А16.07.030.002)
                        </span>
                        <span className="price">От 1.150₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Фиксация внутриканального штифта <br /> <br />
                          (ТР-А16.07.093)
                        </span>
                        <span className="price">От 1.600₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление внутриканального штифта <br /> <br />{" "}
                          (ТР-А16.07.094)
                        </span>
                        <span className="price">От 2.200₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Временное пломбирование лекарственным препаратом
                          корневого канала ( 1 канал) <br /> <br />{" "}
                          (ТР-А16:07.030:003)
                        </span>
                        <span className="price">От 750₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Распломбировка корневого канала ранеее леченного
                          пастой (1 канал) <br /> <br /> (ТР-А16:07.082:001)
                        </span>
                        <span className="price">От 650₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Распломбировка корневого канала ранеее леченного
                          фосфат-цементом/резорцин-формалиновым методом (1
                          канал) <br /> <br /> (ТР-А16:07.082:002)
                        </span>
                        <span className="price">От 1.350₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Депофорез корневого канала зуба <br /> <br />{" "}
                          (ТР-А17.07.006)
                        </span>
                        <span className="price">От 350₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Ультразвуковое расширение корневого канала зуба (1
                          канал) <br /> <br /> (ТР-А17.07.006)
                        </span>
                        <span className="price">От 350₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Механическая и медикаментозная обработка корневого
                          канала <br /> <br />
                          (ТР-А22.07.01)
                        </span>
                        <span className="price">От 1.600₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Пломбировка корневого канала гуттаперчивый штифт+паста{" "}
                          <br /> <br /> (ТР-А22.07.02)
                        </span>
                        <span className="price">От 1.600₽</span>
                      </div>
                      <div className="price-row last">
                        <span className="text">
                          Временная пломбировка корневого канала
                          Metapex/Colasept <br /> <br /> (ТР-А22.07.03)
                        </span>
                        <span className="price last">От 550₽</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="price-tab"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h4 className="price-heading">Реставрации</h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Реставрация 1 степени сложности <br /> <br /> (ТР-1)
                        </span>
                        <span className="price">От 4.200₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Реставрация 2 степени сложности <br /> <br /> (ТР-2)
                        </span>
                        <span className="price">От 5.150₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Реставрация 3 степени сложности <br /> <br /> (ТР-3)
                        </span>
                        <span className="price">От 5.800₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Художественная реставрация зуба <br /> <br /> (ТР-4 )
                        </span>
                        <span className="price last">От 9.500₽</span>
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
                          Проводниковая анестезия <br /> <br />{" "}
                          (B01.003.004:002){" "}
                        </span>
                        <span className="price">От 1000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Аппликационная анестезия <br /> <br />{" "}
                          (B01.003.004:004){" "}
                        </span>
                        <span className="price last">От 400₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Инфильтрационная анестезия <br /> <br />{" "}
                          (B01.003.004:005 ){" "}
                        </span>
                        <span className="price last">От 800₽</span>
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
                id="doctors"
                className="gallery"
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

export default RightHealing;
