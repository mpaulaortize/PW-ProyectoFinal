import React from "react";
import "./HeaderAbout.css";

export function HeaderAbout() {
  return (
    <header className="hero-about">
      <img
        className="herobout-img"
        src="../../../../img/about-hero.png"
        alt="yellow hero"
      />
      <div className="hero-about-text">
        <h4>About Us</h4>
        <h2>We believe in designing for people, not just users.</h2>
        <p>
          Every design we create is crafted with individuals in mind,
          understanding their needs, desires, and aspirations. We are firm
          believers that every design should be anchored in a thoughtful
          strategy.
        </p>
      </div>
    </header>
  );
}
