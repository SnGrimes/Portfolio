import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

// Smooths scroll behavior of anchor links
if(typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

window.onscroll = () => {
  const nav = document.getElementById('nav');
  if(window.pageYOffset >= 1000) {    
    nav.style.backgroundColor = "#11abb0";
  }
  else {
    nav.style.backgroundColor = "transparent";
  }
  //console.log(`page is currently at ${window.pageYOffset} pixels`);
}
const IndexPage = () => (
  <div className="wrapper__main">
    <Header />
    <About />
    <Portfolio />
    <Resume />
    <Footer />
  </div>
);

export default IndexPage;
