import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedinSquare,
  FaCodepen
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="#">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="#">
        <FaLinkedinSquare />
      </a>
    </li>
    <li>
      <a href="#">
        <FaCodepen />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
