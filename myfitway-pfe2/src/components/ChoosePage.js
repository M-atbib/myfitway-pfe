import React, { useState } from "react";
import { Link } from "react-router-dom";
import client from "./Ressources/Icons/client-icon.png";
import coach from "./Ressources/Icons/coach-icon.png";

function ChoosePage() {
  const [type, setType] = useState("");
  /*const boxStyle = {
    bordercolor: "#bcfd4c",
  };*/

  const onChange = (event) => setType(event.target.value);
  const changes = () => {
    if (type === "client") {
      return "Join as a Client";
    } else if (type === "coach") {
      return "Apply as a Coach";
    }
    return "Create Account";
  };

  /*const style = () => {
    const buttonStyle = {
      backgroundcolor: "#bcfd4c",
      color: "white",
    };
    if (type === "client" || type === "coach") return buttonStyle;
  };*/
  return (
    <div className="box">
      <h1>Join as a client or coach</h1>
      <div className="boxes">
        <div className="client-box">
          <input
            type="radio"
            id="client"
            name="type"
            value="client"
            onChange={onChange}
            style={{ borderColor: type === "client" ? "#bcfd4c" : "grey" }}
          />
          <label for="client">
            <img src={client} alt="" />
            I'm a client, looking for coach
          </label>
        </div>

        <div className="coach-box">
          <input
            type="radio"
            id="coach"
            name="type"
            value="coach"
            onChange={onChange}
          />
          <label for="coach">
            <img src={coach} alt="" />
            I'am a coach, looking for work
          </label>
        </div>
      </div>
      <button>
        <Link to="/sign-up" className="lien">
          {changes()}
        </Link>
      </button>
      <p>
        Already have an account?{" "}
        <Link to="sign-in" className="login">
          Log In
        </Link>
      </p>
    </div>
  );
}

export default ChoosePage;
/*<Link className="" to="/sign-up/client">
            I'm a client, looking for coach
          </Link>
          <Link className="" to="/sign-up/coach">
            I'am a coach, looking for work
          </Link>*/
