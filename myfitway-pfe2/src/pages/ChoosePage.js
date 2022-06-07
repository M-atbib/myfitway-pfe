import React from "react";
import EmptyNavbar from "../common/EmptyNavbar";
import Footer from "../common/footer";
import { Link } from "react-router-dom";

function ChoosePage() {
  return (
    <>
      <EmptyNavbar />
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
      <Footer />
    </>
  );
}

export default ChoosePage;
