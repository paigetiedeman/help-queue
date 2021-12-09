import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
    <nav className="navbar bg-light navbar-light navbar-expand-lg">
    <h2 className="title"> Help Queue</h2>
    <div >
        <button className="btn btn-link">
          <Link to="/" className="nav-link">Home</Link>
        </button>
        <button className="btn btn-link">
          <Link to="/signin" className="nav-link">Sign In</Link>
        </button>
      </div>
    </nav>
  </React.Fragment>
  );
}

export default Header;