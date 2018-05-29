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
