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
            neque explicabo est dicta eaque ut. Excepturi. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
