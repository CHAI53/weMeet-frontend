import React, { Component } from "react";
import Logo from "../../../Images/logo.svg";
import "./NavLogo.scss";

class NavLogo extends Component {
  render() {
    return (
      <div className="logo">
        <img className="logo-img" src={Logo} alt="Meetup" />
      </div>
    );
  }
}

export default NavLogo;
