import React from "react";
import { Link } from "react-router-dom";

function ChoosePage() {
  return (
    <>
      <div className="box">
        <h1>Join as a client or coach</h1>
        <div className="cl-box">
          <Link className="btn btn-primary" to="/signup">
            I'm a client, looking for coach
          </Link>
          <Link className="btn btn-primary" to="/signup">
            I'am a coach, looking for work
          </Link>
        </div>
      </div>
    </>
  );
}

export default ChoosePage;
