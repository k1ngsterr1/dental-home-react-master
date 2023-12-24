import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faChild } from "@fortawesome/free-solid-svg-icons";
import { faVk, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "./styles/menu_styles.css";

const childIcon: string = require("../../assets/child-icon.svg").default;
const logo: string = require("../../assets/logo_mob.svg").default;

interface MenuProps {
  isMenuOpen?: any;
  toggleMenu?: any;
  isMenuPcOpen?: any;
  togglePcMenu?: any;
  openModal?: any;
}

const services: string = require("../../assets/services.svg").default;

const Menu: React.FC<MenuProps> = ({
  isMenuOpen,
  toggleMenu,
  isMenuPcOpen,
  togglePcMenu,
  openModal,
}) => {
  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu(); // Toggle the menu to close it
    }
  };

  const closeMenuOpenModal = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const closePcMenu = () => {
    if (isMenuPcOpen) {
      togglePcMenu();
    }
  };

  function navigateToVk() {
    window.open("https://vk.com/dental_home");
  }

  function navigateToTg() {
    window.open("https://t.me/dental_home_clinik");
  }

  return (
    <div className={`menu-screen`}>
      <div className="menu-mob">
        <div className="divider-upper up"></div>
        <div className="menu-content">
          <div className="navigation-container">
            <div className="column-one">
              <Link to="/" className="golden-link">
                Главная
              </Link>
              <Link to="/clinics" className="golden-link l" onClick={closeMenu}>
                О клинике
              </Link>
              <Link
                to="/doctors"
                className="golden-link l "
                onClick={closeMenu}
              >
                Врачи
              </Link>
              <Link to="/prices" className="golden-link l">
                Цены
              </Link>
            </div>
            <div className="column-two">
              <Link to="/reviews" className="golden-link l" onClick={closeMenu}>
                Отзывы
              </Link>
              <Link
                to="/contacts"
                className="golden-link l"
                onClick={closeMenu}
              >
                Контакты
              </Link>
            </div>
          </div>
        </div>
        <div className="divider-upper"></div>
        <div className="geo-content">
          <div className="geo-row">
            <FontAwesomeIcon
              icon={faMapPin}
              className="geo-icon"
            ></FontAwesomeIcon>
            <span className="text">г. Ивантеевка, Советский проспект 5</span>
          </div>
          <div className="geo-row">
            <FontAwesomeIcon
              icon={faMapPin}
              className="geo-icon"
            ></FontAwesomeIcon>
            <span className="text" style={{ marginTop: "16px" }}>
              г. Ивантеевка, Рощинская 9
            </span>
          </div>
          <span className="dark schedule">Пн-Вс - 9:00-21:00</span>
          <div className="row-c">
            <a className="phone link" href="tel:+79252229022">
              +7 (925) 222-90-22
            </a>{" "}
            <div className="social-media">
              <FontAwesomeIcon
                icon={faVk}
                className="icon"
                onClick={navigateToVk}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faTelegram}
                style={{ marginLeft: "clamp(10px,4.6728vw,40px)" }}
                className="icon telegram"
                onClick={navigateToTg}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <div className="buttons">
          <ScrollLink className="button" to="form-screen" onClick={openModal}>
            Записать на прием
          </ScrollLink>
          <Link to="/children-dental" className="button child">
            Детская стоматология
          </Link>
        </div>
      </div>
      <div className="menu-pc">
        <div className="menu-content">
          <div className="column-one">
            <nav className="links">
              <Link to="/" className="golden-link">
                Главная
              </Link>
              <Link
                to="/clinics"
                style={{ cursor: "pointer" }}
                onClick={closePcMenu}
                className="golden-link l"
              >
                О клинике
              </Link>
              <Link
                to="/doctors"
                style={{ cursor: "pointer" }}
                onClick={closePcMenu}
                className="golden-link l"
              >
                Врачи
              </Link>
              <Link to="/prices" className="golden-link l">
                Цены
              </Link>
              <Link
                to="/reviews"
                style={{ cursor: "pointer" }}
                onClick={closePcMenu}
                className="golden-link l"
              >
                Отзывы{" "}
              </Link>
              <Link
                to="/contacts"
                style={{ cursor: "pointer" }}
                onClick={closePcMenu}
                className="golden-link l"
              >
                Контакты
              </Link>
              <div className="medias">
                <FontAwesomeIcon
                  icon={faVk}
                  className="icon vk"
                  onClick={navigateToVk}
                ></FontAwesomeIcon>
                <FontAwesomeIcon
                  icon={faTelegram}
                  style={{ marginLeft: "clamp(8px,0.83328vw,32px)" }}
                  className="icon telegram"
                  onClick={navigateToTg}
                ></FontAwesomeIcon>
              </div>
            </nav>
          </div>
          <div className="column-two">
            <div className="adresses">
              <div className="adress-column one">
                <div className="adress-row">
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="icon"
                  ></FontAwesomeIcon>
                  <span className="text">
                    Московская область, г. Ивантеевка, Советский проспект 5
                  </span>
                </div>
                <span className="text">Пн-Вс - 9:00-20:00</span>
                <span className="text parking">Бесплатная парковка</span>
              </div>
              <div
                className="adress-column"
                style={{ marginLeft: "clamp(-72px,-7.49952vw,-288px)" }}
              >
                <div className="adress-row">
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="icon"
                  ></FontAwesomeIcon>
                  <span className="text">
                    Московская область, г. Ивантеевка, Рощинская, 9
                  </span>
                </div>
                <span className="text">Пн-Вс - 9:00-21:00</span>
                <span className="text parking">Бесплатная парковка</span>
              </div>
            </div>
            <div className="services-columnn">
              <span className="text">Услуги</span>
              <Link to="/services/teeth-healing" className="golden-link">
                Лечение зубов
              </Link>
              <Link to="/services/whitening" className="golden-link l">
                Отбеливание
              </Link>
              <Link to="/services/hygiene" className="golden-link l">
                Гигиена полости рта
              </Link>
              <Link to="/services/diagnostic" className="golden-link l">
                Диагностика
              </Link>
              <Link to="/services/vinirs" className="golden-link l">
                Виниры и коронки
              </Link>
              <Link to="/services/surgery" className="golden-link l">
                Хирургия
              </Link>
              <Link to="/services/prosthetics" className="golden-link l">
                Протезирование зубов
              </Link>
              <Link to="/services/implants" className="golden-link l">
                Имплантация под ключ
              </Link>
              <Link to="/services/bite-correction" className="golden-link l">
                Исправление прикуса
              </Link>
              <Link to="/services/healing-in-sleep" className="golden-link l">
                Лечение зубов во сне
              </Link>
              <Link to="/services/teeth-crowns" className="golden-link l">
                Коронки
              </Link>
              <a href="tel:+79252229022" className="phone-number">
                +7 (925) 222-90-22
              </a>
            </div>
          </div>
          <div className="column-three">
            <div className="btn-container">
              <Link to="/children-dental" className="child-button">
                <img className="icon" src={childIcon}></img>
              </Link>
              <Link className="child-text" to="/children-dental">
                Детская стоматология
              </Link>
            </div>
          </div>
        </div>
        <ScrollLink to="services" onClick={closePcMenu}>
          <img className="services" src={services} alt="services"></img>
        </ScrollLink>
        <img src={logo} alt="logo" className="logo" />
        <button
          className="form-btn"
          onClick={openModal}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Записаться на прием
        </button>
      </div>
      <div className="menu-tablet">
        <div className="menu-content">
          <div className="nav-links">
            <img className="logo" src={logo} alt="logo"></img>
            <nav className="nav">
              <Link to="/" className="link">
                Главная
              </Link>
              <Link to="/clinics" className="link">
                О клинике
              </Link>
              <Link to="/doctors" className="link">
                Врачи
              </Link>
              <Link to="/prices" className="link">
                Цены
              </Link>
              <Link to="/works" className="link">
                Работы
              </Link>
              <Link to="/reviews" className="link">
                Отзывы
              </Link>
              <Link to="/contacts" className="link">
                Контакты
              </Link>
            </nav>
            <FontAwesomeIcon
              className="icon"
              icon={faVk}
              onClick={navigateToVk}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faTelegram}
              style={{ marginLeft: "clamp(10px,4.6728vw,40px)" }}
              className="icon telegram"
              onClick={navigateToTg}
            ></FontAwesomeIcon>
          </div>
          <div className="main-content">
            <div className="column-one">
              <div className="adresses">
                <div className="adress-one">
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="icon"
                  ></FontAwesomeIcon>
                  <span className="text">
                    Московская область, г. Ивантеевка, Советский проспект 5
                    <br />
                    <br />
                    Пн-Вс - 9:00-20:00
                    <br />
                    <br />
                    Бесплатная парковка
                  </span>
                </div>
                <div className="adress-one one">
                  <FontAwesomeIcon
                    icon={faMapPin}
                    className="icon"
                  ></FontAwesomeIcon>
                  <span className="text">
                    Московская область, г. Ивантеевка, Рощинская, 9
                    <br />
                    <br />
                    Пн-Вс - 9:00-21:00
                    <br />
                    <br />
                    Бесплатная парковка
                  </span>
                </div>
              </div>
              <div className="our-services">
                <div className="links">
                  <span className="text">Наши услуги</span>
                  <Link to="/" className="gold-link">
                    Лечение зубов
                  </Link>
                  <Link to="/" className="gold-link two">
                    Отбеливание
                  </Link>
                  <Link to="/" className="gold-link two">
                    Гигиена полости рта
                  </Link>
                  <Link to="/" className="gold-link two">
                    Лечение зубов во сне
                  </Link>
                  <Link to="/" className="gold-link two">
                    Виниры и коронки
                  </Link>
                  <Link to="/" className="gold-link two">
                    Лечение пародонта
                  </Link>
                  <Link to="/services/prothesis" className="gold-link two">
                    Протезирование зубов
                  </Link>
                  <Link to="/" className="gold-link two">
                    Протезирование зубов
                  </Link>
                  <Link to="/" className="gold-link two">
                    Диагностика
                  </Link>
                  <Link to="/" className="gold-link two">
                    Исправление прикуса
                  </Link>
                </div>
              </div>
              <Link className="child-button" to="/children-dental">
                Детская стоматология
              </Link>
              <a href="tel:+7 (925) 222-90-22" className="tel">
                +7 (925) 222-90-22
              </a>
            </div>
          </div>
          <div className="blue-bg"></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
