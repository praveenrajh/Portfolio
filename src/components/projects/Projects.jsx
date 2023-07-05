import React from "react";
import "./projects.css";
import IMG1 from "../../assets/img.jpg";
import IMG2 from "../../assets/img.jpg";
import IMG3 from "../../assets/img.jpg";
import IMG4 from "../../assets/img.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Personel Portfoilo",
    github: "https://github.com",
    demo: "https://phenomenal-smakager-5b7bce.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "E-Commerce",
    github: "https://github.com",
    demo: "https://phenomenal-smakager-5b7bce.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Booking",
    github: "https://github.com",
    demo: "https://phenomenal-smakager-5b7bce.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Bulk Email",
    github: "https://github.com",
    demo: "https://phenomenal-smakager-5b7bce.netlify.app/",
  },
  {
    id: 5,
    image: IMG4,
    title: "Therla",
    github: "https://github.com",
    demo: "https://phenomenal-smakager-5b7bce.netlify.app/",
  },
  {
    id: 6,
    image: IMG4,
    title: "Xoxo",
    github: "https://github.com",
    demo: "https://phenomenal-smakager-5b7bce.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container">
        <div className=" project__container">
          {data.map(({ image, title, github, demo }) => {
            return (
              <div className="project__card">
                <img src={image} alt="Card Image 1" />
                <div className="project__description">
                  <h3>{title}</h3>
                  <p>Description of Card 1 goes here.</p>
                </div>
                <div className="project__card-buttons">
                  <button>Github</button>
                  <button>Live</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
