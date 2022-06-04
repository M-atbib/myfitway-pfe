import React from "react";
import globe from "../Ressources/Icons/globe-icon.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="header">
      <h1>Logo</h1>
      <img src={globe} alt="" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>Homme</li>
      </ul>
    </nav>
  );
}

export default Navbar;
