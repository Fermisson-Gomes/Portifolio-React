import React from "react";
import foto from './eu.jpeg';
import '../CSS/About.css';
import '../CSS/contact.css';
import Back from "../componentes/Back";
import { FaSteam } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const About = () => {
  return (
    <main className="main">
      <section className="about">
        <div className="about-img">
          <img src={ foto } alt="minha foto" />
          <div className="desc">
            <p>
              Hi! My name is Fermisson Gomes Barbosa, i'm 21 years old.
               I am from Belem do São Francisco - PE but now i'm living in Juazeiro - BA.
               I started my web development studies at trybe with the objective of joining the technology area.
            </p>
            <div className="social">
              <p> My Social Networks</p>
              <div className="social-links">
              <a
                href="https://steamcommunity.com/profiles/76561199228416927/"
                target="_blank" rel="noreferrer"
                className="contact-icon"
              >
                <FaSteam />
              </a>
              <a
                href="https://www.instagram.com/ferefa.bodyart/"
                target="_blank" rel="noreferrer"
                className="contact-icon"
              >
                <BsInstagram />
              </a>
              </div>
            </div>
          </div>
        </div>
        <Back />
      </section>
    </main> 
  )
}

export default About;
