import "./LoginPage.css";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase/firebase";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in");
      navigate("/Upload")
    } catch (error) {
      setError("Oops! Verifica el correo o la contraseña");
    }
  };

  return (
    <main className="login-container">
      <div className="head"></div>
      <img className="image-mobile" src='../../../public/imgs/Lina/people.png' />
      <form className="background-image" onSubmit={handleSubmit}>
        <div className="image-log">
          <img src='../../../public/imgs/Lina/people.png' />
        </div>
        <div className="login">
          <h3>Welcome people</h3>
          <h1>LET'S CREATE SOMETHING EXTRAORDINARY</h1>
          <div className="input-wrapper">
            <input
              className="input-boxes"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="underline"></span>
            <input
              className="input-boxes"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="underline"></span>
          </div>
          {error && <p style={{ color: "black" }}>{error}</p>}
          <div className="button-container">
            <button className="button type1" type="submit">
              <span className="btn-txt">LogIn</span>
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
