import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";

const AppCl = () => (
  <div>
    <h2>Main Landing Page.</h2>
    <Link to="client">Coach</Link> {" | "}
    <Link to="coach">Client</Link>
  </div>
);

export default AppCl;
