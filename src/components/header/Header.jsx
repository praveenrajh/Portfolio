import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="me">
          <img src={ME} alt="me" className="header__img" />
        </div>
        <h5>Hello I'm</h5>
        <h1>Praveen Raj S</h1>
        <h5 className="text-dark">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
