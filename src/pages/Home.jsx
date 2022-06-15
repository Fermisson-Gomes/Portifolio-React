import React from "react";
import Header from "../componentes/Header";
import '../CSS/Home.css';

const Home = () => {
    return (
      <main className="main">
        <div className="home">
          <Header />
          <p className="p-tag">Hello, i'm</p>
          <h2 className="home-name">Fermisson</h2>
          <p className="p-tag complement">Web Development Student at Trybe</p>
        </div>
      </main>
    );
}

export default Home;
