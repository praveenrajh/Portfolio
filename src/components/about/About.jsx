import React from "react";
import "./about.css";
import { CiMobile1 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { SiGoogletranslate } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem expedita consequatur porro doloremque dolorum
            nesciunt eos minima rem cupiditate sint deleniti iusto, dolores
            neque explicabo est dicta eaque ut. Excepturi.
          </p>
        </div>
        <div className="basic__info">
          <h3>Basic Info</h3>
          <div className="basic__details">
            <CiMail /> <small>dev.praveenraj@gmail.com</small>
          </div>
          <div className="basic__details">
            <CiMobile1 /> <small>+91 9514536371</small>
          </div>
          <div className="basic__details">
            <GoLocation /> <small>Kanyakumari, India</small>
          </div>
          <div className="basic__details">
            <SiGoogletranslate />
            <small>Tamil, English, Malayalam, Hindi</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
