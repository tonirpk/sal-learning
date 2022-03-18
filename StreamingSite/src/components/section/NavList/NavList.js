import React from "react";
import { NavLink } from "react-router-dom";
import "./NavList.css";

const NavList = () => {
  return (
    <nav className="nav_list">
      <h1>
        Keynani<span>_</span>
      </h1>
      <ul>
        <li className="lftBtn">
          <NavLink
            className={({ isActive }) => (isActive ? " aboutMeAcive" : "")}
            to="/aboutUs"
          >
            About us
          </NavLink>
        </li>
        <li className="midBtn">
          <NavLink to="/myWork">My work</NavLink>
        </li>
        <li className="rgtBtn">
          <NavLink
            className={({ isActive }) => (isActive ? " aboutMeAcive" : "")}
            to="/contacts"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavList;
