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
];

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">project</div>
    </section>
  );
};

export default Projects;
