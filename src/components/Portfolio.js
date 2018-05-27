import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Tamarah from "../assets/images/portfolio/tamarah.png";
import Responsive from "../assets/images/portfolio/responsive.png";
import Weather from "../assets/images/portfolio/weatherapp.png";
import Gecko from "../assets/images/portfolio/geckofit.png";

const Portfolio = () => (
  <section id="portfolio" className="portfolio__wrapper">
      <h1>Check Out Some of My Works.</h1>
      <div className="portfolio__items">
          <div className="portfolio__item">
            <div className="portfolio__item-wrap">
              <a href="Testbed/Weatherapp/index.html" title="Weather App">
                <img alt="Weather App" src={Weather} />
                <div className="portfolio__item-overlay">
                  <div className="portfolio__item-meta">
                    <h5>Weather App</h5>
                    <p>CSS, HTML, Javascript, PHP, Openweathermap API</p>
                  </div>
                </div>
                <div className="portfolio__link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="portfolio__item">
            <div className="portfolio__item-wrap">
              <a href="http://geckofit.surge.sh/" title="Gecko Fit App">
                <img alt="Gecko Fit App" src={Gecko} />
                <div className="portfolio__item-overlay">
                  <div className="portfolio__item-meta">
                    <h5>Gecko Fit Nutrition App</h5>
                    <p>CSS, HTML and React. Created during Chingu Voyage 4.</p>
                  </div>
                </div>
                <div className="portfolio__link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="portfolio__item">
            <div className="portfolio__item-wrap">
              <a href="http://www.tamarahesi.com" title="Ta'Marah Esi">
                <img alt="Tamarah Esi site" src={Tamarah} />
                <div className="portfolio__item-overlay">
                  <div className="portfolio__item-meta">
                    <h5>Ta'Marah Esi Musician site</h5>
                    <p>Wordpress site for a local musician</p>
                  </div>
                </div>
                <div className="portfolio__link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
      </div>
  </section>
);

export default Portfolio;
