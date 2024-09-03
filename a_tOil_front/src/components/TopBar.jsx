import React from "react";
import logo from "../assets/Transneft-Logo-RU-new.png";
import icon from "../assets/icon.png";
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <div className="flex flex-row p-5  bg-sky-300 sticky top-0 border-spacing-80 rounded-b-lg">
      <img className=" " src={logo} alt="" />
      <NavLink className="nav-link " to="/account">
        <div className="basis-1/4 md:basis-1/3 fixed top-10  right-20">
          <img className="size-12" src={icon} />
        </div>
      </NavLink>
    </div>
  );
}

export { TopBar };
