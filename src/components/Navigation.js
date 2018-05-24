import React from "react";

const Navigation = () => (
  <nav id="nav-wrap" className="nav__wrapper">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav__full">
      <li className="nav__link--current nav__full-item">
        <a className="smoothscroll" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="smoothscroll nav__full-item" href="#about">
          About
        </a>
      </li>
      <li>
        <a className="smoothscroll nav__full-item" href="#portfolio">
          Projects
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
