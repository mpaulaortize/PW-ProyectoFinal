import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="general-div-cards">
      <div className="card">
        <div className="card-text">
          <h4>UX/IU Design</h4>
          <p>
            We create engaging and user-friendly digital products tailored to
            your brand and audience.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-text">
          <h4>Graphic Design</h4>
          <p>
            From logos and marketing materials to infographics and
            illustrations, we craft designs that resonate with your brand
            identity and message.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-text">
          <h4>Brand Design</h4>
          <p>
            We develop comprehensive branding strategies that encompass logo
            design, color schemes, typography, and brand guidelines to set you
            apart in the market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
