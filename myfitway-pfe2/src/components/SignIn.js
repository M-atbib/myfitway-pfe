import React from "react";
import { Link } from "react-router-dom";
import google from "./Ressources/Icons/google-icon.svg";
import apple from "./Ressources/Icons/apple-icon.svg";

function SignIn() {
  return (
    <form className="box box-signin">
      <h2>Log in to MyFitWay</h2>
      <input
        type="text"
        name="username-email"
        placeholder="Username or Email"
        value=""
        id="username"
      />
      <input
        type="submit"
        name="cont-email"
        id="cont-email"
        value="Continue with Email"
      />
      <p>or</p>
      <button className="btn-apple">
        <img src={apple} alt="" />
        <span>Continue with Apple</span>
      </button>

      <button className="btn-google">
        <img src={google} alt="" />
        <span>Continue with Google</span>
      </button>

      <p className="signup">
        Don't have MyFitWay account?
        <Link to="/choose" className="sign-up">
          Sign Up
        </Link>
      </p>
    </form>
  );
}

export default SignIn;
