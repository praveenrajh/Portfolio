import React from "react";
import "./skills.css";
import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import JS from "../../assets/javascript.svg";
import BOOTSTRAP from "../../assets/bootstrap.svg";
import REACT from "../../assets/react.svg";
import REDUX from "../../assets/redux.svg";
import MONGO from "../../assets/mongodb.svg";
import NODE from "../../assets/nodejs.svg";
import GIT from "../../assets/git.svg";
import POSTMAN from "../../assets/postman.svg";
import VSCODE from "../../assets/visual-studio-code.svg";
import NETLIFY from "../../assets/netlify.svg";

const skData = [
  {
    id: 1,
    image: HTML,
    title: "HTML",
  },
  {
    id: 2,
    image: CSS,
    title: "CSS",
  },
  {
    id: 3,
    image: JS,
    title: "Java Script",
  },
  {
    id: 4,
    image: BOOTSTRAP,
    title: "Bootstrap",
  },
  {
    id: 5,
    image: REACT,
    title: "React Js",
  },
  {
    id: 6,
    image: REDUX,
    title: "Redux",
  },
  {
    id: 7,
    image: MONGO,
    title: "Mongo DB",
  },
  {
    id: 8,
    image: NODE,
    title: "Node JS",
  },
  {
    id: 9,
    image: GIT,
    title: "GIT",
  },
  {
    id: 10,
    image: POSTMAN,
    title: "Postman",
  },
  {
    id: 11,
    image: VSCODE,
    title: "VS Code",
  },
  {
    id: 12,
    image: NETLIFY,
    title: "Netlify",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <h5>Here comes my key</h5>
      <h2>Skills</h2>

      <div className="skills__container container grid section__border">
        {skData.map(({ image, title }) => {
          return (
            <div className="skills__content">
              <img src={image} alt={title} className="skills__img" />
              <p className="skills__title">{title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
