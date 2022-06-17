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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dignissim odio. Nulla velit justo, pellentesque at est eget, feugiat pulvinar mauris. Duis laoreet arcu lorem, at pellentesque massa dignissim iaculis. Proin vel vestibulum orci. Cras aliquam eget metus sed mollis. Quisque ac malesuada ante, id venenatis ante. Ut tristique facilisis enim, porttitor pulvinar est ullamcorper quis. Curabitur faucibus viverra orci, in efficitur turpis posuere vitae. Nam pretium lorem vel tincidunt suscipit.</p>
          </div>
        </div>
        <Back />
      </section>
    </main> 
  )
}

export default About;
