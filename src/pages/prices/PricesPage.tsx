import React, { useState, useRef, RefObject, useEffect } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";
import Popup from "reactjs-popup";
import "../prices/styles/prices_styles.css";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import {
  faPlus,
  faMinus,
  faPhone,
  faChevronLeft,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
const logoMobile: string = require("../../assets/logo_mob.svg").default;
const modalImage: string = require("../../assets/example_modal.webp");

interface PriceTabProps {
  tabHeadign: any;
  paragraphOne: any;
  priceOne: any;
  paragraphTwo: any;
  priceTwo: any;
  paragraphThree?: any;
  priceThree?: any;
  paragraphFour?: any;
  priceFour?: any;
  paragraphFive?: any;
  priceFive?: any;
  paragraphSix?: any;
  priceSix?: any;
  paragraphSeven?: any;
  priceSeven?: any;
  paragraphEight?: any;
  priceEight?: any;
  paragraphNine?: any;
  priceNine?: any;
  paragraphTen?: any;
  priceTen?: any;
  paragraph11?: any;
  price11?: any;
  paragraph12?: any;
  price12?: any;
  paragraph13?: any;
  price13?: any;
  paragraph14?: any;
  price14?: any;
  paragraph15?: any;
  price15?: any;
  paragraph16?: any;
  price16?: any;
  paragraph17?: any;
  price17?: any;
  paragraph18?: any;
  price18?: any;
  paragraph19?: any;
  price19?: any;
  paragraph20?: any;
  price20?: any;
  paragraph21?: any;
  price21?: any;
  paragraph22?: any;
  price22?: any;
  paragraph23?: any;
  price23?: any;
  paragraph24?: any;
  price24?: any;
  paragraph25?: any;
  price25?: any;
  paragraph26?: any;
  price26?: any;
  paragraph27?: any;
  price27?: any;
  paragraph28?: any;
  price28?: any;
  paragraph29?: any;
  price29?: any;
  paragraph30?: any;
  price30?: any;
  paragraph31?: any;
  price31?: any;
  paragraph32?: any;
  price32?: any;
  paragraph33?: any;
  price33?: any;
  paragraph34?: any;
  price34?: any;
  style?: any;
  openModal?: any;
}

const PriceTab: React.FC<PriceTabProps> = (props) => {
  return (
    <div className="price-tab">
      <h4 className="price-heading">{props.tabHeadign}</h4>
      <p className="price-p">{props.paragraphOne}</p>
      <span className="price">{props.priceOne}</span>
      <p className="price-p-two">{props.paragraphTwo}</p>
      <span className="price-two">{props.priceTwo}</span>
      <button className="blue-btn">Записаться</button>
    </div>
  );
};

const PriceTabLong: React.FC<PriceTabProps> = (props) => {
  return (
    <div className="price-tab-long" style={{ display: `${props.style}` }}>
      <h4 className="price-heading">{props.tabHeadign}</h4>
      {props.paragraphOne && (
        <>
          <p className="price-p">{props.paragraphOne}</p>
          <span className="price">{props.priceOne}</span>
        </>
      )}
      {props.paragraphTwo && (
        <>
          <p className="price-p-two">{props.paragraphTwo}</p>
          <span className="price-two">{props.priceTwo}</span>
        </>
      )}
      {props.paragraphThree && (
        <>
          <p className="price-p-three">{props.paragraphThree}</p>
          <span className="price-three">{props.priceThree}</span>
        </>
      )}
      {props.paragraphFour && (
        <>
          <p className="price-p-three">{props.paragraphFour}</p>
          <span className="price-three">{props.priceFour}</span>
        </>
      )}
      {props.paragraphFive && (
        <>
          <p className="price-p-three">{props.paragraphFive}</p>
          <span className="price-three">{props.priceFive}</span>
        </>
      )}
      {props.paragraphSix && (
        <>
          <p className="price-p-three">{props.paragraphSix}</p>
          <span className="price-three">{props.priceSix}</span>
        </>
      )}
      {props.paragraphSeven && (
        <>
          <p className="price-p-three">{props.paragraphSeven}</p>
          <span className="price-three">{props.priceSeven}</span>
        </>
      )}
      {props.paragraphEight && (
        <>
          <p className="price-p-three">{props.paragraphEight}</p>
          <span className="price-three">{props.priceEight}</span>
        </>
      )}
      {props.paragraphNine && (
        <>
          <p className="price-p-three">{props.paragraphNine}</p>
          <span className="price-three">{props.priceNine}</span>
        </>
      )}
      {props.paragraphTen && (
        <>
          <p className="price-p-three">{props.paragraphTen}</p>
          <span className="price-three">{props.priceTen}</span>
        </>
      )}
      {props.paragraph11 && (
        <>
          <p className="price-p-three">{props.paragraph11}</p>
          <span className="price-three">{props.price11}</span>
        </>
      )}
      {props.paragraph12 && (
        <>
          <p className="price-p-three">{props.paragraph12}</p>
          <span className="price-three">{props.price12}</span>
        </>
      )}
      {props.paragraph13 && (
        <>
          <p className="price-p-three">{props.paragraph13}</p>
          <span className="price-three">{props.price13}</span>
        </>
      )}
      {props.paragraph14 && (
        <>
          <p className="price-p-three">{props.paragraph14}</p>
          <span className="price-three">{props.price14}</span>
        </>
      )}
      {props.paragraph15 && (
        <>
          <p className="price-p-three">{props.paragraph15}</p>
          <span className="price-three">{props.price15}</span>
        </>
      )}
      {props.paragraph16 && (
        <>
          <p className="price-p-three">{props.paragraph16}</p>
          <span className="price-three">{props.price16}</span>
        </>
      )}
      {props.paragraph17 && (
        <>
          <p className="price-p-three">{props.paragraph17}</p>
          <span className="price-three">{props.price17}</span>
        </>
      )}
      {props.paragraph18 && (
        <>
          <p className="price-p-three">{props.paragraph18}</p>
          <span className="price-three">{props.price18}</span>
        </>
      )}
      {props.paragraph19 && (
        <>
          <p className="price-p-three">{props.paragraph19}</p>
          <span className="price-three">{props.price19}</span>
        </>
      )}
      {props.paragraph20 && (
        <>
          <p className="price-p-three">{props.paragraph20}</p>
          <span className="price-three">{props.price20}</span>
        </>
      )}
      {props.paragraph21 && (
        <>
          <p className="price-p-three">{props.paragraph21}</p>
          <span className="price-three">{props.price21}</span>
        </>
      )}
      {props.paragraph22 && (
        <>
          <p className="price-p-three">{props.paragraph22}</p>
          <span className="price-three">{props.price22}</span>
        </>
      )}
      {props.paragraph23 && (
        <>
          <p className="price-p-three">{props.paragraph23}</p>
          <span className="price-three">{props.price23}</span>
        </>
      )}
      {props.paragraph24 && (
        <>
          <p className="price-p-three">{props.paragraph24}</p>
          <span className="price-three">{props.price24}</span>
        </>
      )}
      {props.paragraph25 && (
        <>
          <p className="price-p-three">{props.paragraph25}</p>
          <span className="price-three">{props.price25}</span>
        </>
      )}
      {props.paragraph26 && (
        <>
          <p className="price-p-three">{props.paragraph26}</p>
          <span className="price-three">{props.price26}</span>
        </>
      )}
      {props.paragraph27 && (
        <>
          <p className="price-p-three">{props.paragraph27}</p>
          <span className="price-three">{props.price27}</span>
        </>
      )}{" "}
      {props.paragraph28 && (
        <>
          <p className="price-p-three">{props.paragraph28}</p>
          <span className="price-three">{props.price28}</span>
        </>
      )}{" "}
      {props.paragraph29 && (
        <>
          <p className="price-p-three">{props.paragraph29}</p>
          <span className="price-three">{props.price29}</span>
        </>
      )}
      {props.paragraph30 && (
        <>
          <p className="price-p-three">{props.paragraph30}</p>
          <span className="price-three">{props.price30}</span>
        </>
      )}{" "}
      {props.paragraph31 && (
        <>
          <p className="price-p-three">{props.paragraph31}</p>
          <span className="price-three">{props.price31}</span>
        </>
      )}
      {props.paragraph32 && (
        <>
          <p className="price-p-three">{props.paragraph32}</p>
          <span className="price-three">{props.price32}</span>
        </>
      )}
      <button className="blue-btn" onClick={props.openModal}>
        Записаться
      </button>
    </div>
  );
};

const PricesPage = () => {
  const [thankYou, setThankYou] = useState(false);

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

  const [open, setOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [comment, setComment] = useState("");

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

  // Menu Function
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePcMenu = () => {
    setIsMenuPcOpen(!isMenuPcOpen);
  };

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
          Прайс-лист на услуги стоматологии в Dental Home в Ивантеевке -
          доступные цены
        </title>
        <meta
          property="og:title"
          content="Прайс-лист на услуги стоматологии в Dental Home в Ивантеевке -
          доступные цены"
        ></meta>
        <meta
          property="og:description"
          content="Мы предлагаем доступные цены на широкий спектр стоматологических услуг"
        ></meta>
        <meta
          name="description"
          content="Мы предлагаем доступные цены на широкий спектр стоматологических услуг"
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
              Прайс-лист на услуги стоматологии в Dental Home в Ивантеевке -
              доступные цены
            </title>
            <meta
              property="og:title"
              content="Прайс-лист на услуги стоматологии в Dental Home в Ивантеевке -
          доступные цены"
            ></meta>
            <meta
              property="og:description"
              content="Мы предлагаем доступные цены на широкий спектр стоматологических услуг"
            ></meta>
            <meta
              name="description"
              content="Мы предлагаем доступные цены на широкий спектр стоматологических услуг"
            ></meta>
          </Helmet>
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
            <main className="main-content">
              <div className="bread-dots">
                <Link to="/" className="main-link">
                  Главная
                </Link>
                <div className="circle"></div>
                <Link to="/prices" className="prices-link">
                  Цены
                </Link>
              </div>
              <h1 className="heading">Цены</h1>
              <div className="divider-container">
                <div className="divider"></div>
                <div className="row">
                  <span className="text">Направления</span>
                  <span className="text">Цена</span>
                </div>
              </div>
            </main>
            <div className="services-content">
              <div className="buttons">
                <div className="row">
                  <ScrollLink to="orthopedia" smooth={true} className="button">
                    Ортопедия
                  </ScrollLink>
                  <ScrollLink
                    to="consultations"
                    smooth={true}
                    className="button"
                  >
                    Консультация
                  </ScrollLink>
                  <ScrollLink to="xray" smooth={true} className="button">
                    Рентгенология
                  </ScrollLink>
                  <ScrollLink to="diagnostic" smooth={true} className="button">
                    Исследования и диагностика
                  </ScrollLink>
                  <ScrollLink to="anasthetics" smooth={true} className="button">
                    Анестезия
                  </ScrollLink>
                  <ScrollLink to="therapy" smooth={true} className="button">
                    Терапия
                  </ScrollLink>
                  <ScrollLink
                    to="restavration"
                    smooth={true}
                    className="button"
                  >
                    Реставрации
                  </ScrollLink>
                  <ScrollLink to="surgery" smooth={true} className="button">
                    Хирургия
                  </ScrollLink>
                  <ScrollLink
                    to="implantology"
                    smooth={true}
                    className="button"
                  >
                    Имплантология
                  </ScrollLink>
                  <ScrollLink
                    to="reconstruction"
                    smooth={true}
                    className="button"
                  >
                    Реконструктивное лечение
                  </ScrollLink>
                  <ScrollLink to="orthodontia" smooth={true} className="button">
                    Ортодонтия
                  </ScrollLink>
                  <ScrollLink to="hygiene" smooth={true} className="button">
                    Профилактика и гигиена
                  </ScrollLink>
                  <div
                    className="whitening-btn"
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ScrollLink to="whitening" smooth={true} className="button">
                      Отбеливание
                    </ScrollLink>
                  </div>
                </div>
              </div>
              <div
                className="heading-container"
                style={{ marginTop: "clamp(64px,29.90592vw,256px)" }}
              >
                <h2 className="heading">Ортопедия</h2>
              </div>
              <div className="cards">
                <div className="" id="orthopedia">
                  <h2 className="heading">Ортопедия</h2>
                  <PriceTabLong
                    tabHeadign="Ортопедия"
                    paragraphOne="Повторная фиксация на постоянный цемент несъемных ортопедических конструкций (ОРТ-A16.07.049)"
                    priceOne="От 1500₽"
                    paragraphTwo="Фиксация на RELYX Luting несъемных ортопедических конструкций (ОРТ-A16.07.049.001)"
                    priceTwo="От 3500₽"
                    paragraphThree="Фиксация несъемных ортопедических конструкций на временный цемент Temp bond (ОРТ-А16.07.050)"
                    priceThree="От 1000₽"
                    paragraphFour="Снятие несъемной ортопедической конструкции (1 единица) (ОРТ-А16.07.053)"
                    priceFour="От 1500₽"
                    paragraphFive="Удаление вкладки (ОРТ-А16.07.094)"
                    priceFive="От 4000₽"
                    paragraphSix="Коррекция протеза, изготовленного в другой клинике (ОРТ-А23.07.002.001)"
                    priceSix="От 1500₽"
                    paragraphSeven="Починка (перебазировка) съемного протеза лабораторным методом"
                    priceSeven="От 5500₽"
                    paragraphEight="Приварка 1 кламмера"
                    priceEight="От 5500₽"
                    paragraphNine="Приварка 1 зуба"
                    priceNine="От 5500₽"
                    paragraphTen="Замена матрицы на бюгельном протезе (1 протез)"
                    priceTen="От 5500₽"
                    paragraph11="Изготовление каппы для депрограмирования мышц"
                    price11="От 5000₽"
                    paragraph12="Коррекция съемного протеза изготовленного в другой клинике"
                    price12="От 1500₽"
                    paragraph13="Каппа для стабилизации прикуса (Ортотик)"
                    price13="От 20000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Оттиски"
                    paragraphOne="Снятие оттиска с одной челюсти альгинатными массами"
                    priceOne="От 2000₽"
                    paragraphTwo="Снятие оттиска с одной челюсти массой из С-силикона"
                    priceTwo="От 2500₽"
                    paragraphThree="Снятие оттиска с одной челюсти массой из А-силикона"
                    priceThree="От 3500₽"
                    paragraphFour="Прикусной блок"
                    priceFour="От 1500₽"
                    paragraphFive="Изготовление прикусного шаблона и индивидуальной ложки"
                    priceFive="От 4500₽"
                    paragraphSix="Снятие оттиска с одной челюсти для изготовления силиконового ключа"
                    priceSix="От 2500₽"
                    paragraphSeven="Снятие оттиска с одной челюсти с имплантов с использованием индивидуальной ложки"
                    priceSeven="От 4000₽"
                    paragraphEight="Wax up восковое моделирование"
                    priceEight="От 2500₽"
                    paragraphNine="Цифровой оттиск (сканирование верхней и нижней челюсти, прикус)"
                    priceNine="От 8000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Вкладки"
                    paragraphOne="Восстановление зуба с использованием керамической вкладки (накладки) Emax"
                    priceOne="От 30000₽"
                    paragraphTwo="Восстановление зуба с использованием цельнолитой культевой вкладки"
                    priceTwo="От 12500₽"
                    paragraphThree="Восстановление зуба с использованием культевой вкладки из диоксида циркония"
                    priceThree="От 18000₽"
                    paragraphFour="Восстановление зуба с использованием золотой вкладки (без стоимости золота)"
                    priceFour="От 20000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Коронки"
                    paragraphOne="Восстановление зуба коронкой временной прямым методом"
                    priceOne="От 3500₽"
                    paragraphTwo="Восстановление зуба коронкой временной лабораторным способом"
                    priceTwo="От 6000₽"
                    paragraphThree="Восстановление зуба коронкой металлокерамической класса `стандарт`"
                    priceThree="От 18500₽"
                    paragraphFour="Восстановление зуба коронкой металлокерамической класса `премиум`"
                    priceFour="От 27000₽"
                    paragraphFive="Восстановление зуба коронкой металлокерамической на драгоценном сплаве (без учета стоимости драгоценного металла)"
                    priceFive="От 27000₽"
                    paragraphSix="Восстановление зуба коронкой из диоксида циркония класса `стандарт`"
                    priceSix="От 27000₽"
                    paragraphSeven="Восстановление зуба коронкой из диоксида циркония класса `премиум`"
                    priceSeven="От 39000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Восстановление зуба виниром E-max"
                    paragraphOne="Восстановление зуба безметалловой конструкцией (E-max, диоксид циркония) - винир, винир 360, накладка, класса `стандарт`"
                    priceOne="От 30000₽"
                    paragraphTwo="Восстановление зуба безметалловой конструкцией (E-max, диоксид циркония) - винир, винир 360, накладка, класса `премиум`"
                    priceTwo="От 40000₽"
                    paragraphThree="Диагностика прикуса при помощи миостимулятора `МИСТ ТЕНС`"
                    priceThree="От 10000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Съемные, Бюгельные Протезы"
                    paragraphOne="Протезирование зубов полным съемным пластиночным протезом (Японский гарнитур, пластмасса)"
                    priceOne="От 45000₽"
                    paragraphTwo="Протезирование частичным съемным пластиночным протезом для временного замещения отсутствующих 1-2 зубов (иммедиат-протез)"
                    priceTwo="От 12000₽"
                    paragraphThree="Протезирование частичным съемным пластиночным протезом (Японский гарнитур, пластмасса)"
                    priceThree="От 45000₽"
                    paragraphFour="Протезирование съемным бюгельным протезом кламерным"
                    priceFour="От 50000₽"
                    paragraphFive="Протезирование съемным бюгельным протезом шинирующим"
                    priceFive="От 55000₽"
                    paragraphSix="Протезирование съемным бюгельным протезом с замковыми креплениями Bredent"
                    priceSix="От 65000₽"
                    paragraphSeven="Протезирование съемным бюгельным протезом Квадротти"
                    priceSeven="От 55000₽"
                    paragraphEight="Изготовление ночной каппы при бруксизме"
                    priceEight="От 9000₽"
                    paragraphNine="Изготовление каппы для отбеливания (реминерализации)"
                    priceNine="От 5500₽"
                    paragraphTen="Изготовление спортивной каппы"
                    priceTen="От 10000₽"
                    paragraph11="Определение центрального соотношения челюстей и центральной окклюзии"
                    price11="От 25000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="consultations"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Консультация</h2>
                  <PriceTabLong
                    tabHeadign="Консультация"
                    paragraphOne="Первичная консультация с компьютерной томографией и составлением плана лечения"
                    priceOne="От 5500₽"
                    paragraphTwo="Прием (осмотр, консультация) врача-стоматолога первичный"
                    priceTwo="От 1000₽"
                    paragraphThree="Диспансерный прием (осмотр, консультация) врача-стоматолога"
                    priceThree="От 500₽"
                    paragraphFour="Профилактический прием (осмотр, консультация) врача-стоматолога"
                    priceFour="0₽"
                    paragraphFive="Адаптационный прием"
                    priceFive="От 2500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="xray"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Рентгенология</h2>
                  <PriceTabLong
                    tabHeadign="Рентгенология"
                    paragraphOne="Радиовизиография"
                    priceOne="От 500₽"
                    paragraphTwo="Запись на электронный носитель USB"
                    priceTwo="От 500₽"
                    paragraphThree="Повторный диагностический снимок"
                    priceThree="0₽"
                    paragraphFour="Компьютерная томография верхней и нижней челюсти и придаточные пазухи (за исключением лобной пазухи)"
                    priceFour="От 4100₽"
                    paragraphFive="Компьютерная томография 5*5 область 2-3 радиом стоящих зубов"
                    priceFive="От 1500₽"
                    paragraphSix="Компьютерная томография 6*9 область одной челюсти"
                    priceSix="От 2500₽"
                    paragraphSeven="Компьютерная томография ВНЧС (височно-нижнечелюстного сустава)"
                    priceSeven="От 1500₽"
                    paragraphEight="ОПТГ (ортопантомограмма)"
                    priceEight="От 1500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="diagnostic"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Исследования и диагностика</h2>
                  <PriceTabLong
                    tabHeadign="Исследования и диагностика"
                    paragraphOne="Исследование на диагностических моделях челюстей"
                    priceOne="От 500₽"
                    paragraphTwo="Витальное окрашивание твердых тканей зуба"
                    priceTwo="От 380₽"
                    paragraphThree="Исследование кариозных полостей с использованием стоматологического зонда"
                    priceThree="От 70₽"
                    paragraphFour="Термодиагностика зуба"
                    priceFour="От 50₽"
                    paragraphFive="Определение прикуса"
                    priceFive="От 500₽"
                    paragraphSix="Определение вида смыкания зубных рядов с помощью лицевой дуги"
                    priceSix="От 1500₽"
                    paragraphSeven="Перкуссия зубов"
                    priceSeven="От 40₽"
                    paragraphEight="Электроодонтометрия зуба (ЭОД)"
                    priceEight="От 120₽"
                    paragraphNine="Определение индексов гигиены полости рта"
                    priceNine="От 250₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="anasthetics"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Анестезия</h2>
                  <PriceTabLong
                    tabHeadign="Анестезия"
                    paragraphOne="Проводниковая анестезия"
                    priceOne="От 1000₽"
                    paragraphTwo="Аппликационная анестезия"
                    priceTwo="От 300₽"
                    paragraphThree="Инфильтрационная анестезия"
                    priceThree="От 800₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="therapy"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Терапия</h2>
                  <PriceTabLong
                    tabHeadign="Восстановлени зуба пломбой"
                    paragraphOne="Применение системы Коффердам, Роббердам"
                    priceOne="От 500₽"
                    paragraphTwo="Применение системы OptraGate"
                    priceTwo="От 750₽"
                    paragraphThree="Микроабразия эмали (1 зуб)"
                    priceThree="От 1500₽"
                    paragraphFour="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria"
                    priceFour="От 3900₽"
                    paragraphFive="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia"
                    priceFive="От 3500₽"
                    paragraphSix="Восстановление зуба виниром, полукоронкой из фотополимерного материала прямым методом"
                    priceSix="От 7500₽"
                    paragraphSeven="Избирательное пришлифовывание твердых тканей зуба"
                    priceSeven="От 250₽"
                    paragraphEight="Восстановление зуба пломбировочным материалом с использованием титановых штифтов"
                    priceEight="От 5500₽"
                    paragraphNine="Восстановление зуба пломбировочным материалом с использованием стекловолоконных штифтов"
                    priceNine="От 7000₽"
                    paragraphTen="Снятие временной пломбы"
                    priceTen="От 350₽"
                    paragraph11="Трепанация (препарирование) зуба"
                    price11="От 600₽"
                    paragraph12="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia"
                    price12="От 4000₽"
                    paragraph13="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria"
                    price13="От 4300₽"
                    paragraph14="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia"
                    price14="От 4400₽"
                    paragraph15="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Asteria"
                    price15="От 4900₽"
                    paragraph16="Восстановление зуба пломбой с использованием материалов из фотополимеров Filtek Flow"
                    price16="От 1900₽"
                    paragraph17="Наложение лечебной или изолирующей прокладки"
                    price17="От 550₽"
                    paragraph18="Полировка пломбы"
                    price18="От 500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Лечение осложнений кариеса"
                    paragraphOne="Наложение девитализирующей пасты"
                    priceOne="От 500₽"
                    paragraphTwo="Пломбирование корневого канала зуба под контролем апекс-локатора (процедура)"
                    priceTwo="От 350₽"
                    paragraphThree="Наложение временной пломбы"
                    priceThree="От 600₽"
                    paragraphFour="Пломбирование корневого канала зуба пастой (1 канал)"
                    priceFour="От 300₽"
                    paragraphFive="Пломбирование корневого канала зуба пастой с гуттаперчевыми штифтами (1 канал)"
                    priceFive="От 900₽"
                    paragraphSix="Закрытие перфорации стенки корневого канала зуба"
                    priceSix="От 1500₽"
                    paragraphSeven="Инструментальная и медикаментозная обработка хорошо проходимого корневого канала (1 канал)"
                    priceSeven="От 800₽"
                    paragraphEight="Инструментальная и медикаментозная обработка плохо проходимого корневого канала (1 канал)"
                    priceEight="От 1100₽"
                    paragraphNine="Фиксация внутриканального штифта"
                    priceNine="От 1500₽"
                    paragraphTen="Удаление внутриканального штифта"
                    priceTen="От 2100₽"
                    paragraph11="Временное пломбирование лекарственным препаратом корневого канала (1 канал)"
                    price11="От 700₽"
                    paragraph12="Распломбировка корневого канала ранее леченного пастой (1 канал)"
                    price12="От 600₽"
                    paragraph13="Распломбировка корневого канала ранее леченного фосфат-цементом/резорцин-формалиновым методом (1 канал)"
                    price13="От 1300₽"
                    paragraph14="Депофорез корневого канала зуба"
                    price14="От 300₽"
                    paragraph15="Ультразвуковое расширение корневого канала зуба (1 канал)"
                    price15="От 300₽"
                    paragraph16="Механическая и медикаментозная обработка корневого канала"
                    price16="От 1500₽"
                    paragraph17="Пломбировка корневого канала гуттаперчевым штифтом+паста"
                    price17="От 1500₽"
                    paragraph18="Временная пломбировка корневого канала Metapex/Colasept"
                    price18="От 500₽"
                    paragraph19="Наложение лечебной или изолирующей прокладки"
                    price19="От 500₽"
                    paragraph20="Полировка пломбы"
                    price20="От 500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Эндодоническое лечение"
                    paragraphOne="Эндодонтическое лечение одноканального зуба"
                    priceOne="От 4000₽"
                    paragraphTwo="Эндодонтическое лечение двухканального зуба"
                    priceTwo="От 8000₽"
                    paragraphThree="Эндодонтическое лечение трехканального зуба"
                    priceThree="От 12000₽"
                    paragraphFour="Эндодонтическое лечение четырехканального зуба"
                    priceFour="От 16000₽"
                    paragraphFive="Эндодонтическое лечение пятиканального зуба"
                    priceFive="От 20000₽"
                    paragraphSix="Эндодонтическое лечение одноканального зуба (периодонтит)"
                    priceSix="От 6000₽"
                    paragraphSeven="Эндодонтическое лечение двухканального зуба (периодонтит)"
                    priceSeven="От 10000₽"
                    paragraphEight="Эндодонтическое лечение трехканального зуба (периодонтит)"
                    priceEight="От 14000₽"
                    paragraphNine="Эндодонтическое лечение четырехканального зуба (периодонтит)"
                    priceNine="От 18000₽"
                    paragraphTen="Эндодонтическое лечение пятиканального зуба (периодонтит)"
                    priceTen="От 22000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="restavration"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Реставрации</h2>
                  <PriceTabLong
                    tabHeadign="Реставрации"
                    paragraphOne="Реставрация 1 степени сложности"
                    priceOne="От 4000₽"
                    paragraphTwo="Реставрация 2 степени сложности"
                    priceTwo="От 4900₽"
                    paragraphThree="Реставрация 3 степени сложности"
                    priceThree="От 5500₽"
                    paragraphFour="Художественная реставрация зуба"
                    priceFour="От 7500₽"
                    paragraphFive="Лечение начального кариеса системой Icon"
                    priceFive="От 6500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="surgery"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Хирургия</h2>
                  <PriceTabLong
                    tabHeadign="Хирургия"
                    paragraphOne="Аутотрансплантация зуба"
                    priceOne="От 20000₽"
                    paragraphTwo="Удаление временного зуба I степени сложности"
                    priceTwo="От 1200₽"
                    paragraphThree="Удаление временного зуба II степени сложности"
                    priceThree="От 1800₽"
                    paragraphFour="Удаление временного зуба с сохраненными корнями"
                    priceFour="От 2500₽"
                    paragraphFive="Удаление постоянного зуба простое"
                    priceFive="От 2500₽"
                    paragraphSix="Удаление постоянного зуба I степени сложности"
                    priceSix="От 4000₽"
                    paragraphSeven="Удаление постоянного зуба II степени сложности"
                    priceSeven="От 5500₽"
                    paragraphEight="Удаление постоянного зуба III степени сложности"
                    priceEight="От 6500₽"
                    paragraphNine="Удаление зуба сложное с разъединением корней"
                    priceNine="От 7500₽"
                    paragraphTen="Резекция верхушки корня (1 корень)"
                    priceTen="От 15000₽"
                    paragraph11="Вскрытие и дренирование одонтогенного абсцесса"
                    price11="От 1500₽"
                    paragraph12="Отсроченный кюретаж лунки удаленного зуба"
                    price12="От 1500₽"
                    paragraph13="Цистотомия, цистэктомия"
                    price13="От 8000₽"
                    paragraph14="Временное шинирование при заболеваниях пародонта (1 единица)"
                    price14="От 1500₽"
                    paragraph15="Операция удаления ретинированного, дистопированного или сверхкомплектного зуба"
                    price15="От 13000₽"
                    paragraph16="Удаление имплантата"
                    price16="От 7500₽"
                    paragraph17="Пластика уздечки языка"
                    price17="От 3500₽"
                    paragraph18="Пластика уздечки губы"
                    price18="От 3500₽"
                    paragraph19="Вестибулопластика"
                    price19="От 10000₽"
                    paragraph20="Лечение перикоронита (промывание, рассечение и/или иссечение капюшона)"
                    price20="От 2500₽"
                    paragraph21="Остановка луночного кровотечения с использованием гемостатических материалов"
                    price21="От 700₽"
                    paragraph22="Закрытие соустья с гайморовой пазухой"
                    price22="От 5500₽"
                    paragraph23="Наложение шва на слизистую оболочку рта"
                    price23="От 500₽"
                    paragraph24="Открытый кюретаж при заболеваниях пародонта в области 1 зуба"
                    price24="От 2500₽"
                    paragraph25="Закрытый кюретаж при заболеваниях пародонта в области 1 зуба"
                    price25="От 2000₽"
                    paragraph26="Пластика мягких тканей в области зуба или имплантата"
                    price26="От 10000₽"
                    paragraph27="Снятие швов"
                    price27="От 1000₽"
                    paragraph28="Антисептическая обработка патологических карманов"
                    price28="От 1200₽"
                    paragraph29="Удаление экзостоза в области 1 зуба"
                    price29="От 6500₽"
                    paragraph30="Хирургическое удлинение в области 1 зуба"
                    price30="От 2500₽"
                    paragraph31="Закрытие рецессии в обл. 1-3 рядом стоящих зубов"
                    price31="От 20000₽"
                    paragraph32="Удаление фрагмента зуба"
                    price32="От 20000₽"
                    paragraph33="Внутрилигаментная инъекция"
                    price33="От 500₽"
                    paragraph34="Электрокоагуляция с использованием Emdogain 0,7 ml (1 ед.проц.)"
                    price34="От 7500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="implantology"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Имплантология</h2>
                  <PriceTabLong
                    tabHeadign="Протезирование на имплантах"
                    paragraphOne="Протезирование на имплантах"
                    priceOne="От 8500₽"
                    paragraphTwo="Протезирование зуба с использованием имплантата временной коронкой + временный абатмент"
                    priceTwo="От 4000₽"
                    paragraphThree="Единица промежуточной части временного мостовидного протеза с опорой на имплантаты"
                    priceThree="От 4500₽"
                    paragraphFour="Протезирование зуба с использованием имплантата коронкой металлокерамической класса 'Стандарт' (транскоклюзионная фиксация)"
                    priceFour="От 25000₽"
                    paragraphFive="Протезирование зуба с использованием имплантата коронкой металлокерамической класса 'Стандарт' (транскоклюзионная фиксация) на индивидуальном абатменте"
                    priceFive="От 31000₽"
                    paragraphSix="Единица промежуточной части мостовидного протеза класса 'Стандарт' (металлокерамика) с опорой на имплантаты"
                    priceSix="От 17000₽"
                    paragraphSeven="Единица промежуточной части мостовидного протеза класса 'Премиум' (металлокерамика) с опорой на имплантаты"
                    priceSeven="От 21000₽"
                    paragraphEight="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса 'Стандарт' (транскоклюзионная фиксация)"
                    priceEight="От 33000₽"
                    paragraphNine="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса 'Премиум' (транскоклюзионная фиксация) на индивидуальном абатменте"
                    priceNine="От 37500₽"
                    paragraphTen="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса 'Стандарт' (цементная фиксация) на индивидуальном абатменте"
                    priceTen="От 39000₽"
                    paragraph11="Единица промежуточной части мостовидного протеза из диоксида циркония класса 'Стандарт' с опорой на имплантаты"
                    price11="От 22000₽"
                    paragraph12="Единица промежуточной части мостовидного протеза из диоксида циркония класса 'Премиум' с опорой на имплантаты"
                    price12="От 26000₽"
                    paragraph13="Протезирование зуба с использованием имплантата коронкой E-max на титановом основании класса 'Премиум' (транскоклюзионная фиксация)"
                    price13="От 30000₽"
                    paragraph14="Индивидуальный абатмент из диоксида циркония"
                    price14="От 15000₽"
                    paragraph15="Протезирование полным условно-съемным протезом с опорой на имплантаты (балочная конструкция) мультиюниты оплачиваются отдельно"
                    price15="От 15000₽"
                    paragraph16="Протезирование полным условно-съемным протезом с опорой на имплантатах (балочная конструкция) мультиюниты оплачиваются отдельно"
                    price16="От 185000₽"
                    paragraph17="Протезирование полным несъемным протезом с опорой на имплантатах на мультиюнитах (мультиюниты оплачиваются отдельно)"
                    price17="От 185000₽"
                    paragraph18="Стоимость мультиюнита (1 единица)"
                    price18="От 20000₽"
                    paragraph19="Протезирование полным съемным протезом на имплантатах с замковым креплением (люкаторная система замков)"
                    price19="От 120000₽"
                    paragraph20="Протезирование полным съемным протезом на имплантатах на аттачментах"
                    price20="От 95000₽"
                    paragraph21="Временный несъемный протез на имлантатах"
                    price21="От 80000₽"
                    paragraph22="Замена винта трансокклюзионной фиксации"
                    price22=" От500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Внутрикостная дентальная имплантация системой"
                    paragraphOne="Имплантация системой Dentium SuperLine (Ю.Корея)"
                    priceOne="От 39000₽"
                    paragraphTwo="Имплантация системой Nobel Biocare (Швейцария)"
                    priceTwo="От 70000₽"
                    paragraphThree="Имплантация системой NeoDent GM (Бразилия)"
                    priceThree="От 39000₽"
                    paragraphFour="Миниимплант (ортовинт)"
                    priceFour="От 12000₽"
                    paragraphFive="Замена винта трансокклюзионной фиксации"
                    priceFive="От 500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Формирователь десны"
                    paragraphOne="Установка формирователя десны Dentium SuperLine"
                    priceOne="От 7500₽"
                    paragraphTwo="Установка формирователя десны Nobel Biocare"
                    priceTwo="От 9500₽"
                    paragraphThree="Установка формирователя десны NeoDent GM"
                    priceThree="От 7500₽"
                    paragraphFour="Установка формирователя десны"
                    priceFour="От 7500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Синус-лифтинг"
                    paragraphOne="Синус-лифтинг (без учета стоимости остеопластических материалов)-закрытый"
                    priceOne="От 15000₽"
                    paragraphTwo="Синус-лифтинг (без учета стоимости остеопластических материалов)-открытый"
                    priceTwo="От 40000₽"
                    paragraphThree="Направленная костная регенерация (HKP) титановой сеткой"
                    priceThree="От 25000₽"
                    paragraphFour="Подсыпка КоллапАн-L для регенерации костной ткани после удаления"
                    priceFour="От 5000₽"
                    paragraphFive="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (костно-пластический материал Bio-Oss 0,5 гр.)"
                    priceFive="От 24000₽"
                    paragraphSix="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (мембраны Bio-Gide) 1 шт."
                    priceSix="От 30000₽"
                    paragraphSeven="Использование хирургического шаблона от 3 зубов"
                    priceSeven="От 15000₽"
                    paragraphEight="Использование хирургического шаблона от 4 зубов"
                    priceEight="От 24000₽"
                    paragraphNine="Переустановка импланта"
                    priceNine="От 7500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="reconstruction"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Реконструктивное лечение</h2>
                  <PriceTabLong
                    tabHeadign="Реконструктивное лечение"
                    paragraphOne="Инъекционное введение лекарственных препаратов в челюстно-лицевую область"
                    priceOne="От 380₽"
                    paragraphTwo="Аппликация лекарственного препарата на слизистую оболочку полости рта"
                    priceTwo="От 550₽"
                    paragraphThree="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом 'Vector Para Pro' в области 1 зуба/импланта)"
                    priceThree="От 8000₽"
                    paragraphFour="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом 'Vector Para Pro' 2 челюсти)"
                    priceFour="От 10000₽"
                    paragraphFive="Лазерная физиотерапия челюстно-лицевой области (1 процедура)"
                    priceFive="От 350₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="orthodontia"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Ортодонтия</h2>
                  <PriceTabLong
                    tabHeadign="Ортодонтическая коррекция с применением брекет-системы"
                    paragraphOne="I степени сложности"
                    priceOne="От 65000₽"
                    paragraphTwo="II степени сложности"
                    priceTwo="От 70000₽"
                    paragraphThree="III степени сложности"
                    priceThree="От 75000₽"
                    paragraphFour="Фиксация брекет-системы (одна челюсть)"
                    priceFour="От 80000₽"
                    paragraphFive="Фиксация эстетической брекет-системы (одна челюсть)"
                    priceFive="От 95000₽"
                    paragraphSix="Брекет-система металлическая безлигатурная"
                    priceSix="От 25000₽"
                    paragraphSeven="Брекет-система Damon Q"
                    priceSeven="От 30000₽"
                    paragraphEight="Брекет-система сапфировая, керамическая"
                    priceEight="От 32500₽"
                    paragraphNine="Брекет-система керамическая безлигатурная"
                    priceNine="От 35000₽"
                    paragraphTen="Фиксация одного брекета"
                    priceTen="От 2500₽"
                    paragraph11="Замена одного брекета"
                    price11="От 3000₽"
                    paragraph12="Снятие брекетов с 1 зубного ряда"
                    price12="От 5000₽"
                    paragraph13="Снятие 1 брекета"
                    price13="От 400₽"
                    paragraph14="Динамическое наблюдение при ортодонтическом лечении"
                    price14="От 3000₽"
                    paragraph15="Установка открывающей, закрывающей пружины"
                    price15="От 1000₽"
                    paragraph16="Установка чейна (1 звено)"
                    price16="От 130₽"
                    paragraph17="Установка лигатуры (1 шт.)"
                    price17="От 70₽"
                    paragraph18="Наложение длинной лигатуры"
                    price18="От 400₽"
                    paragraph19="Изгиб на дуге"
                    price19="От 200₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Ретенция"
                    paragraphOne="Несъемный ретейнер на 1 зубной ряд"
                    priceOne="От 12000₽"
                    paragraphTwo="Ретенционный съемный аппарат на 1 зубной ряд"
                    priceTwo="От 8000₽"
                    paragraphThree="Снятие ретейнера"
                    priceThree="От 5000₽"
                    paragraphFour="Починка несъемного ретейнера"
                    priceFour="От 2000₽"
                    paragraphFive="Изготовление ретенционной каппы"
                    priceFive="От 6500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Дополнительные приспособления"
                    paragraphOne="Активация ортодонтического винта"
                    priceOne="От 2500₽"
                    paragraphTwo="Лечение с помощью аппарата Марко-Росса"
                    priceTwo="От 29000₽"
                    paragraphThree="Аппарат для дистализации моляров"
                    priceThree="От 33000₽"
                    paragraphFour="Лечение с помощью небного бюгеля"
                    priceFour="От 4000₽"
                    paragraphFive="Межчелюстные тяги"
                    priceFive="От 500₽"
                    paragraphSix="Изготовление коронки ортодонтической"
                    priceSix="От 5000₽"
                    paragraphSeven="Изготовление кольца-петли ортодонтического"
                    priceSeven="От 9000₽"
                    paragraphEight="Повторная фиксация кольца-петли ортодонтического"
                    priceEight="От 2000₽"
                    paragraphNine="Снятие оттиска с одной челюсти альгинатными массами"
                    priceNine="От 500₽"
                    paragraphTen="Изготовление прикусного шаблона"
                    priceTen="От 500₽"
                    paragraph11="Антропометрические исследования (компьютерный анализ ТРГ головы)"
                    price11="От 2000₽"
                    paragraph12="Изготовление контрольной модели (из гипса)"
                    price12="От 500₽"
                    paragraph13="Прием (осмотр, наблюдение) врача-ортодонта первичный"
                    price13="От 1000₽"
                    paragraph14="Прием (осмотр, наблюдение) врача-ортодонта повторный"
                    price14="От 700₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="hygiene"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">Профилактика и гигиена</h2>
                  <PriceTabLong
                    tabHeadign="Профилактика и гигиена"
                    paragraphOne="Детская профессиональная гигиена (пастой+щеткой, полировка, покрытие 'Fluocal gel')"
                    priceOne="От 3700₽"
                    paragraphTwo="Глубокое фторирование эмали зуба Seal & Protect (1 ед.)"
                    priceTwo="От 300₽"
                    paragraphThree="Местное применение реминерализирующих препаратов (процедура)"
                    priceThree="От 500₽"
                    paragraphFour="Обучение гигиене полости рта и зубов индивидуально, подбор средств и предметов гигиены полости рта"
                    priceFour="От 400₽"
                    paragraphFive="Профессиональная гигиена полости рта и зубов (ультразвуковое удаление зубных отложений, AirFlow, полировка, покрытие зубов реминилизирующими препаратами)"
                    priceFive="От 6500₽"
                    paragraphSix="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (Лечение заболеваний пародонта аппаратом 'Vector Paro Pro' в области 1 зуба/импланта)"
                    priceSix="От 8000₽"
                    paragraphSeven="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (Лечение заболеваний пародонта аппаратом 'Vector Paro Pro' 2 челюсти)"
                    priceSeven="От 10000₽"
                    paragraphEight="Лазерная физиотерапия челюстно-лицевой области (1 процедура)"
                    priceEight="От 350₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="whitening"
                  style={{
                    marginTop: "clamp(32px,3.33312vw,128px)",
                    marginBottom: "clamp(32px,3.33312vw,128px)",
                  }}
                >
                  <h2 className="heading">Отбеливание</h2>
                  <PriceTabLong
                    tabHeadign="Отбеливание"
                    paragraphOne="Профессиональное отбеливание зубов клиническое - система 'ZOOM'"
                    priceOne="От 30000₽"
                    paragraphTwo="Капповое домашнее отбеливание (включая стоимость изготовления капп и набор отбеливающего геля) (2 челюсти)"
                    priceTwo="От 9900₽"
                    paragraphThree="Профессиональное отбеливание зубов клиническое - система 'Amazing White'"
                    priceThree="От 11000₽"
                    paragraphFour="Внутриканальное отбеливание (первый сеанс)"
                    priceFour="От 1900₽"
                    paragraphFive="Внутриканальное отбеливание (последующий сеанс)"
                    priceFive="От 1000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
              </div>
            </div>
          </div>
          <div className="pc-content-c">
            <main
              className="main-content"
              style={{ width: "71.82291666666667%" }}
            >
              <Header
                isMenuPcOpen={isMenuPcOpen}
                openModal={openModal}
                togglePcMenu={togglePcMenu}
              ></Header>
              <div className="upper-content">
                <div className="bread-dots-container">
                  <Link className="link" to="/">
                    Главная
                  </Link>
                  <div className="bread-dot"></div>
                  <Link className="link-prices" to="/prices">
                    Цены
                  </Link>
                </div>
                <div className="heading-container">
                  <h1 className="heading">Цены</h1>
                </div>
                <div className="divider-container">
                  <div className="divider"></div>
                  <div className="row-container">
                    <span className="text">Услуги</span>
                    <span className="text">Направления</span>
                  </div>
                </div>
              </div>
              <div className="services-content">
                <div className="services-list">
                  <ScrollLink
                    to="orthopedia-pc"
                    smooth={true}
                    className="button"
                  >
                    Ортопедия
                  </ScrollLink>
                  <ScrollLink
                    to="consultations-pc"
                    smooth={true}
                    className="button"
                  >
                    Консультация
                  </ScrollLink>
                  <ScrollLink to="xray-pc" smooth={true} className="button">
                    Рентгенология
                  </ScrollLink>
                  <ScrollLink
                    to="diagnostic-pc"
                    smooth={true}
                    className="button"
                  >
                    Исследования и диагностика
                  </ScrollLink>
                  <ScrollLink
                    to="anasthetics-pc"
                    smooth={true}
                    className="button"
                  >
                    Анестезия
                  </ScrollLink>
                  <ScrollLink to="therapy-pc" smooth={true} className="button">
                    Терапия
                  </ScrollLink>
                  <ScrollLink
                    to="restavration-pc"
                    smooth={true}
                    className="button"
                  >
                    Реставрации
                  </ScrollLink>
                  <ScrollLink to="surgery-pc" smooth={true} className="button">
                    Хирургия
                  </ScrollLink>
                  <ScrollLink
                    to="implantology-pc"
                    smooth={true}
                    className="button"
                  >
                    Имплантология
                  </ScrollLink>
                  <ScrollLink
                    to="reconstruction-pc"
                    smooth={true}
                    className="button"
                  >
                    Реконструктивное лечение
                  </ScrollLink>
                  <ScrollLink
                    to="orthodontia-pc"
                    smooth={true}
                    className="button"
                  >
                    Ортодонтия
                  </ScrollLink>
                  <ScrollLink to="hygiene-pc" smooth={true} className="button">
                    Профилактика и гигиена
                  </ScrollLink>
                  <ScrollLink
                    to="whitening-pc"
                    smooth={true}
                    className="button"
                  >
                    Отбеливание
                  </ScrollLink>
                </div>
                <div className="cards-list">
                  <div className="" id="orthopedia-pc">
                    <h2 className="heading">Ортопедия</h2>
                    <PriceTabLong
                      tabHeadign="Ортопедия"
                      paragraphOne="Повторная фиксация на постоянный цемент несъемных ортопедических конструкций"
                      priceOne="От 1500₽"
                      paragraphTwo="Фиксация на RELYX Luting несъемных ортопедических конструкций"
                      priceTwo="От 3500₽"
                      paragraphThree="Фиксация несъемных ортопедических конструкций на временный цемент Temp bond"
                      priceThree="От 1000₽"
                      paragraphFour="Снятие несъемной ортопедической конструкции (1 единица)"
                      priceFour="От 1500₽"
                      paragraphFive="Удаление вкладки"
                      priceFive="От 4000₽"
                      paragraphSix="Коррекция протеза, изготовленного в другой клинике"
                      priceSix="От 1500₽"
                      paragraphSeven="Починка (перебазировка) съемного протеза лабораторным методом"
                      priceSeven="От 5500₽"
                      paragraphEight="Приварка 1 кламмера"
                      priceEight="От 5500₽"
                      paragraphNine="Приварка 1 зуба"
                      priceNine="От 5500₽"
                      paragraphTen="Замена матрицы на бюгельном протезе (1 протез)"
                      priceTen="От 5500₽"
                      paragraph11="Изготовление каппы для депрограмирования мышц"
                      price11="От 5000₽"
                      paragraph12="Коррекция съемного протеза изготовленного в другой клинике"
                      price12="От 1500₽"
                      paragraph13="Каппа для стабилизации прикуса (Ортотик)"
                      price13="От 20000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Оттиски"
                      paragraphOne="Снятие оттиска с одной челюсти альгинатными массами"
                      priceOne="От 2000₽"
                      paragraphTwo="Снятие оттиска с одной челюсти массой из С-силикона"
                      priceTwo="От 2500₽"
                      paragraphThree="Снятие оттиска с одной челюсти массой из А-силикона"
                      priceThree="От 3500₽"
                      paragraphFour="Прикусной блок"
                      priceFour="От 1500₽"
                      paragraphFive="Изготовление прикусного шаблона и индивидуальной ложки"
                      priceFive="От 4500₽"
                      paragraphSix="Снятие оттиска с одной челюсти для изготовления силиконового ключа"
                      priceSix="От 2500₽"
                      paragraphSeven="Снятие оттиска с одной челюсти с имплантов с использованием индивидуальной ложки"
                      priceSeven="От 4000₽"
                      paragraphEight="Wax up восковое моделирование"
                      priceEight="От 2500₽"
                      paragraphNine="Цифровой оттиск (сканирование верхней и нижней челюсти, прикус)"
                      priceNine="От 8000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Вкладки"
                      paragraphOne="Восстановление зуба с использованием керамической вкладки (накладки) Emax"
                      priceOne="От 30000₽"
                      paragraphTwo="Восстановление зуба с использованием цельнолитой культевой вкладки"
                      priceTwo="От 12500₽"
                      paragraphThree="Восстановление зуба с использованием культевой вкладки из диоксида циркония"
                      priceThree="От 18000₽"
                      paragraphFour="Восстановление зуба с использованием золотой вкладки (без стоимости золота)"
                      priceFour="От 20000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Коронки"
                      paragraphOne="Восстановление зуба коронкой временной прямым методом"
                      priceOne="От 3500₽"
                      paragraphTwo="Восстановление зуба коронкой временной лабораторным способом"
                      priceTwo="От 6000₽"
                      paragraphThree="Восстановление зуба коронкой металлокерамической класса `стандарт`"
                      priceThree="От 18500₽"
                      paragraphFour="Восстановление зуба коронкой металлокерамической класса `премиум`"
                      priceFour="От 27000₽"
                      paragraphFive="Восстановление зуба коронкой металлокерамической на драгоценном сплаве (без учета стоимости драгоценного металла)"
                      priceFive="От 27000₽"
                      paragraphSix="Восстановление зуба коронкой из диоксида циркония класса `стандарт`"
                      priceSix="От 27000₽"
                      paragraphSeven="Восстановление зуба коронкой из диоксида циркония класса `премиум`"
                      priceSeven="От 39000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Восстановление зуба виниром E-max"
                      paragraphOne="Восстановление зуба безметалловой конструкцией (E-max, диоксид циркония) - винир, винир 360, накладка, класса `стандарт`"
                      priceOne="От 30000₽"
                      paragraphTwo="Восстановление зуба безметалловой конструкцией (E-max, диоксид циркония) - винир, винир 360, накладка, класса `премиум`"
                      priceTwo="От 40000₽"
                      paragraphThree="Диагностика прикуса при помощи миостимулятора `МИСТ ТЕНС`"
                      priceThree="От 10000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Съемные, Бюгельные Протезы"
                      paragraphOne="Протезирование зубов полным съемным пластиночным протезом (Японский гарнитур, пластмасса)"
                      priceOne="От 45000₽"
                      paragraphTwo="Протезирование частичным съемным пластиночным протезом для временного замещения отсутствующих 1-2 зубов (иммедиат-протез)"
                      priceTwo="От 12000₽"
                      paragraphThree="Протезирование частичным съемным пластиночным протезом (Японский гарнитур, пластмасса)"
                      priceThree="От 45000₽"
                      paragraphFour="Протезирование съемным бюгельным протезом кламерным"
                      priceFour="От 50000₽"
                      paragraphFive="Протезирование съемным бюгельным протезом шинирующим"
                      priceFive="От 55000₽"
                      paragraphSix="Протезирование съемным бюгельным протезом с замковыми креплениями Bredent"
                      priceSix="От 65000₽"
                      paragraphSeven="Протезирование съемным бюгельным протезом Квадротти"
                      priceSeven="От 55000₽"
                      paragraphEight="Изготовление ночной каппы при бруксизме"
                      priceEight="От 9000₽"
                      paragraphNine="Изготовление каппы для отбеливания (реминерализации)"
                      priceNine="От 5500₽"
                      paragraphTen="Изготовление спортивной каппы"
                      priceTen="От 10000₽"
                      paragraph11="Определение центрального соотношения челюстей и центральной окклюзии"
                      price11="От 25000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="consultations-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Консультация</h2>
                    <PriceTabLong
                      tabHeadign="Консультация"
                      paragraphOne="Первичная консультация с компьютерной томографией и составлением плана лечения"
                      priceOne="От 5500₽"
                      paragraphTwo="Прием (осмотр, консультация) врача-стоматолога первичный"
                      priceTwo="От 1000₽"
                      paragraphThree="Диспансерный прием (осмотр, консультация) врача-стоматолога"
                      priceThree="От 500₽"
                      paragraphFour="Профилактический прием (осмотр, консультация) врача-стоматолога"
                      priceFour="0₽"
                      paragraphFive="Адаптационный прием"
                      priceFive="От 2500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="xray-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Рентгенология</h2>
                    <PriceTabLong
                      tabHeadign="Рентгенология"
                      paragraphOne="Радиовизиография"
                      priceOne="От 500₽"
                      paragraphTwo="Запись на электронный носитель USB"
                      priceTwo="От 500₽"
                      paragraphThree="Повторный диагностический снимок"
                      priceThree="0₽"
                      paragraphFour="Компьютерная томография верхней и нижней челюсти и придаточные пазухи (за исключением лобной пазухи)"
                      priceFour="От 4100₽"
                      paragraphFive="Компьютерная томография 5*5 область 2-3 радиом стоящих зубов"
                      priceFive="От 1500₽"
                      paragraphSix="Компьютерная томография 6*9 область одной челюсти"
                      priceSix="От 2500₽"
                      paragraphSeven="Компьютерная томография ВНЧС (височно-нижнечелюстного сустава)"
                      priceSeven="От 1500₽"
                      paragraphEight="ОПТГ (ортопантомограмма)"
                      priceEight="От 1500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="diagnostic-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Исследования и диагностика</h2>
                    <PriceTabLong
                      tabHeadign="Исследования и диагностика"
                      paragraphOne="Исследование на диагностических моделях челюстей"
                      priceOne="От 500₽"
                      paragraphTwo="Витальное окрашивание твердых тканей зуба"
                      priceTwo="От 380₽"
                      paragraphThree="Исследование кариозных полостей с использованием стоматологического зонда"
                      priceThree="От 70₽"
                      paragraphFour="Термодиагностика зуба"
                      priceFour="От 50₽"
                      paragraphFive="Определение прикуса"
                      priceFive="От 500₽"
                      paragraphSix="Определение вида смыкания зубных рядов с помощью лицевой дуги"
                      priceSix="От 1500₽"
                      paragraphSeven="Перкуссия зубов"
                      priceSeven="От 40₽"
                      paragraphEight="Электроодонтометрия зуба (ЭОД)"
                      priceEight="От 120₽"
                      paragraphNine="Определение индексов гигиены полости рта"
                      priceNine="От 250₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="anasthetics-pc"
                    style={{
                      marginTop: "clamp(32px,3.33312vw,128px)",
                      width: "100%",
                    }}
                  >
                    <h2 className="heading">Анестезия</h2>
                    <PriceTabLong
                      tabHeadign="Анестезия"
                      paragraphOne="Проводниковая анестезия"
                      priceOne="От 1000₽"
                      paragraphTwo="Аппликационная анестезия"
                      priceTwo="От 300₽"
                      paragraphThree="Инфильтрационная анестезия"
                      priceThree="От 800₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="therapy-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Терапия</h2>
                    <PriceTabLong
                      tabHeadign="Восстановлени зуба пломбой"
                      paragraphOne="Применение системы Коффердам, Роббердам"
                      priceOne="От 500₽"
                      paragraphTwo="Применение системы OptraGate"
                      priceTwo="От 750₽"
                      paragraphThree="Микроабразия эмали (1 зуб)"
                      priceThree="От 1500₽"
                      paragraphFour="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria"
                      priceFour="От 3900₽"
                      paragraphFive="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia"
                      priceFive="От 3500₽"
                      paragraphSix="Восстановление зуба виниром, полукоронкой из фотополимерного материала прямым методом"
                      priceSix="От 7500₽"
                      paragraphSeven="Избирательное пришлифовывание твердых тканей зуба"
                      priceSeven="От 250₽"
                      paragraphEight="Восстановление зуба пломбировочным материалом с использованием титановых штифтов"
                      priceEight="От 5500₽"
                      paragraphNine="Восстановление зуба пломбировочным материалом с использованием стекловолоконных штифтов"
                      priceNine="От 7000₽"
                      paragraphTen="Снятие временной пломбы"
                      priceTen="От 350₽"
                      paragraph11="Трепанация (препарирование) зуба"
                      price11="От 600₽"
                      paragraph12="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia"
                      price12="От 4000₽"
                      paragraph13="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria"
                      price13="От 4300₽"
                      paragraph14="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia"
                      price14="От 4400₽"
                      paragraph15="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Asteria"
                      price15="От 4900₽"
                      paragraph16="Восстановление зуба пломбой с использованием материалов из фотополимеров Filtek Flow"
                      price16="От 1900₽"
                      paragraph17="Наложение лечебной или изолирующей прокладки"
                      price17="От 550₽"
                      paragraph18="Полировка пломбы"
                      price18="От 500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Лечение осложнений кариеса"
                      paragraphOne="Наложение девитализирующей пасты"
                      priceOne="От 500₽"
                      paragraphTwo="Пломбирование корневого канала зуба под контролем апекс-локатора (процедура)"
                      priceTwo="От 350₽"
                      paragraphThree="Наложение временной пломбы"
                      priceThree="От 600₽"
                      paragraphFour="Пломбирование корневого канала зуба пастой (1 канал)"
                      priceFour="От 300₽"
                      paragraphFive="Пломбирование корневого канала зуба пастой с гуттаперчевыми штифтами (1 канал)"
                      priceFive="От 900₽"
                      paragraphSix="Закрытие перфорации стенки корневого канала зуба"
                      priceSix="От 1500₽"
                      paragraphSeven="Инструментальная и медикаментозная обработка хорошо проходимого корневого канала (1 канал)"
                      priceSeven="От 800₽"
                      paragraphEight="Инструментальная и медикаментозная обработка плохо проходимого корневого канала (1 канал)"
                      priceEight="От 1100₽"
                      paragraphNine="Фиксация внутриканального штифта"
                      priceNine="От 1500₽"
                      paragraphTen="Удаление внутриканального штифта"
                      priceTen="От 2100₽"
                      paragraph11="Временное пломбирование лекарственным препаратом корневого канала (1 канал)"
                      price11="От 700₽"
                      paragraph12="Распломбировка корневого канала ранее леченного пастой (1 канал)"
                      price12="От 600₽"
                      paragraph13="Распломбировка корневого канала ранее леченного фосфат-цементом/резорцин-формалиновым методом (1 канал)"
                      price13="От 1300₽"
                      paragraph14="Депофорез корневого канала зуба"
                      price14="От 300₽"
                      paragraph15="Ультразвуковое расширение корневого канала зуба (1 канал)"
                      price15="От 300₽"
                      paragraph16="Механическая и медикаментозная обработка корневого канала"
                      price16="От 1500₽"
                      paragraph17="Пломбировка корневого канала гуттаперчевым штифтом+паста"
                      price17="От 1500₽"
                      paragraph18="Временная пломбировка корневого канала Metapex/Colasept"
                      price18="От 500₽"
                      paragraph19="Наложение лечебной или изолирующей прокладки"
                      price19="От 500₽"
                      paragraph20="Полировка пломбы"
                      price20="От 500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Эндодоническое лечение"
                      paragraphOne="Эндодонтическое лечение одноканального зуба"
                      priceOne="От 4000₽"
                      paragraphTwo="Эндодонтическое лечение двухканального зуба"
                      priceTwo="От 8000₽"
                      paragraphThree="Эндодонтическое лечение трехканального зуба"
                      priceThree="От 12000₽"
                      paragraphFour="Эндодонтическое лечение четырехканального зуба"
                      priceFour="От 16000₽"
                      paragraphFive="Эндодонтическое лечение пятиканального зуба"
                      priceFive="От 20000₽"
                      paragraphSix="Эндодонтическое лечение одноканального зуба (периодонтит)"
                      priceSix="От 6000₽"
                      paragraphSeven="Эндодонтическое лечение двухканального зуба (периодонтит)"
                      priceSeven="От 10000₽"
                      paragraphEight="Эндодонтическое лечение трехканального зуба (периодонтит)"
                      priceEight="От 14000₽"
                      paragraphNine="Эндодонтическое лечение четырехканального зуба (периодонтит)"
                      priceNine="От 18000₽"
                      paragraphTen="Эндодонтическое лечение пятиканального зуба (периодонтит)"
                      priceTen="От 22000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="restavration-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Реставрации</h2>
                    <PriceTabLong
                      tabHeadign="Реставрации"
                      paragraphOne="Реставрация 1 степени сложности"
                      priceOne="От 4000₽"
                      paragraphTwo="Реставрация 2 степени сложности"
                      priceTwo="От 4900₽"
                      paragraphThree="Реставрация 3 степени сложности"
                      priceThree="От 5500₽"
                      paragraphFour="Художественная реставрация зуба"
                      priceFour="От 7500₽"
                      paragraphFive="Лечение начального кариеса системой Icon"
                      priceFive="От 6500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="surgery-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Хирургия</h2>
                    <PriceTabLong
                      tabHeadign="Хирургия"
                      paragraphOne="Аутотрансплантация зуба"
                      priceOne="От 20000₽"
                      paragraphTwo="Удаление временного зуба I степени сложности"
                      priceTwo="От 1200₽"
                      paragraphThree="Удаление временного зуба II степени сложности"
                      priceThree="От 1800₽"
                      paragraphFour="Удаление временного зуба с сохраненными корнями"
                      priceFour="От 2500₽"
                      paragraphFive="Удаление постоянного зуба простое"
                      priceFive="От 2500₽"
                      paragraphSix="Удаление постоянного зуба I степени сложности"
                      priceSix="От 4000₽"
                      paragraphSeven="Удаление постоянного зуба II степени сложности"
                      priceSeven="От 5500₽"
                      paragraphEight="Удаление постоянного зуба III степени сложности"
                      priceEight="От 6500₽"
                      paragraphNine="Удаление зуба сложное с разъединением корней"
                      priceNine="От 7500₽"
                      paragraphTen="Резекция верхушки корня (1 корень)"
                      priceTen="От 15000₽"
                      paragraph11="Вскрытие и дренирование одонтогенного абсцесса"
                      price11="От 1500₽"
                      paragraph12="Отсроченный кюретаж лунки удаленного зуба"
                      price12="От 1500₽"
                      paragraph13="Цистотомия, цистэктомия"
                      price13="От 8000₽"
                      paragraph14="Временное шинирование при заболеваниях пародонта (1 единица)"
                      price14="От 1500₽"
                      paragraph15="Операция удаления ретинированного, дистопированного или сверхкомплектного зуба"
                      price15="От 13000₽"
                      paragraph16="Удаление имплантата"
                      price16="От 7500₽"
                      paragraph17="Пластика уздечки языка"
                      price17="От 3500₽"
                      paragraph18="Пластика уздечки губы"
                      price18="От 3500₽"
                      paragraph19="Вестибулопластика"
                      price19="От 10000₽"
                      paragraph20="Лечение перикоронита (промывание, рассечение и/или иссечение капюшона)"
                      price20="От 2500₽"
                      paragraph21="Остановка луночного кровотечения с использованием гемостатических материалов"
                      price21="От 700₽"
                      paragraph22="Закрытие соустья с гайморовой пазухой"
                      price22="От 5500₽"
                      paragraph23="Наложение шва на слизистую оболочку рта"
                      price23="От 500₽"
                      paragraph24="Открытый кюретаж при заболеваниях пародонта в области 1 зуба"
                      price24="От 2500₽"
                      paragraph25="Закрытый кюретаж при заболеваниях пародонта в области 1 зуба"
                      price25="От 2000₽"
                      paragraph26="Пластика мягких тканей в области зуба или имплантата"
                      price26="От 10000₽"
                      paragraph27="Снятие швов"
                      price27="От 1000₽"
                      paragraph28="Антисептическая обработка патологических карманов"
                      price28="От 1200₽"
                      paragraph29="Удаление экзостоза в области 1 зуба"
                      price29="От 6500₽"
                      paragraph30="Хирургическое удлинение в области 1 зуба"
                      price30="От 2500₽"
                      paragraph31="Закрытие рецессии в обл. 1-3 рядом стоящих зубов"
                      price31="От 20000₽"
                      paragraph32="Удаление фрагмента зуба"
                      price32="От 20000₽"
                      paragraph33="Внутрилигаментная инъекция"
                      price33="От 500₽"
                      paragraph34="Электрокоагуляция с использованием Emdogain 0,7 ml (1 ед.проц.)"
                      price34="От 7500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="implantology-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Имплантология</h2>
                    <PriceTabLong
                      tabHeadign="Протезирование на имплантах"
                      paragraphOne="Протезирование на имплантах"
                      priceOne="От 8500₽"
                      paragraphTwo="Протезирование зуба с использованием имплантата временной коронкой + временный абатмент"
                      priceTwo="От 4000₽"
                      paragraphThree="Единица промежуточной части временного мостовидного протеза с опорой на имплантаты"
                      priceThree="От 4500₽"
                      paragraphFour="Протезирование зуба с использованием имплантата коронкой металлокерамической класса 'Стандарт' (транскоклюзионная фиксация)"
                      priceFour="От 25000₽"
                      paragraphFive="Протезирование зуба с использованием имплантата коронкой металлокерамической класса 'Стандарт' (транскоклюзионная фиксация) на индивидуальном абатменте"
                      priceFive="От 31000₽"
                      paragraphSix="Единица промежуточной части мостовидного протеза класса 'Стандарт' (металлокерамика) с опорой на имплантаты"
                      priceSix="От 17000₽"
                      paragraphSeven="Единица промежуточной части мостовидного протеза класса 'Премиум' (металлокерамика) с опорой на имплантаты"
                      priceSeven="От 21000₽"
                      paragraphEight="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса 'Стандарт' (транскоклюзионная фиксация)"
                      priceEight="От 33000₽"
                      paragraphNine="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса 'Премиум' (транскоклюзионная фиксация) на индивидуальном абатменте"
                      priceNine="От 37500₽"
                      paragraphTen="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса 'Стандарт' (цементная фиксация) на индивидуальном абатменте"
                      priceTen="От 39000₽"
                      paragraph11="Единица промежуточной части мостовидного протеза из диоксида циркония класса 'Стандарт' с опорой на имплантаты"
                      price11="От 22000₽"
                      paragraph12="Единица промежуточной части мостовидного протеза из диоксида циркония класса 'Премиум' с опорой на имплантаты"
                      price12="От 26000₽"
                      paragraph13="Протезирование зуба с использованием имплантата коронкой E-max на титановом основании класса 'Премиум' (транскоклюзионная фиксация)"
                      price13="От 30000₽"
                      paragraph14="Индивидуальный абатмент из диоксида циркония"
                      price14="От 15000₽"
                      paragraph15="Протезирование полным условно-съемным протезом с опорой на имплантаты (балочная конструкция) мультиюниты оплачиваются отдельно"
                      price15="От 15000₽"
                      paragraph16="Протезирование полным условно-съемным протезом с опорой на имплантатах (балочная конструкция) мультиюниты оплачиваются отдельно"
                      price16="От 185000₽"
                      paragraph17="Протезирование полным несъемным протезом с опорой на имплантатах на мультиюнитах (мультиюниты оплачиваются отдельно)"
                      price17="От 185000₽"
                      paragraph18="Стоимость мультиюнита (1 единица)"
                      price18="От 20000₽"
                      paragraph19="Протезирование полным съемным протезом на имплантатах с замковым креплением (люкаторная система замков)"
                      price19="От 120000₽"
                      paragraph20="Протезирование полным съемным протезом на имплантатах на аттачментах"
                      price20="От 95000₽"
                      paragraph21="Временный несъемный протез на имлантатах"
                      price21="От 80000₽"
                      paragraph22="Замена винта трансокклюзионной фиксации"
                      price22=" От 500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Внутрикостная дентальная имплантация системой"
                      paragraphOne="Имплантация системой Dentium SuperLine (Ю.Корея)"
                      priceOne="От 39000₽"
                      paragraphTwo="Имплантация системой Nobel Biocare (Швейцария)"
                      priceTwo="От 70000₽"
                      paragraphThree="Имплантация системой NeoDent GM (Бразилия)"
                      priceThree="От 39000₽"
                      paragraphFour="Миниимплант (ортовинт)"
                      priceFour="От 12000₽"
                      paragraphFive="Замена винта трансокклюзионной фиксации"
                      priceFive="От 500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Формирователь десны"
                      paragraphOne="Установка формирователя десны Dentium SuperLine"
                      priceOne="От 7500₽"
                      paragraphTwo="Установка формирователя десны Nobel Biocare"
                      priceTwo="От 9500₽"
                      paragraphThree="Установка формирователя десны NeoDent GM"
                      priceThree="От 7500₽"
                      paragraphFour="Установка формирователя десны"
                      priceFour="От 7500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Синус-лифтинг"
                      paragraphOne="Синус-лифтинг (без учета стоимости остеопластических материалов)-закрытый"
                      priceOne="От 15000₽"
                      paragraphTwo="Синус-лифтинг (без учета стоимости остеопластических материалов)-открытый"
                      priceTwo="От 40000₽"
                      paragraphThree="Направленная костная регенерация (HKP) титановой сеткой"
                      priceThree="От 25000₽"
                      paragraphFour="Подсыпка КоллапАн-L для регенерации костной ткани после удаления"
                      priceFour="От 5000₽"
                      paragraphFive="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (костно-пластический материал Bio-Oss 0,5 гр.)"
                      priceFive="От 24000₽"
                      paragraphSix="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (мембраны Bio-Gide) 1 шт."
                      priceSix="От 30000₽"
                      paragraphSeven="Использование хирургического шаблона от 3 зубов"
                      priceSeven="От 15000₽"
                      paragraphEight="Использование хирургического шаблона от 4 зубов"
                      priceEight="От 24000₽"
                      paragraphNine="Переустановка импланта"
                      priceNine="От 7500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="reconstruction-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Реконструктивное лечение</h2>
                    <PriceTabLong
                      tabHeadign="Реконструктивное лечение"
                      paragraphOne="Инъекционное введение лекарственных препаратов в челюстно-лицевую область"
                      priceOne="От 380₽"
                      paragraphTwo="Аппликация лекарственного препарата на слизистую оболочку полости рта"
                      priceTwo="От 550₽"
                      paragraphThree="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом 'Vector Para Pro' в области 1 зуба/импланта)"
                      priceThree="От 8000₽"
                      paragraphFour="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом 'Vector Para Pro' 2 челюсти)"
                      priceFour="От 10000₽"
                      paragraphFive="Лазерная физиотерапия челюстно-лицевой области (1 процедура)"
                      priceFive="От 350₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="orthodontia-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Ортодонтия</h2>
                    <PriceTabLong
                      tabHeadign="Ортодонтическая коррекция с применением брекет-системы"
                      paragraphOne="I степени сложности"
                      priceOne="От 65000₽"
                      paragraphTwo="II степени сложности"
                      priceTwo="От 70000₽"
                      paragraphThree="III степени сложности"
                      priceThree="От 75000₽"
                      paragraphFour="Фиксация брекет-системы (одна челюсть)"
                      priceFour="От 80000₽"
                      paragraphFive="Фиксация эстетической брекет-системы (одна челюсть)"
                      priceFive="От 95000₽"
                      paragraphSix="Брекет-система металлическая безлигатурная"
                      priceSix="От 25000₽"
                      paragraphSeven="Брекет-система Damon Q"
                      priceSeven="От 30000₽"
                      paragraphEight="Брекет-система сапфировая, керамическая"
                      priceEight="От 32500₽"
                      paragraphNine="Брекет-система керамическая безлигатурная"
                      priceNine="От 35000₽"
                      paragraphTen="Фиксация одного брекета"
                      priceTen="От 2500₽"
                      paragraph11="Замена одного брекета"
                      price11="От 3000₽"
                      paragraph12="Снятие брекетов с 1 зубного ряда"
                      price12="От 5000₽"
                      paragraph13="Снятие 1 брекета"
                      price13="От 400₽"
                      paragraph14="Динамическое наблюдение при ортодонтическом лечении"
                      price14="От 3000₽"
                      paragraph15="Установка открывающей, закрывающей пружины"
                      price15="От 1000₽"
                      paragraph16="Установка чейна (1 звено)"
                      price16="От 130₽"
                      paragraph17="Установка лигатуры (1 шт.)"
                      price17="От 70₽"
                      paragraph18="Наложение длинной лигатуры"
                      price18="От 400₽"
                      paragraph19="Изгиб на дуге"
                      price19="От 200₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Ретенция"
                      paragraphOne="Несъемный ретейнер на 1 зубной ряд"
                      priceOne="От 12000₽"
                      paragraphTwo="Ретенционный съемный аппарат на 1 зубной ряд"
                      priceTwo="От 8000₽"
                      paragraphThree="Снятие ретейнера"
                      priceThree="От 5000₽"
                      paragraphFour="Починка несъемного ретейнера"
                      priceFour="От 2000₽"
                      paragraphFive="Изготовление ретенционной каппы"
                      priceFive="От 6500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Дополнительные приспособления"
                      paragraphOne="Активация ортодонтического винта"
                      priceOne="От 2500₽"
                      paragraphTwo="Лечение с помощью аппарата Марко-Росса"
                      priceTwo="От 29000₽"
                      paragraphThree="Аппарат для дистализации моляров"
                      priceThree="От 33000₽"
                      paragraphFour="Лечение с помощью небного бюгеля"
                      priceFour="От 4000₽"
                      paragraphFive="Межчелюстные тяги"
                      priceFive="От 500₽"
                      paragraphSix="Изготовление коронки ортодонтической"
                      priceSix="От 5000₽"
                      paragraphSeven="Изготовление кольца-петли ортодонтического"
                      priceSeven="От 9000₽"
                      paragraphEight="Повторная фиксация кольца-петли ортодонтического"
                      priceEight="От 2000₽"
                      paragraphNine="Снятие оттиска с одной челюсти альгинатными массами"
                      priceNine="От 500₽"
                      paragraphTen="Изготовление прикусного шаблона"
                      priceTen="От 500₽"
                      paragraph11="Антропометрические исследования (компьютерный анализ ТРГ головы)"
                      price11="От 2000₽"
                      paragraph12="Изготовление контрольной модели (из гипса)"
                      price12="От 500₽"
                      paragraph13="Прием (осмотр, наблюдение) врача-ортодонта первичный"
                      price13="От 1000₽"
                      paragraph14="Прием (осмотр, наблюдение) врача-ортодонта повторный"
                      price14="От 700₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="hygiene-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">Профилактика и гигиена</h2>
                    <PriceTabLong
                      tabHeadign="Профилактика и гигиена"
                      paragraphOne="Детская профессиональная гигиена (пастой+щеткой, полировка, покрытие 'Fluocal gel')"
                      priceOne="От 3700₽"
                      paragraphTwo="Глубокое фторирование эмали зуба Seal & Protect (1 ед.)"
                      priceTwo="От 300₽"
                      paragraphThree="Местное применение реминерализирующих препаратов (процедура)"
                      priceThree="От 500₽"
                      paragraphFour="Обучение гигиене полости рта и зубов индивидуально, подбор средств и предметов гигиены полости рта"
                      priceFour="От 400₽"
                      paragraphFive="Профессиональная гигиена полости рта и зубов (ультразвуковое удаление зубных отложений, AirFlow, полировка, покрытие зубов реминилизирующими препаратами)"
                      priceFive="От 6500₽"
                      paragraphSix="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (Лечение заболеваний пародонта аппаратом 'Vector Paro Pro' в области 1 зуба/импланта)"
                      priceSix="От 8000₽"
                      paragraphSeven="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (Лечение заболеваний пародонта аппаратом 'Vector Paro Pro' 2 челюсти)"
                      priceSeven="От 10000₽"
                      paragraphEight="Лазерная физиотерапия челюстно-лицевой области (1 процедура)"
                      priceEight="От 350₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="whitening-pc"
                    style={{
                      marginTop: "clamp(32px,3.33312vw,128px)",
                      marginBottom: "clamp(32px,3.33312vw,128px)",
                    }}
                  >
                    <h2 className="heading">Отбеливание</h2>
                    <PriceTabLong
                      tabHeadign="Отбеливание"
                      paragraphOne="Профессиональное отбеливание зубов клиническое - система 'ZOOM'"
                      priceOne="От 30000₽"
                      paragraphTwo="Капповое домашнее отбеливание (включая стоимость изготовления капп и набор отбеливающего геля) (2 челюсти)"
                      priceTwo="От 9900₽"
                      paragraphThree="Профессиональное отбеливание зубов клиническое - система 'Amazing White'"
                      priceThree="От 11000₽"
                      paragraphFour="Внутриканальное отбеливание (первый сеанс)"
                      priceFour="От 1900₽"
                      paragraphFive="Внутриканальное отбеливание (последующий сеанс)"
                      priceFive="От 1000₽"
                      openModal={openModal}
                    />
                    <PriceTabLong
                      tabHeadign="Профилактика и гигиена"
                      paragraphOne="Профессиональное отбеливание зубов клиническое - система `ZOOM`"
                      priceOne="От 21500₽"
                      paragraphTwo="Капповое домашнее отбеливание (включая стоимость изготовления капп и набор отбеливающего геля) 2 челюсти"
                      priceTwo="От 9900₽"
                      paragraphThree="Профессиональное отбеливание зубов клиническое- система `Amazing White`"
                      priceThree="От 11000₽"
                      paragraphFour="Внутриканальное отбеливание (первый сеанс) "
                      priceFour="От 1900₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                </div>
              </div>
            </main>
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

export default PricesPage;
