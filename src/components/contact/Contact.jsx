import React from "react";
import "./contact.css";
import ContactSocials from "./ContactSocials";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ladkgek",
        "template_a2jlowp",
        form.current,
        "Qt9bmPDN72md5Jnr1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__direct">
          <h3>Contact With me</h3>
          <p>
            If you want to know more about me or my work or if you would just
            like to say hello send me a message, Id love to hear from you . . .
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id=""
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <ContactSocials />
      </div>
    </section>
  );
};

export default Contact;
