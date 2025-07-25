import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="about-page">
        <h1>About Us</h1>
        <p>This is the about page content.</p>
      </div>
      <Footer />
    </>
  );
};

export default About;
