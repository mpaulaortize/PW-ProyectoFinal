import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../../public/imgs/OurPeople/Logo.png";
import Menu from "../../../public/icons/Icono-menu.png";
import { LINKS } from "../../Cons/links";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="General-Container-NavBar">
      <img src={Logo} alt="logo" />
      <img
        src={Menu}
        alt="menu"
        className="icono-menu"
        style={{ width: "18px", height: "18px" }}
        onClick={handleShowMenu}
      />

      <div className={`Nav-Bar ${showMenu ? "active" : ""}`}>
        {LINKS.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ item }) {
  const { text, url } = item;

  return (
    <li>
      <NavLink to={url} activeClassName="active" exact={true}>
        {text}
      </NavLink>
    </li>
  );
}
