import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./styles/gallery_styles.css";

// Hardcoded images - placeholders for now, images will be added later
const pavelImage = require("../../assets/3.webp");
const elenaImage = require("../../assets/elena_pc.webp");
const evgeniyImage = require("../../assets/orthoped_pc.webp");
const arsenImage = require("../../assets/arsen.webp");
const daryaImage = require("../../assets/darya.webp");
const katyaImage = require("../../assets/katya.webp");
const denisImage = require("../../assets/denis.webp");

const tatjanaImage = require("../../assets/tanya_new.webp");
const tatjanaImage2 = require("../../assets/tanya.webp");

const marinaImage = require("../../assets/marina_pc.webp");
const karenImage = require("../../assets/karen_pc.webp");
const placeholderImage = require("../../assets/1.webp"); // Placeholder for new doctors

type Swiper = any;

SwiperCore.use([Navigation, Pagination]);

interface GalleryProps {
  openModal?: any;
}

const Gallery: React.FC<GalleryProps> = ({ openModal }) => {
  const swiperRef = React.useRef<Swiper | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="gallery">
      <div className="gallery-nav">
        <button className="previous" onClick={handlePrev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next" onClick={handleNext}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <Swiper
        spaceBetween={30} // Увеличиваем горизонтальные отступы между карточками
        slidesPerView={1}
        threshold={0.5}
        navigation={false} // Disable Swiper navigation (we're using custom buttons)
        pagination={{ clickable: true }}
        direction="horizontal"
        className="mySwiper2"
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
      >
        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={pavelImage} alt="Doctor" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Тамаров Павел Сергеевич</h3>
            <p className="doctor-position">
              Главный врач, ортопед, хирург, имплантолог
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={elenaImage} alt="Doctor" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Терехова Елена Юрьевна</h3>
            <p className="doctor-position">Стоматолог терапевт</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={evgeniyImage} alt="Doctor" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Браткеев Евгений Викторович</h3>
            <p className="doctor-position">Ортопед</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={arsenImage} alt="Doctor" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Рабаданов Арсен Залибегович</h3>
            <p className="doctor-position">Стоматолог-хирург-имплантолог</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={daryaImage} alt="Doctor" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Зайцева Дарья Никитична</h3>
            <p className="doctor-position">Врач-стоматолог-пародонтолог</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={marinaImage} alt="Doctor" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Батыгина Марина Сергеевна</h3>
            <p className="doctor-position">Гигиенист</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={tatjanaImage2} alt="Doctor" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Кузьминова Татьяна Евгеньевна</h3>
            <p className="doctor-position">
              Врач высшей категории стоматолог-терапевт микроскопист
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={tatjanaImage} alt="Doctor" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Борисова Татьяна Владимировна</h3>
            <p className="doctor-position">
              Детский стоматолог, врач терапевт общей практики
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={katyaImage} alt="Doctor" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Ковалева Екатерина Олеговна</h3>
            <p className="doctor-position">Врач стоматолог-ортодонт</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={denisImage} alt="Doctor" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Кузнецов Денис Максимович</h3>
            <p className="doctor-position">
              Заведующий терапевтическим отделением Врач-стоматолог
              терапевт-микроскопист высшей категории!
            </p>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="dentist-card-2">
            <div className="button-image-container">
              <button className="doctor-btn" onClick={openModal}>
                <span className="text">Записаться</span>
              </button>
              <img src={imageSrcNine} alt="Doctor 3" className="doctor-image" />
            </div>
            <h3 className="doctor-name">Мхитарян Карен Мартиросович</h3>
            <p className="doctor-position">
              врач стоматолог . Хирург , имплантолог
            </p>
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className="link-container">
        {/* <a href="" className="blue-link">
          Все Врачи
        </a> */}
      </div>
    </div>
  );
};

export default Gallery;
