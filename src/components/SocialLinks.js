import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinSquare,
  FaCodepen
} from "react-icons/lib/fa";


const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://github.com/SnGrimes">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/shantia-grimes-farmer-87332b79/">
        <FaLinkedinSquare />
      </a>
    </li>
    <li>
      <a href="https://codepen.io/abreeman/">
        <FaCodepen />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
