import React, { useState } from "react";
import Header from "../Header.jsx";
import Footer from "../Footer.jsx";
import FirstSection from "../FirstSection.jsx";
import SectionTitle from "../SectionTitle.jsx";
import ItalianButton from "../italianButton.jsx";
import sectionImg from "../../images/PizzaBG2.jpg";
import "../../styles/contact.scss";

import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onEnter = () => {
    console.log(formData.message, formData.senderName);
    axios.post("/api/mail/", formData);
  };
  return (
    <div>
      <Header />
      <FirstSection title="Contact" text="SAY HELLO" sectionImg={sectionImg} />
      <div className="contactus jagged-border">
        <SectionTitle title="Say Hello" textColor="black" />
        <div className="SmallBlack contacth2">
          Get in Touch with Stefano’s Family Pizzeria!
        </div>
        <div className="XSmallBlack contactText">
          We’d love to hear from you! Whether you have a question, a comment, or
          just want to share your love for our pizza, we’re here to help. We
          value your feedback and are always looking to improve your experience.
          Feel free to fill out our online feedback form to let us know how
          we’re doing. Here's how to contact us: Phone (555) 123-4567, Email
          contact@stefanospizzeria.com. Thank you for choosing Stefano’s Family
          Pizzeria. We look forward to serving you soon!
        </div>
        <div className="contactForm">
          <div className="nameEmailFlex">
            <input
              className="nameInput XSmallBlack"
              name="senderName"
              onChange={(e) => onChange(e)}
              placeholder="Name"
              autoComplete="off"
            />
            <input
              className="emailInput XSmallBlack"
              name="email"
              onChange={(e) => onChange(e)}
              placeholder="E-mail"
              autoComplete="off"
            />
          </div>
          <input
            className="subject XSmallBlack"
            name="subject"
            onChange={(e) => onChange(e)}
            placeholder="Subject"
            autoComplete="off"
          />
          <textarea
            className="message XSmallBlack"
            name="message"
            onChange={(e) => onChange(e)}
            placeholder="Message"
            autoComplete="off"
          />
          <div onClick={() => onEnter()}>
            <ItalianButton text="SEND MESSAGE" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
