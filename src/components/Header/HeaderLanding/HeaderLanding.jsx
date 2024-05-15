import React from "react";
import "./HeaderLanding.css";

export function HeaderLanding() {
  return (
    <header className="hero-landing">
      <div className="img-landing">
        <img
          className="herolanding-img"
          src="../../../../img/landing-hero.png"
          alt="purple cover landing"
        />
        <h1 className="herotext-landing">
          Crafting for the People, Designing with Purpose.
        </h1>
        <p className="par-text-landing">
          Graphic Design | Brand Design | Web Design
        </p>
        <button className="button-work" type="button">
          Let’s work together
        </button>
      </div>
    </header>
  );
}
