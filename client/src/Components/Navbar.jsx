import React from "react";
import GoogleLogin from "./GoogleLogin.jsx";
import FacebookLogin from "./FacebookLogin.jsx";

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light navbar">
    <a className="navbar-brand" href="#">
      Siren
    </a>
    <ul className="navbar-nav mr-auto">
      <div onClick={props.profileClickHandler} className="nav-item profileBtn">
        Profile
      </div>
      <GoogleLogin />
      <FacebookLogin />
    </ul>
  </nav>
);

export default Navbar;
