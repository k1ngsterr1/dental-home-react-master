import React from "react";
import { Bounce } from "react-awesome-reveal";

const whatsapp = require("../../assets/whatsapp.webp");

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const closeMenu = () => {
    // Function to close menu if needed
  };

  return (
    <div className="layout">
      {children}
      <a
        href="https://wa.me/79252229022?text=Здравствуйте!%20Хочу%20записаться%20к%20вам%20в%20клинику."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        onClick={closeMenu}
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          zIndex: 9999,
          color: "#202637",
          borderRadius: "50%",
          width: "64px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: "28px",
          cursor: "pointer",
          border: "none",
          outline: "none",
          transition: "background 0.2s",
          textDecoration: "none",
        }}
      >
        <Bounce delay={300} triggerOnce={true}>
          <img
            src={whatsapp}
            style={{
              width: "64px",
              height: "64px",
              objectFit: "contain",
            }}
            alt="WHATSAPP"
          />
        </Bounce>
      </a>
    </div>
  );
};

export default Layout;
