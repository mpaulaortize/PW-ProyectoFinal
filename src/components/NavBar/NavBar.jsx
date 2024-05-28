import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../../public/imgs/OurPeople/Logo.png";
import MenuIcon from "../../../public/icons/Icono-menu.png";
import { LINKS } from "../../Cons/links";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="General-Container-NavBar">
      <img src={Logo} alt="logo" className="logo" />
      <img
        src={MenuIcon}
        alt="menu"
        className="icono-menu"
        onClick={handleToggleMenu}
      />

      <div className={`Nav-Bar ${showMenu ? "active" : ""}`}>
        <ul>
          {LINKS.map((item, index) => (
            <MenuItem key={index} item={item} closeMenu={closeMenu} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function MenuItem({ item, closeMenu }) {
  const { text, url } = item;

  const handleClick = () => {
    closeMenu(); 
  };

  return (
    <li>
      <NavLink
        to={url}
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={handleClick}
      >
        {text}
      </NavLink>
    </li>
  );
}
