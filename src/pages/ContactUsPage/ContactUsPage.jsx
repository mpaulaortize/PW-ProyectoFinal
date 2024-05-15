import React from "react";
import "./ContactUsPage.css";

import { useState } from "react";

function ContactUs() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName === selectedButton ? null : buttonName);
  };

  const handleSendClick = () => {
    if (!selectedButton) {
      setError('Please select at least one option in "Interested in"');
      return;
    }

    if (!name || !email || !phone || !message) {
      setError("Please fill in all fields");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    console.log("Interested in:", selectedButton);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);
    setError("");

    setSelectedButton("");
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  return (
    <>
      <div className="principal-container">
        <div className="title-container">
          <div className="subtitle-form">
            <h3>
              Ready to bring your vision to life?{" "}
              <b>
                Let's work <br />
                together to create something extraordinary.
              </b>
              <br />
              Contact us today to get started
            </h3>
          </div>
          <div className="title-form">
            <h1>
              WHAT SERVICES <br /> WE CAN SUPPORT <br /> YOU WITH?
            </h1>
          </div>
        </div>
        <div className="form-container">
          <div className="interested">
            <div className="title-buttons">
              <h4>I'm interested in</h4>
            </div>
            <div className="up-buttons">
              <button
                className={`ux/ui ${
                  selectedButton === "UX / UI Design" && "selected"
                }`}
                onClick={() => handleButtonClick("UX / UI Design")}
              >
                UX / UI Design
              </button>
              <button
                className={`graphic ${
                  selectedButton === "Graphic Design" && "selected"
                }`}
                onClick={() => handleButtonClick("Graphic Design")}
              >
                Graphic Design
              </button>
            </div>
            <button
              className={`brand ${
                selectedButton === "Brand Design" && "selected"
              }`}
              onClick={() => handleButtonClick("Brand Design")}
            >
              Brand Design
            </button>
          </div>
          <form className="contact-form">
            <input
              type="text"
              className="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="number"
              className="number"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              requir
              required
            />
            <input
              type="text"
              className="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </form>
          {error && <div className="error">{error}</div>}
          <div className="button-form">
            <button className="send" onClick={handleSendClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
