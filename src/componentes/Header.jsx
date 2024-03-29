import React from "react";
import { Link } from "react-router-dom";

 const Header = () => {
    return (
      <header className="flex-row header">
        <nav className="flex-row nav-header">
          <Link to='/about' >
          <p>About</p>
          </Link>
          <Link to='/hardskills'>
          <p>HardSkills</p>
          </Link>
          <Link to='/projects'>
          <p>Projects</p>
          </Link>
          <Link to='/contact' >
          <p>Contact</p>
          </Link>
        </nav>
      </header>
    );
}

export default Header;
