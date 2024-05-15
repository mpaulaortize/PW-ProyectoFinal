import React from "react";
import "./HeaderWork.css";

export function HeaderWork() {
  return (
    <header className="hero-work">
      <div className="img-work">
        <img
          className="herowork-img"
          src="../../../../img/Header-Work.png"
          alt="Pink cover work"
        />
        <h1 className="herotext-work">
          We are storytellers, strategists, and creators driven by the belief
          that every design should have a purpose.
        </h1>
      </div>

      <section className="hero-footer">
        <div className="right">
          <b>Sort by</b>
          <label htmlFor="author">Author</label>

          <select name="author" id="author">
            <option value="mariapaula">Maria Paula</option>
            <option value="marolina">Carolina</option>
            <option value="sofia">Sofia</option>
            <option value="lina">Lina</option>
          </select>

          <label htmlFor="project">Type of project</label>

          <select name="project" id="project">
            <option value="brand">Brand Design</option>
            <option value="uxui">UX / UI Design</option>
            <option value="graphic">Graphic Design</option>
          </select>
        </div>
        <div className="left">
          <b>Pages</b>
          <p>1</p>
          <p>2</p>
        </div>
      </section>
    </header>
  );
}
