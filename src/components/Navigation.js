import React from "react";

const Navigation = () => (
  <nav id="nav-wrap" className="nav__wrapper">
    <label htmlFor="nav-toggle">Menu</label>
    <input type="checkbox" id="nav-toggle"></input>
    <ul id="nav" className="nav__full">
      <li>
        <a className="nav__full-item nav__link--current" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="nav__full-item" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="nav__full-item" href="#portfolio">
          Projects
        </a>
      </li>
      <li>
        <a className="nav__full-item" href="#resume">
          Resume
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
