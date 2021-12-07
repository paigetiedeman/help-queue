import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
    <h1> Help Queue</h1>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/signin">Sign In</Link>
      </button>
  </React.Fragment>
  );
}

export default Header;