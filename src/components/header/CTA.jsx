import React from "react";
import CV from "../../assets/resume_prh.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-primary">
        Get In Touch
      </a>
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
};

export default CTA;
