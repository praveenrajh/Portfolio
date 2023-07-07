import React from "react";
import "./projects.css";
import IMG1 from "../../assets/1.PNG";
import IMG2 from "../../assets/mern.PNG";
import IMG3 from "../../assets/mern.PNG";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Mailey",
    github: "https://github.com",
    demo: "https://unique-rugelach-af3843.netlify.app/",
    description:
      "Mailey is designed to streamline the process of sending bulk emails to a large number of recipients with ease and efficiency.",
  },
  {
    id: 2,
    image: IMG2,
    title: "Shoppolita",
    github: "https://github.com",
    demo: "https://phenomenal-smakager-5b7bce.netlify.app/",
    description:
      "Shoppolita is designed to provide a comprehensive and userfriendly platform for online shopping and selling products.",
  },
  {
    id: 3,
    image: IMG3,
    title: "Rentley",
    github: "https://github.com",
    demo: "https://phenomenal-smakager-5b7bce.netlify.app/",
    description:
      "Rentley is designed to facilitate the process of renting hotel rooms and managing bookings.",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent</h5>
      <h2>Projects</h2>
      <div className="container">
        <div className=" project__container">
          {data.map(({ image, title, github, demo, description }) => {
            return (
              <div className="project__card">
                <img
                  src={image}
                  alt="Card Image 1"
                  className="project__card-img"
                />
                <div className="project__description">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <div className="project__card-buttons">
                  <button onClick={github}>GitHub</button>
                  <button onClick={demo}>Live</button>
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
