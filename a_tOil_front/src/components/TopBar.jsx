import React from "react";
import logo from "../assets/Transneft-Logo-RU-new.png";
import icon from "../assets/icon.png";
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <div>
      <img src={logo} alt="" />
      <NavLink className="nav-link " to="/account">
        <div>
          <img className="icon" src={icon} />
        </div>
      </NavLink>
    </div>
  );
}

export { TopBar };
