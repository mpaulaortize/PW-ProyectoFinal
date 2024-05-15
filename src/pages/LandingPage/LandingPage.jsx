import { HeaderLanding } from "../../components/Header/HeaderLanding/HeaderLanding";
import { Footer } from "../../components/Footer/Footer";
import "./LandingPage.css";
import React from "react";
export function Landing() {
  return (
    <main className="landing-container">
      <HeaderLanding />

      <div className="pink-box">
        <div className="pink-text-landing">
          <p>Our team of experts can help you with...</p>
          <h1>Brand Design</h1>
          <hr></hr>
          <h1>Web Design</h1>
          <hr></hr>
          <h1>Digital Products</h1>
        </div>
      </div>

      <div className="third-section">
        <img
          className="secondsection-img"
          src="../../../img/third-section-bkg.png"
          alt="yellow second section"
        />
        <div className="third-section-text">
          <h4>About Us</h4>
          <h2>We believe in designing for people, not just users.</h2>
          <p>
            Every design we create is crafted with individuals in mind,
            understanding their needs, desires, and aspirations. We are firm
            believers that every design should be anchored in a thoughtful
            strategy.
          </p>
        </div>
      </div>

      <div className="scroll-container">
        <img src="../../../img/Proyecto1-dosTazas.png" />
        <img src="../../../img/Proyecto2-Head.png" />
      </div>

      <div className="last-section">
        <h4>our work</h4>
        <p>
          We are storytellers, strategists, and creators driven by the belief
          that every design should have a purpose. Our mission is simple: to
          craft meaningful experiences that resonate with people.
        </p>
      </div>

      <Footer />
    </main>
  );
}
