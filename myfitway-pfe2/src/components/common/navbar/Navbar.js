import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./navelements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../Ressources/Logo/MyFitWay.svg")} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          <NavLink to="/sign-in" activeStyle>
            Log in
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/choose">Sign up</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
