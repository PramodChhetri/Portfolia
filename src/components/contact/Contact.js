import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import HamroDreamAuto from "../../assets/hamrodreamlogo.jpg";
import SangeetFarm from "../../assets/sangeetfarm.jpg";
import facebookIcon from "../../assets/facebook-icon.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import githubIcon from "../../assets/github.png";
import whatsappIcon from "../../assets/whatsapp.png";
import linkedinIcon from "../../assets/linkedin.png";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm('service_o6y0m6d', 'template_n6y4frg', form.current, 'ybdl8jjH68IKs3Yeo') 
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          clearForm();
          setResultMessage('Email sent successfully!');
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
          setResultMessage('Failed to send email. Please try again.');
        }
      );
  };

  const clearForm = () => {
    form.current.reset();
  };

  return (
    <>
      <section id="contactPage">
        <div id="clients">
          <h1 className="contactPageTitle">Clients</h1>
          <p className="clientDesc">
            I have had the opportunity with some clients as a freelancer. Some of the notable clients I have worked with include
          </p>
          <div className="clientImgs">
            <img src={HamroDreamAuto} alt="Clients" className="clientImg" />
            <img src={SangeetFarm} alt="Clients" className="clientImg" />
          </div>
        </div>
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <p className="contactDesc">Kindly fill out the form below to initiate discussions regarding potential work opportunities and inquiries.</p>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" name="your_name" placeholder="Your Name" className="name" required />
            <input type="email" name="your_email" placeholder="Your Email" className="email" required />
            <textarea name="message" rows="10" placeholder="Your Message" className="msg" required></textarea>
            <button className="submitBtn" type="submit" value="Send" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send'}
            </button>
            </form>
          {resultMessage && <p className={resultMessage.includes('failed') ? 'error-message' : 'success-message'}>{resultMessage}</p>}
          <div className="links">
            <a href="https://www.facebook.com/Pramod.Chhetri.007" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="link" />
            </a>
            <a href="https://www.instagram.com/_pramodchhetri/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className="link" />
            </a>
            <a href="https://wa.me/+9779845764119" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="Whatsapp" className="link" />
            </a>
            <a href="https://www.twitter.com/_pramodchhetri" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" className="link" />
            </a>
            <a href="https://www.linkedin.com/in/pramodchhetri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="Github" className="link" />
            </a>
            <a href="https://github.com/PramodChhetri" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="Github" className="link" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;