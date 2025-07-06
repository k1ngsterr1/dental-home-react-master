import React, { useEffect } from "react";
import { Bounce } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <script type="text/javascript">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.webvisor.org/metrika/tag_ww.js", "ym");
            
            ym(98696884, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/98696884"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </Helmet>
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
