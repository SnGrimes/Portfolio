import React from "react";
import SocialLinks from "./SocialLinks";
import { FaChevronCircleUp } from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
      <div>
        <SocialLinks />
      </div>

      <div id="go-top" className="footer__go-top">
        <a title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
  </footer>
);

export default Footer;
