import emailjs from "@emailjs/browser";
import { keyframes } from "@emotion/react";
import {
  faChevronRight,
  faClose,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MDBCheckbox } from "mdb-react-ui-kit";
import { RefObject, useEffect, useRef, useState } from "react";
import { Reveal } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/gallery";
import PcGallery from "../../components/gallery/pc_gallery";
import Header from "../../components/header/header";

import { Helmet } from "react-helmet";
import "./styles/doctors_styles.css";

const DoctorOnePc = require("../../assets/1.webp");
const DoctorTwoPc = require("../../assets/karen_pc.webp");
const DoctorThreePc = require("../../assets/3.webp");
const DoctorFourPc = require("../../assets/islam_pc.webp");
const DoctorFivePc = require("../../assets/elena_pc.webp");
const DoctorSixPc = require("../../assets/tatyana_pc.webp");
const DoctorSevenPc = require("../../assets/orthoped_pc.webp");
const DoctorEightPc = require("../../assets/marina_pc.webp");
const DoctorNinePc = require("../../assets/karen_pc.webp");
const doctorTen = require("../../assets/orthoped_pc.webp");
const doctorEleven = require("../../assets/sadiga.webp");
const doctorElevenMob = require("../../assets/marina_mob.webp");

const doctorOneMob = require("../../assets/01.webp");
const doctorTwoMob = require("../../assets/02.webp");
const doctorThreeMob = require("../../assets/03.webp");
const doctorFourMob = require("../../assets/islam_mob.webp");
const doctorFiveMob = require("../../assets/elena_mob.webp");
const doctorSixMob = require("../../assets/tatyana_mob.webp");
const doctorSevenMob = require("../../assets/marina_mob.webp");
const doctorEightMob = require("../../assets/karen_mob.webp");
const doctorNineMob = require("../../assets/orthoped_mob.webp");
const doctorTenMob = require("../../assets/yana_mob.webp");

const logoMobile: string = require("../../assets/logo_mob.svg").default;
const modalImage: string = require("../../assets/example_modal.webp");

const DoctorsPage = () => {
  const [thankYou, setThankYou] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

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
              Квалифицированные врачи в Dental Home - опыт и индивидуальный
              подход
            </title>
            <meta
              property="og:title"
              content="Квалифицированные врачи в Dental Home - опыт и индивидуальный
              подход"
            ></meta>
            <meta
              property="og:description"
              content="Наша команда опытных и квалифицированных врачей Dental Home готова помочь вам с любыми стоматологическими проблемами. Узнайте больше о наших специалистах"
            ></meta>
            <meta
              name="description"
              content="Наша команда опытных и квалифицированных врачей Dental Home готова помочь вам с любыми стоматологическими проблемами. Узнайте больше о наших специалистах"
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
                <Link to="/doctors" className="prices-link">
                  Врачи
                </Link>
              </div>
              <h1 className="heading">Врачи клиники в Ивантеевке</h1>
              <div className="divider-container">
                <div className="divider"></div>
              </div>
              <Gallery
                imageSrc={doctorOneMob}
                // imageSrcTwo={doctorTwoMob}
                imageSrcThree={doctorThreeMob}
                openModal={openModal}
                imageSrcFour={doctorFourMob}
                imageSrcFive={doctorFiveMob}
                imageSrcSix={doctorSixMob}
                imageSrcSeven={doctorNineMob}
                imageSrcEight={doctorEightMob}
                imageSrcNine={doctorElevenMob}
              />
              <h2 className="heading text-center mt-5">
                профессиональные Врачи-Стоматологи Dental Home
              </h2>
              <p className="paragraph text-center mt-4">
                Dental Home - это современная клиника, которая предлагает
                качественные и профессиональные услуги по лечению зубов взрослых
                и детей. Наша команда состоит из опытных и квалифицированных
                врачей, которые постоянно совершенствуют свои навыки и
                используют только современное оборудование.
                <br />
                <br />
                Мы понимаем, что здоровье зубов - это не только красивая улыбка,
                но и залог общего благополучия. Поэтому мы предлагаем широкий
                спектр услуг, начиная от
                {""}
                <a href="https://dental-home.ru/services/hygiene">
                  {""} профилактики
                </a>
                и заканчивая
                {""}
                <a href="https://dental-home.ru/services/surgery">
                  {""} сложными хирургическими вмешательствами.
                </a>
                <br />
                <br />В клинике Dental Home мы гарантируем профессиональное и
                качественное лечение зубов. Наши врачи имеют богатый опыт работы
                и постоянно совершенствуют свои навыки. Мы используем только
                современное оборудование и материалы, чтобы обеспечить
                максимальную эффективность лечения. Обращайтесь к нам, и мы
                поможем вам сохранить здоровье зубов и достичь красивой улыбки!
              </p>
              <div className="form-screen">
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
            </main>
          </div>
          <div className="pc-content-c">
            <main className="main-content">
              {" "}
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
                  <Link className="link-prices" to="/doctors">
                    Врачи
                  </Link>
                </div>
                <div className="heading-container">
                  <h1 className="heading">Врачи клиники в Ивантеевке</h1>
                </div>
                <div className="divider-container">
                  <div className="divider"></div>
                </div>
              </div>
              <PcGallery
                imageSrc={DoctorOnePc}
                imageSrc2={DoctorTwoPc}
                imageSrc3={DoctorThreePc}
                openModal={openModal}
                imageSrc4={DoctorFourPc}
                imageSrc5={DoctorFivePc}
                imageSrc6={DoctorSixPc}
                imageSrc7={DoctorSevenPc}
                imageSrc8={DoctorEightPc}
                imageSrc9={DoctorNinePc}
              ></PcGallery>
              <h2 className="heading text-center mt-5">
                Профессиональные врачи-стоматологи Dental Home
              </h2>
              <p className="paragraph text-center mt-4">
                Dental Home - это современная клиника, которая предлагает
                качественные и профессиональные услуги по лечению зубов взрослых
                и детей. Наша команда состоит из опытных и квалифицированных
                врачей, которые постоянно совершенствуют свои навыки и
                используют только современное оборудование.
                <br />
                <br />
                Мы понимаем, что здоровье зубов - это не только красивая улыбка,
                но и залог общего благополучия. Поэтому мы предлагаем широкий
                спектр услуг, начиная от {""}
                <a href="https://dental-home.ru/services/hygiene">
                  {""} профилактики
                </a>
                {""} {""} и заканчивая
                {""}
                <a href="https://dental-home.ru/services/surgery">
                  {""} сложными хирургическими вмешательствами.
                </a>
                <br />
                <br />В клинике Dental Home мы гарантируем профессиональное и
                качественное лечение зубов. Наши врачи имеют богатый опыт работы
                и постоянно совершенствуют свои навыки. Мы используем только
                современное оборудование и материалы, чтобы обеспечить
                максимальную эффективность лечения. Обращайтесь к нам, и мы
                поможем вам сохранить здоровье зубов и достичь красивой улыбки!
              </p>
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
                        <span className="text">Цель визита</span>
                        <input
                          type="text"
                          placeholder="Цель визита"
                          value={visitGoal}
                          name="visitGoal"
                          onChange={(event) => setVisitGoal(event.target.value)}
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

export default DoctorsPage;
