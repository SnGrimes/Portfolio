import React, {Component } from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="portfolio__item">
        <div className="portfolio__item-wrap">
          <a href={this.props.itemLink} title={this.props.itemAlt}>
            <img alt={this.props.itemAlt} src={this.props.itemImage} />
            <div className="portfolio__item-overlay">
              <div className="portfolio__item-meta">
                <h5>{this.props.itemTitle}</h5>
                <p>{this.props.itemDesc}}</p>
              </div>
            </div>
            <div className="portfolio__link-icon">
              <FaPlus />
            </div>
          </a>
        </div>
      </div>
    ) 
  }
}

export default PortfolioItem;
