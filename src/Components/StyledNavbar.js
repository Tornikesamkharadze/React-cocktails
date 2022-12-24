import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Logo/logo.svg";
const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/">
          <img src={logo} alt="cocktail logo" className="logo"></img>
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "none-active"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active" : "none-active"
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default StyledNavbar;
