import "./LoginPage.css";
import React from "react";
export function Login() {
  return (
    <main className="login-container">
      <div className="head"></div>
      <img className="image-mobile" src='../../../public/imgs/Lina/people.png' />
      <form className="background-image">
        <div className="image-log">
          <img src='../../../public/imgs/Lina/people.png' />
        </div>
        <div className="login">
          <h3>Welcome people</h3>
          <h1>LET'S CREATE SOMETHING EXTRAORDINARY</h1>
            <div className="input-wrapper">
              <input className="input-boxes" type="text" placeholder="User Name" />
              <span className="underline"></span>
              <input className="input-boxes" type="text" placeholder="Password" />
              <span className="underline"></span>
            </div>
            <div className="button-container">
              <button className="button type1">
                <span className="btn-txt">LogIn</span>
                  </button>
            </div>
        </div>
      </form>

    </main>
  );
}
