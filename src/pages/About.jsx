import React from "react";
import foto from './eu.jpeg';
import '../CSS/About.css';
import Back from "../componentes/Back";

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
          </div>
        </div>
        <Back />
      </section>
    </main> 
  )
}

export default About;
