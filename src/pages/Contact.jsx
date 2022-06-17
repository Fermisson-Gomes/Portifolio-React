import React from "react";
import Back from "../componentes/Back";
import '../CSS/contact.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const Contact = () => {
  return (
    <main className="main">
      <section className="contact">
        <div className="contact-content">
          <a
            href="https://github.com/Fermisson-Gomes"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/fermisson-gomes-barbosa-9a113a232/"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
          >
            <BsLinkedin />
          </a>
          {/* <a
            className="contact-icon"
          >
          <BsInstagram />  
          </a> */}
        </div>
        <Back />
      </section>
    </main>
  )
}

export default Contact;