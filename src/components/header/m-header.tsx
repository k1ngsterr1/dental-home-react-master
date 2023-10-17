"use client";
import React, { useState, useEffect } from "react";

import "./styles/header_styles.css";
import Menu from "../menu/Menu";

import Hamburger from "hamburger-react";
import { Fade, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isMenuOpen?: any;
  isMenuPcOpen?: any;
  toggleMenu?: any;
  togglePcMenu?: any;
  openModal?: any;
  consoleLog?: () => void;
}

const logo: string = require("../../assets/logo_mob.svg").default;

const Mheader: React.FC<HeaderProps> = ({
  isMenuOpen,
  toggleMenu,
  isMenuPcOpen,
  togglePcMenu,
  openModal,
  consoleLog,
}) => {
  if (isMenuOpen || isMenuPcOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "";
  }

  const navigate = useNavigate();

  const [scrollAmount, setScrollAmount] = useState(100);

  function navigateToMain() {
    navigate("/");
  }

  useEffect(() => {
    if (isMenuOpen || isMenuPcOpen) {
      document.body.style.overflowY = "hidden";
      // window.scrollBy(0, scrollAmount);
      // window.scrollTo(0, 0);
    } else {
      document.body.style.overflowY = "";
    }

    // window.addEventListener("scroll", handleScroll);
    // window.removeEventListener("scroll", handleScroll);

    return () => {
      document.body.style.overflowY = ""; // Reset when the component unmounts
    };
  }, [isMenuOpen, isMenuPcOpen]);

  // {isMenuOpen && <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
  return (
    <>
      <img
        src={logo}
        alt="logotype-z"
        className="logotype-z"
        onClick={navigateToMain}
        style={{ cursor: "pointer" }}
      ></img>

      <div
        className="hamburger-button-z"
        style={{
          position: isMenuOpen ? "sticky" : "static",
          zIndex: "20000",
        }}
      >
        <Hamburger
          color={isMenuOpen ? "#E6C96B" : "#E6C96B"}
          toggled={isMenuOpen ? true : false}
          onToggle={toggleMenu}
        ></Hamburger>
      </div>
      {isMenuOpen && (
        <Fade delay={300}>
          <Menu
            openModal={openModal}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
          />{" "}
        </Fade>
      )}
    </>
  );
};

export default Mheader;
