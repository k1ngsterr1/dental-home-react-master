import emailjs from "@emailjs/browser";
import { keyframes } from "@emotion/react";
import { faClose, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { Reveal } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Popup from "reactjs-popup";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import "../prices/styles/prices_styles.css";

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
  const [bookDate, setBookDate] = useState("");
  const [bookTime, setBookTime] = useState("");
  const [visitGoal, setVisitGoal] = useState("");
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
                  <h2 className="heading">
                    <a
                      className="heading"
                      href="https://dental-home.ru/services/vinirs"
                    >
                      Ортопедия
                    </a>
                  </h2>
                  <PriceTabLong
                    tabHeadign="Ортопедия"
                    paragraphOne="Повторная фиксация на постоянный цемент несъемных ортопедических конструкций (ОРТ-A16.07.049) "
                    priceOne="От 1600₽"
                    paragraphTwo="Фиксация на RELYX Luting несъемных ортопедических конструкций (ОРТ-A16.07.049.001) "
                    priceTwo="От 3700₽"
                    paragraphThree="Фиксация несъемных ортопедических конструкций на временный цемент Temp bond (ОРТ-А16.07.050) "
                    priceThree="От 1000₽"
                    paragraphFour="Снятие несъемной ортопедической конструкции (1 единица) (ОРТ-А16.07.053) "
                    priceFour="От 1000₽"
                    paragraphFive="Удаление вкладки (ОРТ-А16.07.094) "
                    priceFive="От 4000₽"
                    paragraphSix="Коррекция протеза, изготовленного в другой клинике  (ОРТ-А23.07.002.001)"
                    priceSix="От 1500₽"
                    paragraphSeven="Починка (перебазировка) съемного протеза лабораторным методом (ОРТ-А23.07.002.034)"
                    priceSeven="От 5500₽"
                    paragraphEight="Приварка 1 кламмера (ОРТ-А23.07.002.035)"
                    priceEight="От 5500₽"
                    paragraphNine="Приварка 1 зуба (ОРТ-А23.07.002.036)"
                    priceNine="От 5500₽"
                    paragraphTen="Замена матрицы на бюгельном протезе (1 протез) (ОРТ-А23.07.002.036)"
                    priceTen="От 5500₽"
                    paragraph11="Изготовление каппы для депрограмирования мышц (ОРТ-А24)"
                    price11="От 5000₽"
                    paragraph12="Коррекция съемного протеза изготовленного в другой клинике (ОРТ-А26)"
                    price12="От 1500₽"
                    paragraph13="Каппа для стабилизации прикуса (Ортотик) (ОРТ-А27)"
                    price13="От 21000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Оттиски"
                    paragraphOne="Снятие оттиска с одной челюсти альгинатными массами (ОРТ-A02.07.010.001)"
                    priceOne="От 1000₽"
                    paragraphTwo="Снятие оттиска с одной челюсти массой из С-силикона (ОРТ-A02.07.010.002)"
                    priceTwo="От 1500₽"
                    paragraphThree="Снятие оттиска с одной челюсти массой из А-силикона (ОРТ-A02.07.010.003)"
                    priceThree="От 2000₽"
                    paragraphFour="Прикусной блок (ОРТ-A02.07.010.003)"
                    priceFour="От 1000₽"
                    paragraphFive="Изготовление прикусного шаблона и индивидуальной ложки (ОРТ-A02.07.010.005)"
                    priceFive="От 3500₽"
                    paragraphSix="Снятие оттиска с одной челюсти для изготовления силиконового ключа (ОРТ-A02.07.010.006)"
                    priceSix="От 1500₽"
                    paragraphSeven="Снятие оттиска с одной челюсти с имплантов с использованием индивидуальной ложки (ОРТ-A02.07.010.007)"
                    priceSeven="От 2500₽"
                    paragraphEight="Wax up восковое моделирование (ОРТ-A02.07.010.008)"
                    priceEight="От 2000₽"
                    paragraphNine="Цифровой оттиск (сканирование верхней и нижней челюсти, прикус) (ОРТ-А02.07.010.009)"
                    priceNine="От 5500₽"
                    paragraphTen="Замена матрицы на бюгельном протезе (1 протез)"
                    priceTen="От 5500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Вкладки"
                    paragraphOne="Восстановление зуба с использованием керамической вкладки (накладки) Emax (ОРТ-А16.07.003.001)"
                    priceOne="От 25000₽"
                    paragraphTwo="Восстановление зуба с использованием цельнолитой культевой вкладки (ОРТ-А16.07.033.001)"
                    priceTwo="От 7000₽"
                    paragraphThree="Восстановление зуба с использованием культевой вкладки из диоксида циркония (ОРТ-А16.07.033.003) "
                    priceThree="От 15000₽"
                    paragraphFour="Восстановление зуба с использованием золотой вкладки (без стоимости золота) (ОРТ-А16.07.033.004) "
                    priceFour="От 10000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Коронки"
                    paragraphOne="Восстановление зуба коронкой временной прямым методом (ОРТ-А16.07.004.001)"
                    priceOne="От 2000₽"
                    paragraphTwo="Восстановление зуба коронкой временной лабораторным способом (ОРТ-А16.07.004.002) "
                    priceTwo="От 3500₽"
                    paragraphThree="Восстановление зуба коронкой металлокерамической класса `стандарт` (ОРТ-А16.07.004.004)"
                    priceThree="От 12000₽"
                    paragraphFour="Восстановление зуба коронкой металлокерамической класса `премиум` (ОРТ-А16.07.004.005)"
                    priceFour="От 18000₽"
                    paragraphFive="Восстановление зуба коронкой металлокерамической на драгоценном сплаве (без учета стоимости драгоценного металла) (ОРТ-А16.07.004.008)"
                    priceFive="От 18500₽"
                    paragraphSix="Восстановление зуба коронкой из диоксида циркония класса `стандарт` (ОРТ-А16.07.004.009)"
                    priceSix="От 18000₽"
                    paragraphSeven="Восстановление зуба коронкой из диоксида циркония класса `премиум`  ( 	18,000.00 ₽
ОРТ-А16.07.004.010)"
                    priceSeven="От 27000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Восстановление зуба виниром E-max"
                    paragraphOne="Восстановление зуба виниром E-max класса `стандарт` (ОРТ--)"
                    priceOne="От 25000₽"
                    paragraphTwo="Восстановление зуба виниром E-max класса `премиум` (ОРТ--)"
                    priceTwo="От 35000₽"
                    paragraphThree="Диагностика прикуса при помощи миостимулятора `МИСТ ТЕНС` (ОРТ-1)"
                    priceThree="От 10000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Съемные, Бюгельные Протезы"
                    paragraphOne="Протезирование зубов полным съемным пластиночным протезом (Японский гарнитур, пластм) (ОРТ-A16.07.023.001)"
                    priceOne="От 47500₽"
                    paragraphTwo="Протезирование частичным съемным пластиночным протезом для временного замещения 
                      отсутствующих 1-3 зубов (иммедиат-протез) (ОРТ-A16.07.035.001)"
                    priceTwo="От 12600₽"
                    paragraphThree="Протезирование частичным съемным пластиночным протезом (Японский гарнитур, пластм) (ОРТ-A16.07.035.002)"
                    priceThree="От 47500₽"
                    paragraphFour="Протезирование съемным бюгельным протезом кламерным (ОРТ-A16.07.036.001)"
                    priceFour="От 52500₽"
                    paragraphFive="Протезирование съемным бюгельным протезом шинирующим (ОРТ-A16.07.036.002)"
                    priceFive="От 58000₽"
                    paragraphSix="Протезирование съемным бюгельным протезом с замковыми креплениями Bredent (ОРТ-A16.07.036.003) "
                    priceSix="От 68500₽"
                    paragraphSeven="Протезирование съемным бюгельным протезом Квадротти (ОРТ-A16.07.036.005)"
                    priceSeven="От 58000₽"
                    paragraphEight="Изготовление ночной каппы при бруксизме (ОРТ-A23.07.002.009) "
                    priceEight="От 9500₽"
                    paragraphNine="Изготовление каппы для отбеливания (реминерализации) (ОРТ-A23.07.002.009)"
                    priceNine="От 5800₽"
                    paragraphTen="Изготовление спортивной каппы (ОРТ-A23.07.002.043)"
                    priceTen="От 10500₽"
                    paragraph11="Определение центрального соотношения целюстей и центральной окклюзии (ОРТ-А23.07.002.044)"
                    price11="От 0₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="consultations"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">
                    <a href="	https://dental-home.ru/services/diagnostic">
                      Консультация
                    </a>
                  </h2>
                  <PriceTabLong
                    tabHeadign="Консультация"
                    paragraphOne="Прием (осмотр, консультация) врача-стоматолога первичный (В01:065.007)"
                    priceOne="От 1000₽"
                    paragraphTwo="Диспансерный прием (осмотр, консультация) врача-стоматолога (В04.065.005) "
                    priceTwo="От 500₽"
                    paragraphThree="Профилактический прием (осмотр, консультация) врача-стоматолога (В04.065.006)"
                    priceThree="От 0₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="xray"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">
                    {" "}
                    <a href="https://dental-home.ru/services/diagnostic">
                      Рентгенология
                    </a>
                  </h2>
                  <PriceTabLong
                    tabHeadign="Рентгенология"
                    paragraphOne="Радиовизиография (А06.07.012)"
                    priceOne="От 400₽"
                    paragraphTwo="Получение снимка на электронный адрес (А06.07.013.004) "
                    priceTwo="От 100₽"
                    paragraphThree="Запись на электронный носитель CD (А06.07.013.005)"
                    priceThree="От 300₽"
                    paragraphFour="Запись на электронный носитель USB (А06.07.013.006)"
                    priceFour="От 500₽"
                    paragraphFive="Повторный диагностический снимок (А06.07.013.007)"
                    priceFive="От 0₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="diagnostic"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">
                    <a href="https://dental-home.ru/services/diagnostic">
                      Исследования и диагностика
                    </a>
                  </h2>
                  <PriceTabLong
                    tabHeadign="Исследования и диагностика"
                    paragraphOne="Исследование на диагностических моделях челюстей (Исследование)"
                    priceOne="От 500₽"
                    paragraphTwo="Витальное окрашивание твердых тканей зуба (A12.07.001)"
                    priceTwo="От 380₽"
                    paragraphThree="Исследование кариозных полостей с использованием стоматологического зонда (А02.07.002)"
                    priceThree="От 70₽"
                    paragraphFour="Термодиагностика зуба (А02.07.005)"
                    priceFour="От 50₽"
                    paragraphFive="Определение прикуса (А02.07.006)"
                    priceFive="От 500₽"
                    paragraphSix="Определение вида смыкания зубных рядов с помощью лицевой дуги (А02.07.006.001)"
                    priceSix="От 1500₽"
                    paragraphSeven="Перкуссия зубов (А02.07.007)"
                    priceSeven="От 40₽"
                    paragraphEight="Электроодонтометрия зуба (ЭОД) (А05.07.001)"
                    priceEight="От 120₽"
                    paragraphNine="Определение индексов гигиены полости рта (А12.07.003)"
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
                    paragraphOne="Проводниковая анестезия (B01.003.004:002)"
                    priceOne="От 800₽"
                    paragraphTwo="Аппликационная анестезия (B01.003.004:004)"
                    priceTwo="От 150₽"
                    paragraphThree="Инфильтрационная анестезия (B01.003.004:005)"
                    priceThree="От 700₽"
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
                    paragraphOne="Применение системы Коффердам, Роббердам (ТР-А02.07.001.001) "
                    priceOne="От 750₽"
                    paragraphTwo="Применение системы OptraGate (ТР-А02.07.001.002) "
                    priceTwo="От 850₽"
                    paragraphThree="Микроабразия эмали (1 зуб) (ТР-А16.07.002)"
                    priceThree="От 1500₽"
                    paragraphFour="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria (ТР-А16.07.002.010.01)"
                    priceFour="От 4750₽"
                    paragraphFive="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia (ТР-А16.07.002:010)"
                    priceFive="От 5400₽"
                    paragraphSix="Восстановление зуба виниром, полукоронкой из фотополимерного материала прямым методом (ТР-А16.07.003.001)"
                    priceSix="От 7500₽"
                    paragraphSeven="Избирательное пришлифовывание твердых тканей зуба (ТР-А16.07.025)"
                    priceSeven="От 250₽"
                    paragraphEight="Восстановление зуба пломбировочным материалом с использованием титановых штифтов (ТР-А16.07.031.01)"
                    priceEight="От 5500₽"
                    paragraphNine="Восстановление зуба пломбировочным материалом с использованием стекловолоконных штифтов (ТР-А16.07.031.02)"
                    priceNine="От 7000₽"
                    paragraphTen="Снятие временной пломбы (ТР-А16.07.091)"
                    priceTen="От 350₽"
                    paragraph11="Трепанация (препарирование) зуба (ТР-А16.07.092)"
                    price11="От 600₽"
                    paragraph12="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia (ТР-А16:07.002:011)"
                    price12="От 5400₽"
                    paragraph13="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria (ТР-А16:07.002:011.01)"
                    price13="От 5800₽"
                    paragraph14="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia (ТР-А16:07.002:012)"
                    price14="От 4400₽"
                    paragraph15="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Asteria (ТР-А16:07.002:012.01)"
                    price15="От 4900₽"
                    paragraph16="Восстановление зуба пломбой с использованием материалов из фотополимеров Filtek Flow (ТР-А16:07.002:014)"
                    price16="От 1900₽"
                    paragraph17="Наложение лечебной или изолирующей прокладки (ТР-А16:07.030.004)"
                    price17="От 1000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Лечение осложнений кариеса"
                    paragraphOne="Наложение девитализирующей пасты (ТР-А11.07.027)"
                    priceOne="От 500₽"
                    paragraphTwo="Пломбирование корневого канала зуба под контролем апекс-локатора (процедура) (ТР-А16.07.0008.012)"
                    priceTwo="От 350₽"
                    paragraphThree="Наложение временной пломбы (ТР-А16.07.002:009)"
                    priceThree="От 600₽"
                    paragraphFour="Пломбирование корневого канала зуба пастой (1 канал) (ТР-А16.07.008.001)"
                    priceFour="От 300₽"
                    paragraphFive="Пломбирование корневого канала зуба пастой с гуттаперчевыми штифтами (1 канал) (ТР-А16.07.008.002)"
                    priceFive="От 900₽"
                    paragraphSix="Закрытие перформации стенки корневого канала зуба (ТР-А16.07.008.003)"
                    priceSix="От 1500₽"
                    paragraphSeven="Инструментальная и медикаментозная обработка хорошо проходимого корневого канала (1к.) (ТР-А16.07.030.001)"
                    priceSeven="От 800₽"
                    paragraphEight="Инструментальная и медикаментозная обработка плохо проходимого корневого канала (1к.) (ТР-А16.07.030.002)"
                    priceEight="От 1100₽"
                    paragraphNine="Фиксация внутриканального штифта (ТР-А16.07.093)"
                    priceNine="От 1500₽"
                    paragraphTen="Удаление внутриканального штифта (ТР-А16.07.094) "
                    priceTen="От 2100₽"
                    paragraph11="Временное пломбирование лекарственным препаратом корневого канала ( 1 канал) (ТР-А16:07.030:003)"
                    price11="От 700₽"
                    paragraph12="Распломбировка корневого канала ранеее леченного пастой (1 канал) (ТР-А16:07.082:001)"
                    price12="От 600₽"
                    paragraph13="Распломбировка корневого канала ранеее леченного фосфат-цементом/резорцин-формалиновым методом (1 канал) (ТР-А16:07.082:002)"
                    price13="От 1300₽"
                    paragraph14="Депофорез корневого канала зуба (ТР-А17.07.006) "
                    price14="От 300₽"
                    paragraph15="Ультразвуковое расширение корневого канала зуба (1 канал) (ТР-А22.07.004) "
                    price15="От 300₽"
                    paragraph16="Механическая и медикаментозная обработка корневого канала (ТР-А22.07.01)"
                    price16="От 1500₽"
                    paragraph17="Пломбировка корневого канала гуттаперчивый штифт+паста (ТР-А22.07.02)"
                    price17="От 1500₽"
                    paragraph18="Временная пломбировка корневого канала Metapex/Colasep (ТР-А22.07.03)"
                    price18="От 500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Эндодоническое лечение"
                    paragraphOne="Эндодоническое лечение одноканального зуба (ТР-1)"
                    priceOne="От 4400₽"
                    paragraphTwo="Эндодоническое лечение двухканального зуба (ТР-2)"
                    priceTwo="От 8800₽"
                    paragraphThree="Эндодоническое лечение трехканального зуб (ТР-3)"
                    priceThree="От 12000₽"
                    paragraphFour="Эндодоническое лечение четырехканального зуба (ТР-4)"
                    priceFour="От 16000₽"
                    paragraphFive="Эндодоническое лечение пятиканального зуба (ТР-5)"
                    priceFive="От 20000₽"
                    paragraphSix="Эндодоническое лечение одноканального зуба (периодонтит) (ТР-6)"
                    priceSix="От 6000₽"
                    paragraphSeven="Эндодоническое лечение двухканального зуба (периодонтит) (ТР-7)"
                    priceSeven="От 10000₽"
                    paragraphEight="Эндодоническое лечение трехканального зуба (периодонтит) (ТР-8)"
                    priceEight="От 14000₽"
                    paragraphNine="Эндодоническое лечение четырехканального зуба (периодонтит) (ТР-9)"
                    priceNine="От 18000₽"
                    paragraphTen="Эндодоническое лечение пятиканального зуба (периодонтит) (ТР-91)"
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
                    paragraphOne="Реставрация 1 степени сложности (ТР-1)"
                    priceOne="От 4000₽"
                    paragraphTwo="Реставрация 2 степени сложности (ТР-2)"
                    priceTwo="От 4900₽"
                    paragraphThree="Реставрация 3 степени сложности (ТР-3) "
                    priceThree="От 5500₽"
                    paragraphFour="Художественная реставрация зуба (ТР-4)"
                    priceFour="От 7500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="surgery"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">
                    <a href="https://dental-home.ru/services/surgery">
                      Хирургия
                    </a>
                  </h2>
                  <PriceTabLong
                    tabHeadign="Хирургия"
                    paragraphOne="Удаление временного зуба I степени сложности (ХР-А16.07.001.001.01)"
                    priceOne="От 1600₽"
                    paragraphTwo="Удаление временного зуба II степени сложности"
                    priceTwo="От 2100₽"
                    paragraphThree="Удаление временного зуба с сохраненными корнями (ХР-А16.07.001.001.03)"
                    priceThree="От 2650₽"
                    paragraphFour="Удаление постоянного зуба простое (ХР-А16.07.001.002.01)"
                    priceFour="От 2400₽"
                    paragraphFive="Удаление постоянного зуба I степени сложности (ХР-А16.07.001.002.02)"
                    priceFive="От 4200₽"
                    paragraphSix="Удаление постоянного зуба II степени сложности (ХР-А16.07.001.002.03)"
                    priceSix="От 5800₽"
                    paragraphSeven="Удаление постоянного зуба III степени сложности (ХР-А16.07.001.002.04)"
                    priceSeven="От 6800₽"
                    paragraphEight="Удаление зуба сложное с разъединением корней (ХР-А16.07.001:003)"
                    priceEight="От 7800₽"
                    paragraphNine="Резекция верхушки корня (1 корень) (ХР-А16.07.007)"
                    priceNine="От 15800₽"
                    paragraphTen="Вскрытие и дренирование одонтогенного абсцесса (ХР-А16.07.012)"
                    priceTen="От 1600₽"
                    paragraph11="Отсроченный кюретаж лунки удаленного зуба (ХР-А16.07.013)"
                    price11="От 1600₽"
                    paragraph12="Удаление новообразований челюстно-лицевой области (ХР-А16.07.013)"
                    price12="От 5000₽"
                    paragraph13="Цистотомия, цистэктомия (ХР-А16.07.016)"
                    price13="От 8400₽"
                    paragraph14="Временное шинирование при заболеваниях пародонта ( 1 единица) (ХР-А16.07.019)"
                    price14="От 1600₽"
                    paragraph15="Операция удаления ретинированного, дистопированного или сверхкомплектного зуба (ХР-А16.07.024)"
                    price15="От 13700₽"
                    paragraph16="Удаление имплантата (ХР-А16.07.024.001)"
                    price16="От 7800₽"
                    paragraph17="Пластика уздечки языка (ХР-А16.07.044)"
                    price17="От 3700₽"
                    paragraph18="Пластика уздечки губы (ХР-А16.07.045)"
                    price18="От 3700₽"
                    paragraph19="Вестибулопластика (ХР-А16.07.046)"
                    price19="От 10500₽"
                    paragraph20="Лечение перикоронита (промывание, рассечение и/или иссечение капюшона) (ХР-А16.07.058)"
                    price20="От 2650₽"
                    paragraph21="Остановка луночного кровотечения с использованием гемостатических материалов (ХР-А16.07.095.002)"
                    price21="От 750₽"
                    paragraph22="Закрытие соустья с гайморовой пазухой (ХР-А16.07.096.001)"
                    price22="От 5800₽"
                    paragraph23="Наложение шва на слизистую оболочку рта (ХР-А16.07
.
097)"
                    price23="500₽"
                    paragraph24="Открытый кюретаж при заболеваниях пародонта в области 1 зуба (ХР-А16:07.
038
)"
                    price24="2500₽"
                    paragraph25="Закрытый кюретаж при заболеваниях пародонта в области 1 зуба"
                    price25="2000₽"
                    paragraph26="Пластика мягких тканей в области зуба или имплантата (ХР-А16:07.040) "
                    price26="10500₽"
                    paragraph27="Снятие швов (ХР-А18)"
                    price27="1000₽"
                    paragraph28="Антисептическая обработка патологических карманов (ХР-А19)"
                    price28="1200₽"
                    paragraph29="Удаление экзостоза в области 1 зуба (ХР-А21)"
                    price29="2650₽"
                    paragraph30="Хирургическое удлинение в области 1 зуба"
                    price30="5000₽"
                    paragraph31="Закрытый кюретаж в области 1 зуба"
                    price31="20000₽"
                    paragraph32="Закрытие рецессии в обл. 1-3 рядом стоящих зубов "
                    price32="21000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="implantology"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">
                    <a href="https://dental-home.ru/services/implants">
                      Имплантология
                    </a>
                  </h2>
                  <PriceTabLong
                    tabHeadign="Протезирование на имплантах"
                    paragraphOne="Протезирование зуба с импользованием имплантата временной коронкой+временный абатмен (ИМ-А16.07.006.001)"
                    priceOne="От 8500₽"
                    paragraphTwo="Единица промежуточной части временного мостовидного протеза с опорой на имплантах (ИМ-А16.07.006.002)"
                    priceTwo="От 4500₽"
                    paragraphThree="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `Стандарт` (трансокклюзионная фиксация) (ИМ-А16.07.006.003)"
                    priceThree="От 25000₽"
                    paragraphFour="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `Эстетик` (трансокклюзионная фиксация) (ИМ-А16.07.006.004)"
                    priceFour="От 31000₽"
                    paragraphFive="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `стандарт`(цементная фиксация) на индивидуальном абатменте (ИМ-А16.07.006.005)"
                    priceFive="От 31000₽"
                    paragraphSix="Единица промежуточной части мостовидного протеза класса `Стандарт` (металлокерамика) с опорой на имплантах (ИМ-А16.07.006.007)"
                    priceSix="От 17000₽"
                    paragraphSeven="Единица промежуточной части мостовидного протеза класса `Премиум` (металлокерамика) с опорой на имплантах (ИМ-А16.07.006.008)"
                    priceSeven="От 21000₽"
                    paragraphEight="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Стандарт` (трансокклюзионная фиксация) (ИМ-А16.07.006.009)"
                    priceEight="От 33000₽"
                    paragraphNine="Протезирование зуба с использованием имплантата коронкой из диоксида циркония на титановом основаниее класса `Премиум` (трансокклюзионная фиксация) (ИМ-А16.07.006.010)"
                    priceNine="От 37500₽"
                    paragraphTen="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Стандарт` (цементная фиксация) на индивидуальном абатмене (ИМ-А16.07.006.011)"
                    priceTen="От 39000₽"
                    paragraph11="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Премиум` (цементная фиксация) на индивидуальном абатмене (ИМ-А16.07.006.012)"
                    price11="От 45000₽"
                    paragraph12="Единица промежуточной части мостовидного протеза из диоксида циркония класса `Стандарт` с опорой на имплантатах (ИМ-А16.07.006.013) "
                    price12="От 22000₽"
                    paragraph13="Единица промежуточной части мостовидного протеза из диоксида циркония класса `Премиум` с опорой на имплантатах (ИМ-А16.07.006.014) "
                    price13="От 26000₽"
                    paragraph14="Протезирование зуба с использованием имплантата коронкой E-max на титановом основании класса `Премиум` (трансокклюзионная фиксация)  (ИМ-А16.07.006.015)"
                    price14="От 30000₽"
                    paragraph15="Индивидуальный абатмен из диоксида циркония  (ИМ-А16.07.006.016)"
                    price15="От 15000₽"
                    paragraph16="Протезирование полным условно-съемным протезом с опорой на имплантатах (балочная конструкция) мультиюниты оплачиваются отдельно (ИМ-А16.07.006.017)"
                    price16="От 185000₽"
                    paragraph17="Протезирование полным несъемным протезом с опорой на имплантатах на мультиюнитах (мультиюниты оплачиваются отдельно) (ИМ-А16.07.006.018)"
                    price17="От 185000₽"
                    paragraph18="Стоимость мультиюнита (1 единица) (ИМ-А16.07.006.019)"
                    price18="От 20000₽"
                    paragraph19="Протезирование полным съемным протезом на имплантатах с замковым креплением (люкаторная система замков) (ИМ-А16.07.006.020)"
                    price19="От 120000₽"
                    paragraph20="Протезирование полным съемным протезом на имплантатах на аттачментах (ИМ-А16.07.006.021)"
                    price20="От 95000₽"
                    paragraph21="Временный несъемный протез на имлантатах (ИМ-А16.07.006.022)"
                    price21="От 80000₽"
                    paragraph22="Замена винта трансокклюзионной фиксации (ИМ-А16.07.006.024)"
                    price22="От 500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Внутрикостная дентальная имплантация системой"
                    paragraphOne="Имплантация системой Dentium SuperLine (Ю.Корея) (ИМ-А16.07.054.001) "
                    priceOne="От 35000₽"
                    paragraphTwo="Имплантация системой NeoDent GM (Бразилия) (ИМ-А16.07.054.003) "
                    priceTwo="От 3500₽"
                    paragraphThree="Имплантация системой Nobel Biocare (Швейцария) (ИМ-А16.07.054.002)"
                    priceThree="От 70000₽"
                    paragraphFour="Миниимплант (ортовинт) (ИМ-А16.07.054.004) "
                    priceFour="От 9000₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Формирователь десны"
                    paragraphOne="Установка формирователя десны SuperLine (ИМ-1)"
                    priceOne="От 7850₽"
                    paragraphTwo="Установка формирователя десны Strumann (ИМ-2)"
                    priceTwo="От 6000₽"
                    paragraphThree="Установка формирователя десны NeoDent GM (ИМ-3)"
                    priceThree="От 7850₽"
                    paragraphFour="Установка формирователя десны (ИМ-4)"
                    priceFour="От 7850₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Синус-лифтинг"
                    paragraphOne="Синус-лифтинг (без учета стоимости материалов) -закрытый (ИМ--)"
                    priceOne="От 15750₽"
                    paragraphTwo="Синус-лифтинг (без учета стоимости материалов) -открытый (ИМ--) "
                    priceTwo="От 42000₽"
                    paragraphThree="Направленная костная регенерация (HKP) титановой сеткой (ИМ-16.08)"
                    priceThree="От 25000₽"
                    paragraphFour="Подсыпка костной ткани после удаления Bio-Oss (ИМ-А16.07 1)"
                    priceFour="От 5000₽"
                    paragraphFive="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (костно-пластический материал Bio-Oss 0,5 гр.) (ИМ-А16.07.041.001.01)"
                    priceFive="От 24000₽"
                    paragraphSix="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (мембраны Bio-Gide) 1 шт (ИМ-А16.07.041:001.03)"
                    priceSix="От 30000₽"
                    paragraphSeven="Использование хирургического шаблона от 3 зубов (ИМ-А16.07.054.008)"
                    priceSeven="От 15000₽"
                    paragraphEight="Использование хирургического шаблона от 4 зубов (ИМ-А16.07.054.009) "
                    priceEight="От 24000₽"
                    paragraphNine="Переустановка импланта (ИМ-А16.07.054.009)"
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
                    paragraphOne="Инъекционное введение лекарственных препаратов в челюстно-лицевую область (А11.07.011)"
                    priceOne="От 400₽"
                    paragraphTwo="Аппликация лекарственного препарата на слизистую оболочку полости рта (А11.07.022)"
                    priceTwo="От 580₽"
                    paragraphThree="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом `Vector Para Pro` в области 1 зуба/импланта (А22.07.001,А11.07.010)"
                    priceThree="От 850₽"
                    paragraphFour="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом `Vector Para Pro` 2 челюсти) (А22.07.001.001,А11.07.010)"
                    priceFour="От 10500₽"
                    paragraphFive="Лазерная физиотерапия челюстно-лицевой области (1 процедура) (А22.07.003)"
                    priceFive="От 370₽"
                    openModal={openModal}
                  ></PriceTabLong>
                </div>
                <div
                  className=""
                  id="orthodontia"
                  style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                >
                  <h2 className="heading">
                    <a href="https://dental-home.ru/services/bite-correction">
                      Ортодонтия
                    </a>
                  </h2>
                  <PriceTabLong
                    tabHeadign="Ортодонтическая коррекция с применением брекет-системы"
                    paragraphOne="I степени сложности (ОРД-А16.07.048.001) "
                    priceOne="От 65000₽"
                    paragraphTwo="II степени сложности (ОРД-А16.07.048.002)"
                    priceTwo="От 70000₽"
                    paragraphThree="III степени сложности (ОРД-А16.07.048.003)"
                    priceThree="От 75000₽"
                    paragraphFour="Фиксация брекет-системы (одна челюсть) (ОРД-А16.07.048.004)"
                    priceFour="От 80000₽"
                    paragraphFive="Фиксация эстетической брекет-системы (одна челюсть) (ОРД-А16.07.048.005) "
                    priceFive="От 95000₽"
                    paragraphSix="Брекет-система металлическая безлигатурная (ОРД-А16.07.048.006)"
                    priceSix="От 25000₽"
                    paragraphSeven="Брекет-система Damon Q (ОРД-А16.07.048.007)"
                    priceSeven="От 30000₽"
                    paragraphEight="Брекет-система сапфировая, керамическая (ОРД-А16.07.048.008)"
                    priceEight="От 32500₽"
                    paragraphTen="Брекет-система керамическая безлигатурная (ОРД-А16.07.048.009)"
                    priceTen="От 35000₽"
                    paragraph11="Фиксация одного брекета (ОРД-А16.07.048.010)"
                    price11="От 2500₽"
                    paragraph12="Замена одного брекета (ОРД-А16.07.048.011)"
                    price12="От 3000₽"
                    paragraph13="Снятие брекетов с одного зубного ряда (ОРД-А16.07.048.012)"
                    price13="От 2000₽"
                    paragraph14="Снятие одного брекета (ОРД-А16.07.048.013)"
                    price14="От 400₽"
                    paragraph15="Замена дуги (ОРД-А16.07.048.014)"
                    price15="От 3000₽"
                    paragraph16="Установка открывающей, закрывающей пружины (ОРД-А16.07.048.015)"
                    price16="От 1000₽"
                    paragraph17="Установка чейна (1 звено) (ОРД-А16.07.048.016)"
                    price17="От 130₽"
                    paragraph18="Установка лигатуры (1 шт.) (ОРД-А16.07.048.017) "
                    price18="От 70₽"
                    paragraph19="Наложение длинной лигатуры (ОРД-А16.07.048.018)"
                    price19="От 400₽"
                    paragraph20="Изгиб на дуге (ОРД-А16.07.048.019)"
                    price20="От 200₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Ретенция"
                    paragraphOne="Несъемный ретейнер на 1 зубной ряд (ОРД-А16.07.018)"
                    priceOne="От 7000₽"
                    paragraphTwo="Ретенционный съемный аппарат на 1 зубной ряд (ОРД-А16.07.047.009) "
                    priceTwo="От 8000₽"
                    paragraphThree="Снятие ретейнера (ОРД-А16.07.048.021)"
                    priceThree="От 5000₽"
                    paragraphFour="Починка несъемного ретейнера (ОРД-А23.07.001.002)"
                    priceFour="От 2000₽"
                    paragraphFive="Изготовление ретенционной каппы (ОРД-А24)"
                    priceFive="От 6500₽"
                    openModal={openModal}
                  ></PriceTabLong>
                  <PriceTabLong
                    tabHeadign="Дополнительные приспособления"
                    paragraphOne="Лечение с помощью аппарат Марко-Росса (ОРД-23.07.002.052)"
                    priceOne="От 29000₽"
                    paragraphTwo="Активация ортодонтического винта (ОРД-A16.07.046.001)"
                    priceTwo="От 2500₽"
                    paragraphThree="Аппарат для дистализации моляров (ОРД-A16.07.046.002)"
                    priceThree="От 33000₽"
                    paragraphFour="Лечение с помощью небного бюгеля (ОРД-A16.07.046.003)"
                    priceFour="От 4000₽"
                    paragraphFive="Межчелюстные тяги (ОРД-A16.07.046.004)"
                    priceFive="От 500₽"
                    paragraphSix="Изготовление коронки ортодонтической (ОРД-A23.07.002.055)"
                    priceSix="От 5000₽"
                    paragraphSeven="Изготовление кольца-петли ортодонтического (ОРД-A23.07.002.055)"
                    priceSeven="От 9000₽"
                    paragraphEight="Повторная фиксация кольца-петли ортодонтического (ОРД-А23.07.002.052)"
                    priceEight="От 2000₽"
                    paragraphNine="Снятие оттиска с одной челюсти альгинатными массами (ОРТ-A02.07.010.001) "
                    priceNine="От 500₽"
                    paragraphTen="Изготовление прикусного шаблона (ОРТ-A02.07.010.005)"
                    priceTen="От 500₽"
                    paragraph11="Антропометрические исследования (компьютерный анализ ТРГ головы) (ОРД-А02.07.004) "
                    price11="От 2000₽"
                    paragraph12="Изготовление контрольной модели (из гипса) (ОРТ-A02.07.010.005) "
                    price12="От 500₽"
                    paragraph13="Прием (осмотр, наблюдение) врача-ортодонта первичный (В01:065.007)"
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
                  <h2 className="heading">
                    <a href="	https://dental-home.ru/services/hygiene">
                      Профилактика и гигиена
                    </a>{" "}
                  </h2>
                  <PriceTabLong
                    tabHeadign="Профилактика и гигиена"
                    paragraphOne="Глубокое фторирование эмали зуба Seal&Protect (1 ед.) (А11.07.012)"
                    priceOne="От 300₽"
                    paragraphTwo="Местное применение реминилизирующих препаратов (процедура) (А11.07.024)"
                    priceTwo="От 500₽"
                    paragraphThree="Обучение гигиене полости рта и зубов индивидуально, подбор средств и предметов гигиены полости рта (А14.07.008)"
                    priceThree="От 400₽"
                    paragraphFour="Профессиональная гигиена полости рта и зубов (ультразвуковое удаление зубных отложений, AirFlow, полировка, покрытие зубов реминилизирующими препаратами) (А16.07.051.001)"
                    priceFour="От 6500₽"
                    paragraphFive="Профессиональная гигиена полости рта при регулярном профосмотре (1 раз в 6 месяцев) (А16.07.051.002)"
                    priceFive="От 5500₽"
                    paragraphSix="Снятие мягких зубных отложений щеткой + пастой, полировка (1 зуб) (А16.07.051.003)"
                    priceSix="От 50₽"
                    paragraphSeven="Профессиональная гигиена воздушноабразивным аппаратом AirFlow (1 челюсть) (А16.07.051.004)"
                    priceSeven="От 2500₽"
                    paragraphEight="Снятие зубных отложений пастой, полировка, покрытие `Fluocal gel` (2 челюсти) 1й сеанс (А16.07.051.005)"
                    priceEight="От 2500₽"
                    paragraphTen="Снятие зубных отложений пастой, полировка, покрытие `Fluocal gel` последующий сеанс (А16.07.051.006)"
                    priceTen="От 1500₽"
                    paragraph11="Запечатывание фиссуры зуба герметиком (1 ед.) (А16.07.057) "
                    price11="От 2000₽"
                    paragraph12="Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области 1 зуба (А22.07.002)"
                    price12="От 150₽"
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
                  <h2 className="heading">
                    <a href="https://dental-home.ru/services/whitening">
                      Отбеливание
                    </a>
                  </h2>
                  <PriceTabLong
                    tabHeadign="Профилактика и гигиена"
                    paragraphOne="Профессиональное отбеливание зубов клиническое - система `ZOOM` (А16.07.050.001)"
                    priceOne="От 21500₽"
                    paragraphTwo="Капповое домашнее отбеливание (включая стоимость изготовления капп и набор отбеливающего геля) 2 челюсти (А16.07.050.002)"
                    priceTwo="От 9900₽"
                    paragraphThree="Профессиональное отбеливание зубов клиническое- система `Amazing White` (А16.07.050.003)"
                    priceThree="От 11000₽"
                    paragraphFour="Внутриканальное отбеливание (первый сеанс) (А16.07.050.004) "
                    priceFour="От 1900₽"
                    paragraphFive="Внутриканальное отбеливание (последующий сеанс) (А16.07.050.005)"
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
                    <h2 className="heading">
                      <a href="https://dental-home.ru/services/vinirs">
                        {" "}
                        Ортопедия
                      </a>
                    </h2>
                    <PriceTabLong
                      tabHeadign="Ортопедия"
                      paragraphOne="Повторная фиксация на постоянный цемент несъемных ортопедических конструкций (ОРТ-A16.07.049)"
                      priceOne="От 1500₽"
                      paragraphTwo="Фиксация на RELYX Luting несъемных ортопедических конструкций (ОРТ-A16.07.049.001)"
                      priceTwo="От 2000₽"
                      paragraphThree="Фиксация несъемных ортопедических конструкций на временный цемент Temp bond (ОРТ-А16.07.050) "
                      priceThree="От 1100₽"
                      paragraphFour="Снятие несъемной ортопедической конструкции (1 единица) (ОРТ-А16.07.053)"
                      priceFour="От 1600₽"
                      paragraphFive="Удаление вкладки (ОРТ-А16.07.094)"
                      priceFive="От 4200₽"
                      paragraphSix="Коррекция протеза, изготовленного в другой клинике (ОРТ-А23.07.002.001)"
                      priceSix="От 1500₽"
                      paragraphSeven="Починка (перебазировка) съемного протеза лабораторным методом (ОРТ-А23.07.002.034)"
                      priceSeven="От 5800₽"
                      paragraphEight="Приварка 1 кламмера (ОРТ-А23.07.002.035)"
                      priceEight="От 5800₽"
                      paragraphNine="Приварка 1 зуба (ОРТ-А23.07.002.036)"
                      priceNine="От 5800₽"
                      paragraphTen="Замена матрицы на бюгельном протезе (1 протез) (ОРТ-А23.07.002.036)"
                      priceTen="От 5800₽"
                      paragraph11="Изготовление каппы для депрограмирования мышц "
                      price11="От 5000₽"
                      paragraph12="Коррекция съемного протеза изготовленного в другой клинике"
                      price12="От 1600₽"
                      paragraph13="Каппа для стабилизации прикуса (Ортотик) (ОРТ-А27)"
                      price13="От 20000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Оттиски"
                      paragraphOne="Снятие оттиска с одной челюсти альгинатными массами (ОРТ-A02.07.010.001)"
                      priceOne="От 2100₽"
                      paragraphTwo="Снятие оттиска с одной челюсти массой из С-силикона (ОРТ-A02.07.010.002)"
                      priceTwo="От 2700₽"
                      paragraphThree="Снятие оттиска с одной челюсти массой из А-силикона (ОРТ-A02.07.010.003)"
                      priceThree="От 3700₽"
                      paragraphFour="Прикусной блок (ОРТ-A02.07.010.004)"
                      priceFour="От 1600₽"
                      paragraphFive="Изготовление прикусного шаблона и индивидуальной ложки (ОРТ-A02.07.010.005)"
                      priceFive="От 4800₽"
                      paragraphSix="Снятие оттиска с одной челюсти для изготовления силиконового ключа (ОРТ-A02.07.010.006)"
                      priceSix="От 2700₽"
                      paragraphSeven="Снятие оттиска с одной челюсти с имплантов с использованием индивидуальной ложки (ОРТ-A02.07.010.005)"
                      priceSeven="От 4200₽"
                      paragraphEight="Wax up восковое моделирование (ОРТ-A02.07.010.008)"
                      priceEight="От 2700₽"
                      paragraphNine="Цифровой оттиск (сканирование верхней и нижней челюсти, прикус) (ОРТ-А02.07.010.009)"
                      priceNine="От 8400₽"
                      paragraphTen="Замена матрицы на бюгельном протезе (1 протез)"
                      priceTen="От 5500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Вкладки"
                      paragraphOne="Восстановление зуба с использованием керамической вкладки (накладки) Emax (ОРТ-А16.07.003.001)"
                      priceOne="От 31500₽"
                      paragraphTwo="Восстановление зуба с использованием цельнолитой культевой вкладки (ОРТ-А16.07.033.001)"
                      priceTwo="От 13200₽"
                      paragraphThree="Восстановление зуба с использованием культевой вкладки из диоксида циркония (ОРТ-А16.07.033.003)"
                      priceThree="От 19000₽"
                      paragraphFour="Восстановление зуба с использованием золотой вкладки (без стоимости золота) (ОРТ-А16.07.033.004)"
                      priceFour="От 21000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Коронки"
                      paragraphOne="Восстановление зуба коронкой временной прямым методом (ОРТ-А16.07.004.001)"
                      priceOne="От 3700₽"
                      paragraphTwo="Восстановление зуба коронкой временной лабораторным способом (ОРТ-А16.07.004.002)"
                      priceTwo="От 6300₽"
                      paragraphThree="Восстановление зуба коронкой металлокерамической класса `стандарт` (ОРТ-А16.07.004.004)"
                      priceThree="От 19500₽"
                      paragraphFour="Восстановление зуба коронкой металлокерамической класса `премиум` (ОРТ-А16.07.004.008)"
                      priceFour="От 28500₽"
                      paragraphFive="Восстановление зуба коронкой металлокерамической на драгоценном сплаве (без учета стоимости драгоценного металла) (ОРТ-А16.07.004.009)"
                      priceFive="От 28500₽"
                      paragraphSix="Восстановление зуба коронкой из диоксида циркония класса `стандарт` (ОРТ-А16.07.004.010)"
                      priceSix="От 28500₽"
                      paragraphSeven="Восстановление зуба коронкой из диоксида циркония класса `премиум` (ОРТ-А16.07.004.011)"
                      priceSeven="От 41000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Восстановление зуба виниром E-max"
                      paragraphOne="Восстановление зуба виниром E-max класса `стандарт` (ОРТ--)"
                      priceOne="От 31000₽"
                      paragraphTwo="Восстановление зуба виниром E-max класса `премиум` (ОРТ--)"
                      priceTwo="От 42000₽"
                      paragraphThree="Диагностика прикуса при помощи миостимулятора `МИСТ ТЕНС` (ОРТ-1)"
                      priceThree="От 10000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Съемные, Бюгельные Протезы"
                      paragraphOne="Протезирование зубов полным съемным пластиночным протезом (Японский гарнитур, пластм) (ОРТ-A16.07.023.001)"
                      priceOne="От 47500₽"
                      paragraphTwo="Протезирование частичным съемным пластиночным протезом для временного замещения 
                      отсутствующих 1-3 зубов (иммедиат-протез) (ОРТ-A16.07.035.001)"
                      priceTwo="От 12600₽"
                      paragraphThree="Протезирование частичным съемным пластиночным протезом (Японский гарнитур, пластм) (ОРТ-A16.07.035.002)"
                      priceThree="От 47500₽"
                      paragraphFour="Протезирование съемным бюгельным протезом кламерным (ОРТ-A16.07.036.001)"
                      priceFour="От 52500₽"
                      paragraphFive="Протезирование съемным бюгельным протезом шинирующим  (ОРТ-A16.07.036.002)"
                      priceFive="От 58000₽"
                      paragraphSix="Протезирование съемным бюгельным протезом с замковыми креплениями Bredent  (ОРТ-A16.07.036.003)"
                      priceSix="От 68500₽"
                      paragraphSeven="Протезирование съемным бюгельным протезом Квадротти (ОРТ-A16.07.036.005)"
                      priceSeven="От 58000₽"
                      paragraphEight="Изготовление ночной каппы при бруксизме (ОРТ-A23.07.002.
009
) "
                      priceEight="От 9500₽"
                      paragraphNine="Изготовление каппы для отбеливания (реминерализации) (ОРТ-A23.07.002.009)"
                      priceNine="От 5800₽"
                      paragraphTen="Изготовление спортивной каппы (ОРТ-A23.07.002.043)"
                      priceTen="От 10500₽"
                      paragraph11="Определение центрального соотношения целюстей и центральной окклюзии  (ОРТ-А23.07.002.010)"
                      price11="От 0₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="consultations-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">
                      <a href="https://dental-home.ru/services/diagnostic">
                        Консультация
                      </a>
                    </h2>
                    <PriceTabLong
                      tabHeadign="Консультация"
                      paragraphOne="Прием (осмотр, консультация) врача-стоматолога первичный (В01:065.007)"
                      priceOne="От 1000₽"
                      paragraphTwo="Диспансерный прием (осмотр, консультация) врача-стоматолога (В04.065.005)"
                      priceTwo="От 500₽"
                      paragraphThree="Профилактический прием (осмотр, консультация) врача-стоматолога (В04.065.006)"
                      priceThree="От 0₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="xray-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">
                      <a href="https://dental-home.ru/prices">Рентгенология</a>
                    </h2>
                    <PriceTabLong
                      tabHeadign="Рентгенология"
                      paragraphOne="Радиовизиография (А06.07.012)"
                      priceOne="От 500₽"
                      paragraphTwo="Получение снимка на электронный адрес (А06.07.013.004) "
                      priceTwo="От 100₽"
                      paragraphThree="Запись на электронный носитель CD (А06.07.013.005)"
                      priceThree="От 300₽"
                      paragraphFour="Запись на электронный носитель USB (А06.07.013.006)"
                      priceFour="От 500₽"
                      paragraphFive="Повторный диагностический снимок (А06.07.013.007)"
                      priceFive="От 0₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="diagnostic-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">
                      {" "}
                      <a href="https://dental-home.ru/services/diagnostic">
                        Исследования и диагностика
                      </a>{" "}
                    </h2>
                    <PriceTabLong
                      tabHeadign="Исследования и диагностика"
                      paragraphOne="Исследование на диагностических моделях челюстей (A02.07.010)"
                      priceOne="От 550₽"
                      paragraphTwo="Витальное окрашивание твердых тканей зуба (A12.07.001)"
                      priceTwo="От 400₽"
                      paragraphThree="Исследование кариозных полостей с использованием стоматологического зонда (А02.07.002
)"
                      priceThree="От 80₽"
                      paragraphFour="Термодиагностика зуба (А02.07.005)"
                      priceFour="От 60₽"
                      paragraphFive="Определение прикуса (А02.07.006)"
                      priceFive="От 550₽"
                      paragraphSix="Определение вида смыкания зубных рядов с помощью лицевой дуги (А02.07.006.001)"
                      priceSix="От 1600₽"
                      paragraphSeven="Перкуссия зубов (А02.07.007)"
                      priceSeven="От 50₽"
                      paragraphEight="Электроодонтометрия зуба (ЭОД) (А05.07.001)"
                      priceEight="От 120₽"
                      paragraphNine="Определение индексов гигиены полости рта (А12.07.003)"
                      priceNine="От 270₽"
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
                      paragraphOne="Проводниковая анестезия (B01.003.004:002)"
                      priceOne="От 1000₽"
                      paragraphTwo="Аппликационная анестезия (B01.003.004:004)"
                      priceTwo="От 400₽"
                      paragraphThree="Инфильтрационная анестезия (B01.003.004:005)"
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
                      tabHeadign="Восстановление зуба пломбой"
                      paragraphOne="Применение системы Коффердам, Роббердам (ТР-А02.07.001.001)"
                      priceOne="От 850₽"
                      paragraphTwo="Применение системы OptraGate (ТР-А02.07.001.002)"
                      priceTwo="От 750₽"
                      paragraphThree="Микроабразия эмали (1 зуб) (ТР-А16.07.002)"
                      priceThree="От 2650₽"
                      paragraphFour="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria (ТР-А16.07.002.010.01)"
                      priceFour="От 3900₽"
                      paragraphFive="Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia (ТР-А16.07.002:010)"
                      priceFive="От 3500₽"
                      paragraphSix="Восстановление зуба виниром, полукоронкой из фотополимерного материала прямым методом (ТР-А16.07.003.001)"
                      priceSix="От 7500₽"
                      paragraphSeven="Избирательное пришлифовывание твердых тканей зуба (ТР-А16.07.025)"
                      priceSeven="От 250₽"
                      paragraphEight="Восстановление зуба пломбировочным материалом с использованием титановых штифтов (ТР-А16.07.031.01)"
                      priceEight="От 6850₽"
                      paragraphNine="Восстановление зуба пломбировочным материалом с использованием стекловолоконных штифтов (ТР-А16.07.031.02)"
                      priceNine="От 8900₽"
                      paragraphTen="Снятие временной пломбы (ТР-А16.07.091)"
                      priceTen="От 470₽"
                      paragraph11="Трепанация (препарирование) зуба (ТР-А16.07.092)"
                      price11="От 850₽"
                      paragraph12="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia (ТР-А16:07.002:011)"
                      price12="От 4000₽"
                      paragraph13="Восстановление зуба пломбой с нарушением контактоного пункта II, III класс по Блэку с использованием материалов из фотополимеров SonicFill, Asteria (ТР-А16:07.002:011.01)"
                      price13="От 4300₽"
                      paragraph14="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Filtek, Gradia  (ТР-А16:07.002:012)"
                      price14="От 4400₽"
                      paragraph15="Восстановление зуба пломбой IV класс по Блэку с использованием материалов из фотополимеров Asteria (ТР-А16:07.002:012.01)"
                      price15="От 4900₽"
                      paragraph16="Восстановление зуба пломбой с использованием материалов из фотополимеров Filtek Flow (ТР-А16:07.002:014)"
                      price16="От 1900₽"
                      paragraph17="Наложение лечебной или изолирующей прокладки (ТР-А16:07.030.004
)"
                      price17="1000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Лечение осложнений кариеса"
                      paragraphOne="Наложение девитализирующей пасты (ТР-А11.07.027
)"
                      priceOne="От 500₽"
                      paragraphTwo="Пломбирование корневого канала зуба под контролем апекс-локатора (процедура) (ТР-
А16
.07.0008.012)"
                      priceTwo="От 350₽"
                      paragraphThree="Наложение временной пломбы (ТР-А16.07.002:009)"
                      priceThree="От 600₽"
                      paragraphFour="Пломбирование корневого канала зуба пастой (1 канал) (ТР-А16.07.008.001
.)"
                      priceFour="От 300₽"
                      paragraphFive="Пломбирование корневого канала зуба пастой с гуттаперчевыми штифтами (1 канал) (ТР-А16.07.008.
002
)"
                      priceFive="От 900₽"
                      paragraphSix="Закрытие перформации стенки корневого канала зуба (ТР-А16.07.008.003)"
                      priceSix="От 1500₽"
                      paragraphSeven="Инструментальная и медикаментозная обработка хорошо проходимого корневого канала (1к.) (ТР-А16.07.030.001)"
                      priceSeven="От 800₽"
                      paragraphEight="Инструментальная и медикаментозная обработка плохо проходимого корневого канала (1к.) (ТР-А16.07.030.002)"
                      priceEight="От 1100₽"
                      paragraphNine="Фиксация внутриканального штифта (ТР-А16.07.093)"
                      priceNine="От 1500₽"
                      paragraphTen="Удаление внутриканального штифта  (ТР-А16.07.094)"
                      priceTen="От 2100₽"
                      paragraph11="Временное пломбирование лекарственным препаратом корневого канала ( 1 канал) (ТР-А16:07.030:003)"
                      price11="От 700₽"
                      paragraph12="Распломбировка корневого канала ранеее леченного пастой (1 канал) (ТР-А16:07.082:001)"
                      price12="От 600₽"
                      paragraph13="Распломбировка корневого канала ранеее леченного фосфат-цементом/резорцин-формалиновым методом (1 канал) (ТР-А16:07.082:002)"
                      price13="От 1300₽"
                      paragraph14="Депофорез корневого канала зуба (ТР-А17.07.006)"
                      price14="От 300₽"
                      paragraph15="Ультразвуковое расширение корневого канала зуба (1 канал) (ТР-А22.07.004)"
                      price15="От 300₽"
                      paragraph16="Механическая и медикаментозная обработка корневого канала (ТР-А22.07.01
)"
                      price16="От 1500₽"
                      paragraph17="Пломбировка корневого канала гуттаперчивый штифт+паста (ТР-А22.07.02)"
                      price17="От 1500₽"
                      paragraph18="Временная пломбировка корневого канала Metapex/Colasep (ТР-А22.
07
.03)"
                      price18="От 500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Эндодоническое лечение"
                      paragraphOne="Эндодоническое лечение одноканального зуба (ТР-1)"
                      priceOne="От 6300₽"
                      paragraphTwo="Эндодоническое лечение двухканального зуба (ТР-2)"
                      priceTwo="От 10500₽"
                      paragraphThree="Эндодоническое лечение трехканального зуб (ТР-3)"
                      priceThree="От 14700₽"
                      paragraphFour="Эндодоническое лечение четырехканального зуба (ТР-4)"
                      priceFour="От 16000₽"
                      paragraphFive="Эндодоническое лечение пятиканального зуба (ТР-5)"
                      priceFive="От 23000₽"
                      paragraphSix="Эндодоническое лечение одноканального зуба (периодонтит) (ТР-6)"
                      priceSix="От 9000₽"
                      paragraphSeven="Эндодоническое лечение двухканального зуба (периодонтит) (ТР-7)"
                      priceSeven="От 13150₽"
                      paragraphEight="Эндодоническое лечение трехканального зуба (периодонтит) (ТР-8)"
                      priceEight="От 17350₽"
                      paragraphNine="Эндодоническое лечение четырехканального зуба (периодонтит) (ТР-9)"
                      priceNine="От 21500₽"
                      paragraphTen="Эндодоническое лечение пятиканального зуба (периодонтит) (ТР-91)"
                      priceTen="От 25750₽"
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
                      paragraphOne="Реставрация 1 степени сложности (ТР-
1)"
                      priceOne="От 4200₽"
                      paragraphTwo="Реставрация 2 степени сложности (ТР-2)"
                      priceTwo="От 5150₽"
                      paragraphThree="Реставрация 3 степени сложности (ТР-3)"
                      priceThree="От 5800₽"
                      paragraphFour="Художественная реставрация зуба (ТР-4) "
                      priceFour="От 9500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="surgery-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">
                      <a href="https://dental-home.ru/services/surgery">
                        Хирургия
                      </a>
                    </h2>
                    <PriceTabLong
                      tabHeadign="Хирургия"
                      paragraphOne="Удаление временного зуба I степени сложности (ХР-А16.07.001.001.01)"
                      priceOne="От 1600₽"
                      paragraphTwo="Удаление временного зуба II степени сложности (ХР-А16.07.001.001.03)"
                      priceTwo="От 1800₽"
                      paragraphThree="Удаление временного зуба с сохраненными корнями (ХР-А16.07.001.002.01)"
                      priceThree="От 2200₽"
                      paragraphFour="Удаление постоянного зуба простое (ХР-А16.07.001.002.02)"
                      priceFour="От 2400₽"
                      paragraphFive="Удаление постоянного зуба I степени сложности (ХР-А16.07.001.002.03)"
                      priceFive="От 3000₽"
                      paragraphSix="Удаление постоянного зуба II степени сложности (ХР-А16.07.001.002.04)"
                      priceSix="От 4000₽"
                      paragraphSeven="даление постоянного зуба III степени сложности (ХР-А16.07.001:003)"
                      priceSeven="От 5500₽"
                      paragraphEight="Удаление зуба сложное с разъединением корней (ХР-А16.07.007) "
                      priceEight="От 7800₽"
                      paragraphNine="Резекция верхушки корня (1 корень) (ХР-А16.07.012)"
                      priceNine="От 8500₽"
                      paragraphTen="Вскрытие и дренирование одонтогенного абсцесса (ХР-А16.07.013)"
                      priceTen="От 1200₽"
                      paragraph11="Отсроченный кюретаж лунки удаленного зуба"
                      price11="От 1000₽"
                      paragraph12="Удаление новообразований челюстно-лицевой области (ХР-А16.07.013)"
                      price12="От 5000₽"
                      paragraph13="Цистотомия, цистэктомия (ХР-А16.07.016)"
                      price13="От 8000₽"
                      paragraph14="Временное шинирование при заболеваниях пародонта ( 1 единица) (ХР-А16.07.019)"
                      price14="От 1500₽"
                      paragraph15="Операция удаления ретинированного, дистопированного или сверхкомплектного зуба (ХР-А16.07.024)"
                      price15="От 9500₽"
                      paragraph16="Удаление имплантата (ХР-А16.07.024.001)"
                      price16="От 7800₽"
                      paragraph17="Пластика уздечки языка (ХР-А16.07.044)"
                      price17="От 3700₽"
                      paragraph18="Пластика уздечки губы (ХР-А16.07.045)"
                      price18="От 3700₽"
                      paragraph19="Вестибулопластика (ХР-А16.07.046)"
                      price19="От 10500₽"
                      paragraph20="Лечение перикоронита (промывание, рассечение и/или иссечение капюшона) (ХР-А16.07.058)"
                      price20="От 1500₽"
                      paragraph21="Остановка луночного кровотечения с использованием гемостатических материалов (ХР-А16.07.095.002)"
                      price21="От 700₽"
                      paragraph22="Закрытие соустья с гайморовой пазухой (ХР-А16.07.096.001)"
                      price22="От 3000₽"
                      paragraph23="Наложение шва на слизистую оболочку рта (ХР-А16.07.097)"
                      price23="От 550₽"
                      paragraph24="Открытый кюретаж при заболеваниях пародонта в области 1 зуба (ХР-А16:07.038)"
                      price24="От 2500₽"
                      paragraph25="Закрытый кюретаж при заболеваниях пародонта в области 1 зуба "
                      price25="От 2000₽"
                      paragraph26="Пластика мягких тканей в области зуба или имплантата (ХР-А16:07.040) "
                      price26="От 7000₽"
                      paragraph27="Снятие швов (ХР-А18)"
                      price27="От 1000₽"
                      paragraph28="Антисептическая обработка патологических карманов (ХР-А19)"
                      price28="От 1300₽"
                      paragraph29="Удаление экзостоза в области 1 зуба (ХР--А21)"
                      price29="От 2650₽"
                      paragraph30="Хирургическое удлинение в области 1 зуба (ХР-А20)"
                      price30="От 6800₽"
                      paragraph31="Закрытый кюретаж в области 1 зуба"
                      price31="От 20000₽"
                      paragraph32="Закрытие рецессии в обл. 1-3 рядом стоящих зубов (ХР-А23)"
                      price32="От 21000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="implantology-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">
                      <a href="	https://dental-home.ru/services/implants">
                        Имплантология
                      </a>
                    </h2>
                    <PriceTabLong
                      tabHeadign="Протезирование на имплантах"
                      paragraphOne="Протезирование зуба с импользованием имплантата временной коронкой+временный абатмен (ИМ-А16.07.006.001)"
                      priceOne="От 8500₽"
                      paragraphTwo="Единица промежуточной части временного мостовидного протеза с опорой на имплантах (ИМ-А16.07.006.002)"
                      priceTwo="От 4500₽"
                      paragraphThree="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `Стандарт` (трансокклюзионная фиксация) (ИМ-А16.07.006.003)"
                      priceThree="От 25000₽"
                      paragraphFour="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `Эстетик` (трансокклюзионная фиксация) (ИМ-А16.07.006.004)"
                      priceFour="От 31000₽"
                      paragraphFive="Протезирование зуба с использованием имплантата коронкой металлокерамической класса `стандарт`(цементная фиксация) на индивидуальном абатменте (ИМ-А16.07.006.005)"
                      priceFive="От 31000₽"
                      paragraphSix="Единица промежуточной части мостовидного протеза класса `Стандарт` (металлокерамика) с опорой на имплантах (ИМ-А16.07.006.007)"
                      priceSix="От 17000₽"
                      paragraphSeven="Единица промежуточной части мостовидного протеза класса `Премиум` (металлокерамика) с опорой на имплантах (ИМ-А16.07.006.008)"
                      priceSeven="От 21000₽"
                      paragraphEight="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Стандарт` (трансокклюзионная фиксация) (ИМ-А16.07.006.009)"
                      priceEight="От 33000₽"
                      paragraphNine="Протезирование зуба с использованием имплантата коронкой из диоксида циркония на титановом основаниее класса `Премиум` (трансокклюзионная фиксация) (ИМ-А16.07.006.010)"
                      priceNine="От 37500₽"
                      paragraphTen="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Стандарт` (цементная фиксация) на индивидуальном абатмене (ИМ-А16.07.006.011)"
                      priceTen="От 39000₽"
                      paragraph11="Протезирование зуба с использованием имплантата коронкой из диоксида циркония класса `Премиум` (цементная фиксация) на индивидуальном абатмене (ИМ-А16.07.006.012)"
                      price11="От 45000₽"
                      paragraph12="Единица промежуточной части мостовидного протеза из диоксида циркония класса `Стандарт` с опорой на имплантатах (ИМ-А16.07.006.013) "
                      price12="От 22000₽"
                      paragraph13="Единица промежуточной части мостовидного протеза из диоксида циркония класса `Премиум` с опорой на имплантатах (ИМ-А16.07.006.014) "
                      price13="От 26000₽"
                      paragraph14="Протезирование зуба с использованием имплантата коронкой E-max на титановом основании класса `Премиум` (трансокклюзионная фиксация) (ИМ-А16.07.006.015)"
                      price14="От 30000₽"
                      paragraph15="Индивидуальный абатмен из диоксида циркония (ИМ-А16.07.006.016) "
                      price15="От 15000₽"
                      paragraph16="Протезирование полным условно-съемным протезом с опорой на имплантатах (балочная конструкция) мультиюниты оплачиваются отдельно (ИМ-А16.07.006.017)"
                      price16="От 185000₽"
                      paragraph17="Протезирование полным несъемным протезом с опорой на имплантатах на мультиюнитах (мультиюниты оплачиваются отдельно) (ИМ-А16.07.006.018)"
                      price17="От 185000₽"
                      paragraph18="Стоимость мультиюнита (1 единица) (ИМ-А16.07.006.019)"
                      price18="От 20000₽"
                      paragraph19="Протезирование полным съемным протезом на имплантатах с замковым креплением (люкаторная система замков) (ИМ-А16.07.006.020)"
                      price19="От 120000₽"
                      paragraph20="Протезирование полным съемным протезом на имплантатах на аттачментах (ИМ-А16.07.006.021)"
                      price20="От 95000₽"
                      paragraph21="Временный несъемный протез на имлантатах (ИМ-А16.07.006.22)"
                      price21="От 80000₽"
                      paragraph22="Замена винта трансокклюзионной фиксации (ИМ-А23.07.002.04)"
                      price22="От 500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Внутрикостная дентальная имплантация системой"
                      paragraphOne="Имплантация системой Dentium SuperLine (Ю.Корея) (ИМ-А16.07.054.001) "
                      priceOne="От 35000₽"
                      paragraphTwo="Имплантация системой NeoDent GM (Бразилия) (ИМ-А16.07.054.003) "
                      priceTwo="От 3500₽"
                      paragraphThree="Имплантация системой Nobel Biocare (Швейцария) (ИМ-А16.07.054.002)"
                      priceThree="От 70000₽"
                      paragraphFour="Миниимплант (ортовинт) (ИМ-А16.07.054.004) "
                      priceFour="От 9000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Формирователь десны"
                      paragraphOne="Установка формирователя десны SuperLine (ИМ-1)"
                      priceOne="От 3000₽"
                      paragraphTwo="Установка формирователя десны Strumann"
                      priceTwo="От 6000₽"
                      paragraphThree="Установка формирователя десны NeoDent GM (ИМ-3)"
                      priceThree="От 3000₽"
                      paragraphFour="Установка формирователя десны (ИМ-4)"
                      priceFour="От 3000₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Синус-лифтинг"
                      paragraphOne="Синус-лифтинг (без учета стоимости материалов) -закрытый (ИМ--)"
                      priceOne="От 12000₽"
                      paragraphTwo="Синус-лифтинг (без учета стоимости материалов) -открытый  (ИМ--)"
                      priceTwo="От 25000₽"
                      paragraphThree="Направленная костная регенерация (HKP) титановой сеткой (ИМ-16.08) "
                      priceThree="От 25000₽"
                      paragraphFour="Подсыпка костной ткани после удаления Bio-Oss (ИМ-А16.07 1)"
                      priceFour="От 5000₽"
                      paragraphFive="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (костно-пластический материал Bio-Oss 0,5 гр.) (ИМ-А16.07.041.001.01)"
                      priceFive="От 15000₽"
                      paragraphSix="Костная пластика челюстно-лицевой области с применением биодеградируемых материалов (мембраны Bio-Gide) 1 шт (ИМ-А16.07.041:001.03)"
                      priceSix="От 22000₽"
                      paragraphSeven="Использование хирургического шаблона от 3 зубов (ИМ-А16.07.054.008)"
                      priceSeven="От 15000₽"
                      paragraphEight="Использование хирургического шаблона от 4 зубов (ИМ-А16.07.054.009)"
                      priceEight="От 24000₽"
                      paragraphNine="Переустановка импланта (ИМ-А16.07.054.009)"
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
                      paragraphOne="Инъекционное введение лекарственных препаратов в челюстно-лицевую область (А11.07.011)"
                      priceOne="От 380₽"
                      paragraphTwo="Аппликация лекарственного препарата на слизистую оболочку полости рта (А11.07.022)"
                      priceTwo="От 550₽"
                      paragraphThree="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом `Vector Para Pro` в области 1 зуба/импланта (А22.07.001,А11.07.010)"
                      priceThree="От 800₽"
                      paragraphFour="Ультразвуковая обработка пародонтального кармана в области зуба с применением лекарственных средств (лечение заболеваний пародонта аппаратом `Vector Para Pro` 2 челюсти) (А22.07.001.001,А11.07.010)"
                      priceFour="От 10000₽"
                      paragraphFive="Лазерная физиотерапия челюстно-лицевой области (1 процедура) (А22.07.003)"
                      priceFive="От 350₽"
                      openModal={openModal}
                    ></PriceTabLong>
                  </div>
                  <div
                    className=""
                    id="orthodontia-pc"
                    style={{ marginTop: "clamp(32px,3.33312vw,128px)" }}
                  >
                    <h2 className="heading">
                      <a href="https://dental-home.ru/services/bite-correction">
                        Ортодонтия
                      </a>
                    </h2>
                    <PriceTabLong
                      tabHeadign="Ортодонтическая коррекция с применением брекет-системы"
                      paragraphOne="I степени сложности (ОРД-А16.07.048.001) "
                      priceOne="От 68500₽"
                      paragraphTwo="II степени сложности (ОРД-А16.07.048.002) "
                      priceTwo="От 73500₽"
                      paragraphThree="III степени сложности (ОРД-А16.07.048.003)"
                      priceThree="От 79000₽"
                      paragraphFour="Фиксация брекет-системы (одна челюсть)  (ОРД-А16.07.048.004)"
                      priceFour="От 84000₽"
                      paragraphFive="Фиксация эстетической брекет-системы (одна челюсть) (ОРД-А16.07.048.005) "
                      priceFive="От 100000₽"
                      paragraphSix="Брекет-система металлическая безлигатурная (ОРД-А16.07.048.006)"
                      priceSix="От 26500₽"
                      paragraphSeven="Брекет-система Damon Q (ОРД-А16.07.048.007)"
                      priceSeven="От 31500₽"
                      paragraphEight="Брекет-система сапфировая, керамическая (ОРД-А16.07.048.008)"
                      priceEight="От 34150₽"
                      paragraphTen="Брекет-система керамическая безлигатурная (ОРД-А16.07.048.009)"
                      priceTen="От 36500₽"
                      paragraph11="Фиксация одного брекета (ОРД-А16.07.048.010)"
                      price11="От 2650₽"
                      paragraph12="Замена одного брекета (ОРД-А16.07.048.0011)"
                      price12="От 3150₽"
                      paragraph13="Снятие брекетов с одного зубного ряда  (ОРД-А16.07.048.0012)"
                      price13="От 5250₽"
                      paragraph14="Снятие одного брекета (ОРД-А16.07.048.0013)"
                      price14="От 450₽"
                      paragraph15="Замена дуги"
                      price15="От 3000₽"
                      paragraph16="Установка открывающей, закрывающей пружины (ОРД-А16.07.048.0015)"
                      price16="От 1000₽"
                      paragraph17="Установка чейна (1 звено) (ОРД-А16.07.048.016)"
                      price17="От 130₽"
                      paragraph18="Установка лигатуры (1 шт.) (ОРД-А16.07.048.017)"
                      price18="От 70₽"
                      paragraph19="Наложение длинной лигатуры (ОРД-А16.07.048.018)"
                      price19="От 400₽"
                      paragraph20="Изгиб на дуге (ОРД-А16.07.048.019)"
                      price20="От 210₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Ретенция"
                      paragraphOne="Несъемный ретейнер на 1 зубной ряд (ОРД-А16.07.018)"
                      priceOne="От 12600₽"
                      paragraphTwo="Ретенционный съемный аппарат на 1 зубной ряд (ОРД-А16.07.047.009)"
                      priceTwo="От 8400₽"
                      paragraphThree="Снятие ретейнера (ОРД-А16.07.048.021)"
                      priceThree="От 6850₽"
                      paragraphFour="Починка несъемного ретейнера (ОРД-А23.07.001.002)"
                      priceFour="От 2100₽"
                      paragraphFive="Изготовление ретенционной каппы (ОРД-А24)"
                      priceFive="От 6500₽"
                      openModal={openModal}
                    ></PriceTabLong>
                    <PriceTabLong
                      tabHeadign="Дополнительные приспособления"
                      paragraphOne="Лечение с помощью аппарат Марко-Росса (ОРД-A16.07.046.001) "
                      priceOne="От 30500₽"
                      paragraphTwo="Активация ортодонтического винта (ОРД-23.07.002.052) "
                      priceTwo="От 2650₽"
                      paragraphThree="Аппарат для дистализации моляров (ОРД-A16.07.046.002) "
                      priceThree="От 34500₽"
                      paragraphFour="Лечение с помощью небного бюгеля (ОРД-A16.07.046.003)"
                      priceFour="От 4000₽"
                      paragraphFive="Межчелюстные тяги (ОРД-A16.07.046.004)"
                      priceFive="От 550₽"
                      paragraphSix="Изготовление коронки ортодонтической (ОРД-A23.07.002.055)"
                      priceSix="От 5250₽"
                      paragraphSeven="Изготовление кольца-петли ортодонтического (ОРД-А23.07.002.051)"
                      priceSeven="От 9000₽"
                      paragraphEight="Повторная фиксация кольца-петли ортодонтического (ОРД-А23.07.002.052)"
                      priceEight="От 2100₽"
                      paragraphNine="Снятие оттиска с одной челюсти альгинатными массами (ОРТ-A02.07.010.001) "
                      priceNine="От 500₽"
                      paragraphTen="Изготовление прикусного шаблона (ОРТ-A02.07.010.005)"
                      priceTen="От 9450₽"
                      paragraph11="Антропометрические исследования (компьютерный анализ ТРГ головы) "
                      price11="От 2000₽"
                      paragraph12="Изготовление контрольной модели (из гипса) (ОРТ-A02.07.010.005) "
                      price12="От 500₽"
                      paragraph13="Прием (осмотр, наблюдение) врача-ортодонта первичный (В01:065.007)"
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
                    <h2 className="heading">
                      <a href="https://dental-home.ru/services/hygiene">
                        Профилактика и гигиена
                      </a>
                    </h2>
                    <PriceTabLong
                      tabHeadign="Профилактика и гигиена"
                      paragraphOne="Глубокое фторирование эмали зуба Seal&Protect (1 ед.) (А11.07.012)"
                      priceOne="От 350₽"
                      paragraphTwo="Местное применение реминилизирующих препаратов (процедура) (А11.07.024)"
                      priceTwo="От 550₽"
                      paragraphThree="Обучение гигиене полости рта и зубов индивидуально, подбор средств и предметов гигиены полости рта (А14.07.008)"
                      priceThree="От 500₽"
                      paragraphFour="Профессиональная гигиена полости рта и зубов (ультразвуковое удаление зубных отложений, AirFlow, полировка, покрытие зубов реминилизирующими препаратами) (А16.07.051.001)"
                      priceFour="От 6800₽"
                      paragraphFive="Профессиональная гигиена полости рта при регулярном профосмотре (1 раз в 6 месяцев) (А16.07.051.002)"
                      priceFive="От 5800₽"
                      paragraphSix="Снятие мягких зубных отложений щеткой + пастой, полировка (1 зуб) (А16.07.051.003)"
                      priceSix="От 60₽"
                      paragraphSeven="Профессиональная гигиена воздушноабразивным аппаратом AirFlow (1 челюсть) (А16.07.051.004)"
                      priceSeven="От 2600₽"
                      paragraphEight="Снятие зубных отложений пастой, полировка, покрытие `Fluocal gel` (2 челюсти) 1й сеанс (А16.07.051.005)"
                      priceEight="От 2600₽"
                      paragraphTen="Снятие зубных отложений пастой, полировка, покрытие `Fluocal gel` последующий сеанс (А16.07.051.006)"
                      priceTen="От 1600₽"
                      paragraph11="Запечатывание фиссуры зуба герметиком (1 ед.) (А16.07.057) "
                      price11="От 2100₽"
                      paragraph12="Ультразвуковое удаление наддесневых и поддесневых зубных отложений в области 1 зуба (А22.07.002)"
                      price12="От 160₽"
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
                    <h2 className="heading">
                      <a href="https://dental-home.ru/services/whitening">
                        Отбеливание
                      </a>
                    </h2>
                    <PriceTabLong
                      tabHeadign="Профилактика и гигиена"
                      paragraphOne="Профессиональное отбеливание зубов клиническое - система `ZOOM` (А16.07.050.001)"
                      priceOne="От 31500₽"
                      paragraphTwo="Капповое домашнее отбеливание (включая стоимость изготовления капп и набор отбеливающего геля) 2 челюсти (А16.07.050.002)"
                      priceTwo="От 10400₽"
                      paragraphThree="Профессиональное отбеливание зубов клиническое- система `Amazing White` (А16.07.050.003)"
                      priceThree="От 11500₽"
                      paragraphFour="Внутриканальное отбеливание (первый сеанс) (А16.07.050.004)"
                      priceFour="От 2000₽"
                      paragraphFive="Внутриканальное отбеливание (последующий сеанс) (А16.07.050.005)"
                      priceFive="От 1050₽"
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

export default PricesPage;
