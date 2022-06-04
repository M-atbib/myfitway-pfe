import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>{" "}
      {" | "}
      <NavLink to="/client" activeStyle={activeStyle}>
        Client
      </NavLink>{" "}
      {" | "}
      <NavLink to="/coach" activeStyle={activeStyle}>
        Coach
      </NavLink>
    </nav>
  );
};

export default Header;
