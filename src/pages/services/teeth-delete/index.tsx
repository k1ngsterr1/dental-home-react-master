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
import Reveal from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Popup from "reactjs-popup";
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
const surgeryPc = require("../../../assets/surgery_pc.webp");

const modalImage = require("../../../assets/example_modal.webp");
const logoMobile = require("../../../assets/logo_mob.svg").default;

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

const serviceOnePc = require("../../../assets/service_1.webp");
const serviceTwoPc = require("../../../assets/service_2.webp");
const ServiceThreePc = require("../../../assets/service_3.webp");
const ServiceFourPc = require("../../../assets/service_4.webp");

const serviceOneMob = require("../../../assets/service_mob_01.webp");
const serviceTwoMob = require("../../../assets/service_mob_02.webp");
const serviceThreeMob = require("../../../assets/service_mob_03.webp");
const serviceFourMob = require("../../../assets/service_mob_04.webp");

const TeethDelete = () => {
  const [thankYou, setThankYou] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuPcOpen, setIsMenuPcOpen] = useState(false);

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
        <title>Удаление зуба в Ивантеевке | Dental Home</title>
        <meta
          property="og:title"
          content="Удаление зуба в Ивантеевке | Dental Home"
        ></meta>
        <meta
          property="og:description"
          content="Безболезненное удаление зуба в стоматологии Dental Home. Опытные стоматологи и современное оборудование. Записывайтесь на прием уже сегодня! "
        ></meta>
        <meta
          name="description"
          content="Безболезненное удаление зуба в стоматологии Dental Home. Опытные стоматологи и современное оборудование. Записывайтесь на прием уже сегодня! "
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
            <title>Удаление зуба в Ивантеевке | Dental Home</title>
            <meta
              property="og:title"
              content="Удаление зуба в Ивантеевке | Dental Home"
            ></meta>
            <meta
              property="og:description"
              content="Безболезненное удаление зуба в стоматологии Dental Home. Опытные стоматологи и современное оборудование. Записывайтесь на прием уже сегодня! "
            ></meta>
            <meta
              name="description"
              content="Безболезненное удаление зуба в стоматологии Dental Home. Опытные стоматологи и современное оборудование. Записывайтесь на прием уже сегодня! "
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
                  <Link to="/services" className="link">
                    Услуги
                  </Link>
                  <div className="circle"></div>
                  <Link to="/services/teeth-delete" className="link active">
                    Удаление зуба
                  </Link>
                </div>
                <h1 className="heading">Удаление зуба в Ивантеевке</h1>
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
                    Удаление зуба в Ивантеевке: рекомендации и советы{" "}
                  </h3>
                  <p className="information-paragraph">
                    Удаление зуба - это процедура, которую могут назначить
                    стоматологи в различных случаях, например, при кариесе,
                    периодонтите, травме или перед имплантацией зубов. Однако,
                    после удаления зуба могут возникнуть некоторые проблемы,
                    такие как болезнь десны или боль. В этом материале мы
                    расскажем о том, что делать после удаления зуба, чтобы
                    быстрее заживить десну и избежать болей.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Удаление зуба в Ивантеевке: как подготовиться{" "}
                  </h3>
                  <p className="information-paragraph">
                    Перед удалением зуба врач проведет осмотр и даст все
                    необходимые рекомендации. Если у вас есть какие-то
                    хронические заболевания или вы принимаете какие-либо
                    лекарства, обязательно сообщите об этом своему врачу. Также,
                    если вы предпочитаете удаление зуба под наркозом, уточните у
                    врача возможность проведения данной процедуры.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Удаление зуба в Ивантеевке: что делать после процедуры
                  </h3>
                  <p className="information-paragraph">
                    После удаления зуба важно соблюдать рекомендации врача,
                    чтобы избежать осложнений и быстрее заживить десну.
                    Некоторые основные рекомендации включают в себя: <br />{" "}
                    <br />
                    1. Не питаться горячей и твердой пищей в первые несколько
                    часов после процедуры. Лучше выбирать мягкие и холодные
                    продукты, например, йогурт или мороженое.
                    <br /> <br />
                    2. Избегать курения и употребления алкоголя, так как это
                    может замедлить заживление десны.
                    <br /> <br />
                    3. Не использовать солёную воду для ополаскивания рта, так
                    как это может вызвать раздражение десны. Лучше использовать
                    мягкий ротокан или отвар трав.
                    <br /> <br />
                    4. Избегать физических нагрузок и активных спортивных
                    занятий в первые несколько дней после процедуры.
                    <br /> <br />
                    5. Регулярно принимать препараты, которые назначил врач,
                    чтобы избежать боли и ускорить заживление.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Боль после удаления зуба: что делать
                  </h3>
                  <p className="information-paragraph">
                    После удаления зуба может возникнуть боль или дискомфорт,
                    которые могут быть вызваны различными факторами. Некоторые
                    из них включают в себя:
                    <br /> <br />
                    - Отек десны в месте удаления зуба
                    <br /> <br />
                    - Инфекция
                    <br /> <br />
                    - Кровотечение
                    <br /> <br />
                    Если у вас возникла боль после удаления зуба, рекомендуется
                    принимать препараты, которые назначил врач, и следовать всем
                    рекомендациям по уходу за ротовой полостью. Если боли не
                    утихают в течение нескольких дней, обязательно обратитесь к
                    врачу.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Сложное удаление зуба: что нужно знать
                  </h3>
                  <p className="information-paragraph">
                    В некоторых случаях удаление зуба может быть сложным
                    процессом, особенно если зуб находится в труднодоступном
                    месте или имеет сложную структуру. В таких случаях может
                    потребоваться удаление зуба под общим наркозом или
                    использование других методов, например, удаление каналов
                    зуба. В любом случае, врач проведет все необходимые меры для
                    минимизации болей и рисков.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Удаление верхнего зуба: особенности процедуры
                  </h3>
                  <p className="information-paragraph">
                    Удаление верхнего зуба может потребовать дополнительных мер
                    предосторожности, так как верхняя челюсть находится близко к
                    глазам и мозгу. Однако, если вы следуете всем рекомендациям
                    врача и соблюдаете правила ухода за ротовой полостью после
                    процедуры, то заживление десны будет проходить без проблем.
                  </p>
                </section>
                <div className="divider"></div>
                <section className="information">
                  <h3 className="information-heading">
                    Удаление зуба в Ивантеевке: обратитесь к нам
                  </h3>
                  <p className="information-paragraph">
                    Если вам нужно удаление зуба в Ивантеевке, обратитесь к нам
                    в стоматологию Dental Home. Наши специалисты проведут все
                    необходимые меры для минимизации болей и рисков, а также
                    дадут рекомендации по уходу за ротовой полостью после
                    процедуры. Удаление зуба - это серьезная процедура, поэтому
                    важно доверить ее профессионалам.
                  </p>
                </section>
                <div className="divider"></div>
                <div className="plate">
                  <section className="tab-one">
                    <h5 className="plate-heading">
                      <a href="https://dental-home.ru/services/surgery">
                        Хирургия
                      </a>
                    </h5>
                    <span className="text">
                      Удаление временного зуба I степени сложности
                    </span>
                    <span className="price">От 1.200₽</span>
                  </section>
                  <section className="tab-two">
                    <span className="text">
                      Удаление временного зуба II степени сложности
                    </span>
                    <span className="price">От 2.100₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление временного зуба с сохраненными корнями <br />{" "}
                      <br /> (ХР-А16.07.001.001.03)
                    </span>
                    <span className="price">От 2.650₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление постоянного зуба простое <br /> <br />{" "}
                      (ХР-А16.07.001.002.01)
                    </span>
                    <span className="price">От 2.650₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление постоянного зуба I степени сложности <br />{" "}
                      <br /> (ХР-А16.07.001.002.02)
                    </span>
                    <span className="price">От 4.200₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление постоянного зуба II степени сложности <br />{" "}
                      <br /> (ХР-А16.07.001.002.03)
                    </span>
                    <span className="price">От 5.800₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление постоянного зуба III степени сложности <br />{" "}
                      <br /> (ХР-А16.07.001.002.04)
                    </span>
                    <span className="price">От 6.800₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление зуба сложное с разъединением корней <br /> <br />{" "}
                      (ХР-А16.07.001:003 )
                    </span>
                    <span className="price">От 7.800₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Резекция верхушки корня (1 корень) <br /> <br />{" "}
                      (ХР-А16.07.007)
                    </span>
                    <span className="price">От 15.800₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      {" "}
                      Вскрытие и дренирование одонтогенного абсцесса <br />{" "}
                      <br /> (ХР-А16.07.012)
                    </span>
                    <span className="price">От 1.600₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      {" "}
                      Отсроченный кюретаж лунки удаленного зуба <br /> <br />{" "}
                      (ХР-А16.07.013)
                    </span>
                    <span className="price">От 1.600₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление новообразований челюстно-лицевой области <br />{" "}
                      <br /> (ХР-А16.07.013)
                    </span>
                    <span className="price">От 8.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Цистотомия, цистэктомия <br /> <br /> (ХР-А16.07.016){" "}
                    </span>
                    <span className="price ">От 8.400₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Временное шинирование при заболеваниях пародонта ( 1
                      единица) <br /> <br /> (ХР-А16.07.019)
                    </span>
                    <span className="price ">От 1.600₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Операция удаления ретинированного, дистопированного или
                      сверхкомплектного зуба <br /> <br /> (ХР-А16.07.024)
                    </span>
                    <span className="price ">От 13.700₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление имплантата <br /> <br /> (ХР-А16.07.024.001){" "}
                    </span>
                    <span className="price ">От 7.800₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Пластика уздечки языка <br /> <br /> (ХР-А16.07.044){" "}
                    </span>
                    <span className="price ">От 3.700₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Пластика уздечки губы <br /> <br /> (ХР-А16.07.045){" "}
                    </span>
                    <span className="price ">От 3.700₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Вестибулопластика <br /> <br /> (ХР-А16.07.046){" "}
                    </span>
                    <span className="price ">От 10.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Лечение перикоронита (промывание, рассечение и/или
                      иссечение капюшона) <br /> <br /> (ХР-А16.07.058)
                    </span>
                    <span className="price ">От 3.700₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Остановка луночного кровотечения с использованием
                      гемостатических материалов <br /> <br />{" "}
                      (ХР-А16.07.095.002)
                    </span>
                    <span className="price ">От 750₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Закрытие соустья с гайморовой пазухой <br /> <br />{" "}
                      (ХР-А16.07.096.001)
                    </span>
                    <span className="price ">От 5.800₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Наложение шва на слизистую оболочку рта <br /> <br />{" "}
                      (ХР-А16.07.097)
                    </span>
                    <span className="price ">От 550₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Открытый кюретаж при заболеваниях пародонта в области 1
                      зуба
                    </span>
                    <span className="price ">От 2.650₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Закрытый кюретаж при заболеваниях пародонта в области 1
                      зуба
                    </span>
                    <span className="price ">От 2.100₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Пластика мягких тканей в области зуба или имплантата
                      <br /> <br /> (ХР-А16:07.038)
                    </span>
                    <span className="price ">От 10.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Снятие швов <br /> <br /> (ХР-А18){" "}
                    </span>
                    <span className="price ">От 1.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Антисептическая обработка патологических карманов <br />{" "}
                      <br />
                      (ХР-А19)
                    </span>
                    <span className="price ">От 1.300₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Удаление экзостоза в области 1 зуба <br /> <br />{" "}
                      (ХР--А21)
                    </span>
                    <span className="price ">От 1.500₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Хирургическое удлинение в области 1 зуба <br /> <br />{" "}
                      (ХР-А20)
                    </span>
                    <span className="price ">От 6.800₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Закрытый кюретаж в области 1 зуба
                    </span>
                    <span className="price ">От 20.000₽</span>
                  </section>
                  <section className="tab-three">
                    <span className="text">
                      Закрытие рецессии в обл. 1-3 рядом стоящих зубов <br />{" "}
                      <br /> (ХР-А23)
                    </span>
                    <span className="price last">От 20.000₽</span>
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
                    <Link to="/services/teeth-delete" className="link active">
                      Удаление зуба
                    </Link>
                  </div>
                  <h1 className="heading" style={{ width: "30%" }}>
                    Удаление зуба в Ивантеевке
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
                  src={surgeryPc}
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
                    <h3 className="heading-info">
                      Удаление зуба в Ивантеевке: рекомендации и советы{" "}
                    </h3>
                    <p className="p-info">
                      Удаление зуба - это процедура, которую могут назначить
                      стоматологи в различных случаях, например, при кариесе,
                      периодонтите, травме или перед имплантацией зубов. Однако,
                      после удаления зуба могут возникнуть некоторые проблемы,
                      такие как болезнь десны или боль. В этом материале мы
                      расскажем о том, что делать после удаления зуба, чтобы
                      быстрее заживить десну и избежать болей.
                    </p>
                  </div>
                  <div className="information-two mt-5">
                    <h3 className="heading-info two">
                      Удаление зуба в Ивантеевке: как подготовиться{" "}
                    </h3>
                    <p className="p-info two">
                      Перед удалением зуба врач проведет осмотр и даст все
                      необходимые рекомендации. Если у вас есть какие-то
                      хронические заболевания или вы принимаете какие-либо
                      лекарства, обязательно сообщите об этом своему врачу.
                      Также, если вы предпочитаете удаление зуба под наркозом,
                      уточните у врача возможность проведения данной процедуры.
                    </p>
                  </div>
                  <div className="information-two mt-5">
                    <h3 className="heading-info two">
                      {" "}
                      Удаление зуба в Ивантеевке: что делать после процедуры
                    </h3>
                    <p className="p-info two">
                      После удаления зуба важно соблюдать рекомендации врача,
                      чтобы избежать осложнений и быстрее заживить десну.
                      Некоторые основные рекомендации включают в себя:
                      <br />
                      <br />
                      1. Не питаться горячей и твердой пищей в первые несколько
                      часов после процедуры. Лучше выбирать мягкие и холодные
                      продукты, например, йогурт или мороженое. <br />
                      <br />
                      2. Избегать курения и употребления алкоголя, так как это
                      может замедлить заживление десны. <br />
                      <br />
                      3. Не использовать солоную воду для ополаскивания рта, так
                      как это может вызвать раздражение десны. Лучше
                      использовать мягкий ротокан или отвар трав. <br />
                      <br />
                      4. Избегать физических нагрузок и активных спортивных
                      занятий в первые несколько дней после процедуры. <br />
                      <br />
                      5. Регулярно принимать препараты, которые назначил врач,
                      чтобы избежать боли и ускорить заживление.
                    </p>
                  </div>
                  <div className="information-two mt-5">
                    <h3 className="heading-info two">
                      Боль после удаления зуба: что делать{" "}
                    </h3>
                    <p className="p-info two">
                      После удаления зуба может возникнуть боль или дискомфорт,
                      которые могут быть вызваны различными факторами. Некоторые
                      из них включают в себя:
                      <br /> <br />
                      - Отек десны в месте удаления зуба
                      <br /> <br />
                      - Инфекция
                      <br /> <br />
                      - Кровотечение
                      <br /> <br />
                      Если у вас возникла боль после удаления зуба,
                      рекомендуется принимать препараты, которые назначил врач,
                      и следовать всем рекомендациям по уходу за ротовой
                      полостью. Если боли не утихают в течение нескольких дней,
                      обязательно обратитесь к врачу.
                    </p>
                  </div>
                  <div className="information-two mt-5">
                    <h3 className="heading-info two">
                      Сложное удаление зуба: что нужно знать
                    </h3>
                    <p className="p-info two">
                      В некоторых случаях удаление зуба может быть сложным
                      процессом, особенно если зуб находится в труднодоступном
                      месте или имеет сложную структуру. В таких случаях может
                      потребоваться удаление зуба под общим наркозом или
                      использование других методов, например, удаление каналов
                      зуба. В любом случае, врач проведет все необходимые меры
                      для минимизации болей и рисков.
                    </p>
                  </div>
                  <div className="information-two mt-5">
                    <h3 className="heading-info two">
                      Удаление верхнего зуба: особенности процедуры
                    </h3>
                    <p className="p-info two">
                      Удаление верхнего зуба может потребовать дополнительных
                      мер предосторожности, так как верхняя челюсть находится
                      близко к глазам и мозгу. Однако, если вы следуете всем
                      рекомендациям врача и соблюдаете правила ухода за ротовой
                      полостью после процедуры, то заживление десны будет
                      проходить без проблем.
                    </p>
                  </div>
                  <div className="information-two mt-5">
                    <h3 className="heading-info two">
                      Удаление зуба в Ивантеевке: обратитесь к нам{" "}
                    </h3>
                    <p className="p-info two">
                      Если вам нужно удаление зуба в Ивантеевке, обратитесь к
                      нам в стоматологию Dental Home. Наши специалисты проведут
                      все необходимые меры для минимизации болей и рисков, а
                      также дадут рекомендации по уходу за ротовой полостью
                      после процедуры. Удаление зуба - это серьезная процедура,
                      поэтому важно доверить ее профессионалам.
                    </p>
                  </div>
                  <div className="price-tab" id="prices">
                    <h4 className="price-heading">
                      <a href="https://dental-home.ru/services/surgery">
                        Хирургия
                      </a>
                    </h4>
                    <div className="prices">
                      <div className="price-row">
                        <span className="text">
                          Удаление временного зуба I степени сложности
                        </span>
                        <span className="price">От 1.600₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление временного зуба II степени сложности
                        </span>
                        <span className="price">От 2.100₽</span>
                      </div>
                      <div className="price-row ">
                        <span className="text">
                          Удаление временного зуба с сохраненными корнями
                          <br /> <br /> (ХР-А16.07.001.001.03)
                        </span>
                        <span className="price">От 2.650₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление постоянного зуба простое <br /> <br />{" "}
                          (ХР-А16.07.001.002.01)
                        </span>
                        <span className="price">От 2.650₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">Удаление вкладки</span>
                        <span className="price">От 4.200₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление постоянного зуба I степени сложности <br />{" "}
                          <br /> (ХР-А16.07.001.002.02)
                        </span>
                        <span className="price">От 4.200₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление постоянного зуба II степени сложности <br />{" "}
                          <br /> (ХР-А16.07.001.002.03)
                        </span>
                        <span className="price">От 5.800₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление постоянного зуба III степени сложности <br />{" "}
                          <br /> (ХР-А16.07.001.002.04)
                        </span>
                        <span className="price">От 6.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление зуба сложное с разъединением корней <br />{" "}
                          <br /> (ХР-А16.07.001:003)
                        </span>
                        <span className="price">От 7.800₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Резекция верхушки корня (1 корень) <br /> <br />{" "}
                          (ХР-А16.07.007)
                        </span>
                        <span className="price">От 15.800₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          {" "}
                          Вскрытие и дренирование одонтогенного абсцесса <br />{" "}
                          <br /> (ХР-А16.07.012)
                        </span>
                        <span className="price">От 1.600₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          {" "}
                          Отсроченный кюретаж лунки удаленного зуба <br />{" "}
                          <br /> (ХР-А16.07.013)
                        </span>
                        <span className="price">От 1.600₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление новообразований челюстно-лицевой области{" "}
                          <br /> <br /> (ХР-А16.07.013 )
                        </span>
                        <span className="price">От 5.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Цистотомия, цистэктомия <br /> <br /> (ХР-А16.07.016){" "}
                        </span>
                        <span className="price ">От 8.400₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Временное шинирование при заболеваниях пародонта ( 1
                          единица) <br /> <br /> (ХР-А16.07.019)
                        </span>
                        <span className="price ">От 1.600₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Операция удаления ретинированного, дистопированного
                          или сверхкомплектного зуба <br /> <br />{" "}
                          (ХР-А16.07.024)
                        </span>
                        <span className="price ">От 13.700₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление имплантата <br /> <br />
                          (ХР-А16.07.024.001){" "}
                        </span>
                        <span className="price ">От 7.800₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Пластика уздечки языка <br /> <br /> (ХР-А16.07.044){" "}
                        </span>
                        <span className="price ">От 3.700₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Пластика уздечки губы <br /> <br /> (ХР-А16.07.045){" "}
                        </span>
                        <span className="price ">От 3.700₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Вестибулопластика <br /> <br /> (ХР-А16.07.046){" "}
                        </span>
                        <span className="price ">От 10.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Лечение перикоронита (промывание, рассечение и/или
                          иссечение капюшона) <br /> <br /> (ХР-А16.07.058)
                        </span>
                        <span className="price ">От 2.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Остановка луночного кровотечения с использованием
                          гемостатических материалов <br /> <br />{" "}
                          (ХР-А16.07.095.002)
                        </span>
                        <span className="price ">От 750₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Закрытие соустья с гайморовой пазухой <br /> <br />{" "}
                          (ХР-А16.07.096.001 )
                        </span>
                        <span className="price ">От 5.800₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Наложение шва на слизистую оболочку рта <br /> <br />{" "}
                          (ХР-А16.07.097)
                        </span>
                        <span className="price ">От 550₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Открытый кюретаж при заболеваниях пародонта в области
                          1 зуба <br /> <br /> (ХР-А16:07.038)
                        </span>
                        <span className="price ">От 2.650₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Закрытый кюретаж при заболеваниях пародонта в области
                          1 зуба
                        </span>
                        <span className="price ">От 2.100₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Пластика мягких тканей в области зуба или имплантата{" "}
                          <br /> <br /> (ХР-А16:07.040)
                        </span>
                        <span className="price ">От 10.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Снятие швов <br /> <br /> (ХР-А18){" "}
                        </span>
                        <span className="price ">От 1.000₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Антисептическая обработка патологических карманов{" "}
                          <br /> <br /> (ХР-А19)
                        </span>
                        <span className="price ">От 1.200₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Удаление экзостоза в области 1 зуба <br /> <br />{" "}
                          (ХР--А21)
                        </span>
                        <span className="price ">От 2.500₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Хирургическое удлинение в области 1 зуба
                        </span>
                        <span className="price ">От 6.800₽</span>
                      </div>
                      <div className="price-row">
                        <span className="text">
                          Закрытый кюретаж в области 1 зуба <br /> <br />{" "}
                          (ХР-А22)
                        </span>
                        <span className="price last">От 20.000₽</span>
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

export default TeethDelete;
