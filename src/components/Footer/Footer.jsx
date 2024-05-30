import React from "react";
import "./Footer.css";

import instagram from "../../../public/imgs/Carolina/instagram-logo.png";
import facebook from "../../../public/imgs/Carolina/facebook-logo.png";
import pinterest from "../../../public/imgs/Carolina/pinterest-logo.png";
import youtube from "../../../public/imgs/Carolina/youtube-logo.png";

export function Footer() {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <footer>
      <div className="text-up">
        <div className="text-footer">
          <h2>LET'S WORK TOGETHER!</h2>
          <p>
            Ready to bring your vision to life?
            <b> Let's work together to create something extraordinary.</b>
            <br />
            Contact us today to get started
          </p>
        </div>
        <div className="link-pages">
          <p>Work</p>
          <p>Our People</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="hr-footer">
        <hr />
      </div>
      <div className="text-down">
        <div className="rights">
          <p>© 2024 ThePeople. All rights reserved</p>
        </div>
        <div className="social">
          <p>Follow our digital footprints</p>
          <div className="arrow" />
          <div className="icon">
            <a onClick={() => handleClick("https://www.facebook.com/")}>
              <img src={facebook} width="20.45" />
            </a>
            <a onClick={() => handleClick("https://www.youtube.com/")}>
              <img src={youtube} width="20.36" />
            </a>
            <a onClick={() => handleClick("https://www.instagram.com/")}>
              <img src={instagram} width="20.45" />
            </a>
            <a onClick={() => handleClick("https://co.pinterest.com/")}>
              <img src={pinterest} width="16.26" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
