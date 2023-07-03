import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { MdCallEnd } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const ContactSocials = () => {
  return (
    <div className="contact__socials">
      <a
        href="mailto:dev.praveenraj@gmail.com"
        className="contact__socials-items"
      >
        <BiLogoGmail />
        {/* <h5>Gmail</h5> */}
      </a>
      <a href="tel:+919514536371" className="contact__socials-items">
        <MdCallEnd />
        {/* <h5>Phone</h5> */}
      </a>
      <a
        href="https://www.linkedin.com/in/praveen-rajh"
        target="_blank"
        className="contact__socials-items"
      >
        <FaLinkedin />
        {/* <h5>LinkedIN</h5> */}
      </a>
      <a
        href="https://www.github.com/praveenrajh"
        target="_blank"
        className="contact__socials-items"
      >
        <BsGithub />
        {/* <h5>GitHub</h5> */}
      </a>
    </div>
  );
};

export default ContactSocials;
