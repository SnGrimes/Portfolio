import React, { Component } from "react";
import PortfolioItem from "./PortfolioItem";

import Tamarah from "../assets/images/portfolio/tamarah.png";
import Drums from "../assets/images/portfolio/drums.png";
import Weather from "../assets/images/portfolio/weatherapp.png";
import Gecko from "../assets/images/portfolio/geckofit.png";


class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      portfolio: [
        {
          id: 1,
          title: 'Weather App',
          imgAlt: 'Weather App',
          image: Weather,
          link: "Testbed/Weatherapp/index.html",
          description: 'CSS, HTML, Javascript, PHP, Openweathermap API'
        },
        {
          id: 2,
          title: 'Gecko Fit Nutrition App',
          imgAlt: 'Gecko Fit App',
          image: Gecko,
          link: "http://geckofit.surge.sh/",
          description: 'CSS, HTML and React. Created during Chingu Voyage 4.'
        },
        {
          id: 3,
          title: 'Drum Kit',
          imgAlt: 'Drum Kit',
          image: Drums,
          link: "Testbed/Drum Kit/index.html",
          description: 'Animated Drum Kit created using GSAP animation library. Audio from JavaScript 30'
        },
        {
          id: 4,
          title: "Ta'Marah Esi Musician site",
          imgAlt: 'Tamarah Esi site',
          image: Tamarah,
          link: "http://www.tamarahesi.com",
          description: 'Wordpress site for a local musician'
        }
      ]
    }
  }
  render() {
    return(
    <section id="portfolio" className="portfolio__wrapper">
        <h1>Check Out Some of My Works.</h1>
        <div className="portfolio__items">
          {this.state.portfolio.map(
           (portfolio, index) => (
             <PortfolioItem 
              key={portfolio.id}
              itemTitle={portfolio.title}
              itemAlt={portfolio.imgAlt}
              itemImage={portfolio.image}
              itemLink={portfolio.link}
              itemDesc={portfolio.description}
             />
           ) 
          )}
        </div>
    </section>
    )
  }
}

export default Portfolio;
