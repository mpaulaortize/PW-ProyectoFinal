import React from "react";
import "./OurPeoplePage.css";
import Cards from "./Cards/Cards";
import Banner2 from "./Banner2/Banner2";
import Biografia from "./Biografias/Biografias";

import { Footer } from "../../components/Footer/Footer";
import { HeaderAbout } from "../../components/Header/HeaderAbout/HeaderAbout";

function OurPeople() {
  return (
    <div className="General-div">
      <HeaderAbout />
      <img
        className="ourpeople-img"
        src="../../../img/ourpeople-team.png"
        alt="yellow second section"
      />
      <div className="section-one-text">
        <p>
          Our services encompass a wide spectrum of creative solutions, ranging
          from web design and app development to graphic design, brand creation,
          and strategic positioning. Whether you're launching a new brand,
          revamping an existing one, or seeking to enhance your online presence,
          we are here to bring your vision to life
        </p>
        <p>
          Our team is composed of strategic thinkers, creative minds, and
          visionaries who are passionate about delivering exceptional results.
          We don't just design for the sake of aesthetics; we design for impact.
          By combining creativity with strategy, we ensure that every project we
          undertake is not only visually stunning but also aligns with your
          goals and resonates with your audience.
        </p>
      </div>
      <div className="section-three-container">
        <img
          className="section-three"
          src="../../../img/Section-three-ourpeople.png"
          alt="yellow second section"
        />
        <div className="card-section">
          <Cards></Cards>
          <button className="button-our-people">Lets work together</button>
        </div>
      </div>
      <div className="our-vision">
        <h4>Our vision</h4>
        <p>
          Our passion for creativity merges with a deep empathy towards the
          needs of our clients and their audiences. We are committed to
          delivering top-quality results through collaboration, integrity, and a
          constant quest for innovation. Guided by dedication to excellence, we
          value continuous learning and passion in every project we undertake.
          These values are the essence of our work, driving each design we
          create and every solution we offer.
        </p>
      </div>
      <Biografia></Biografia>
      <Banner2></Banner2>
      <Footer />
    </div>
  );
}

export default OurPeople;
