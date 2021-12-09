import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
    <h1> Help Queue</h1>
      <button className="btn btn-dark">
        <Link to="/">Home</Link>
      </button>
      <button className="btn btn-dark">
        <Link to="/signin">Sign In</Link>
      </button>
  </React.Fragment>
  );
}

export default Header;