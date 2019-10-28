import React, { Component } from "react";
import NavLogo from "../NavLogo";
import NavRight from "../AfterLoginNavRight";
import "./AfterLogInNav.scss";

class AfterLogInNav extends Component {
  constructor() {
    super();
    this.state = {
      status: "preLogin"
    };
  }
  render() {
    return (
      <header className="nav">
        <div className="nav-align">
          <NavLogo />
          <NavRight />
        </div>
      </header>
    );
  }
}

export default AfterLogInNav;
