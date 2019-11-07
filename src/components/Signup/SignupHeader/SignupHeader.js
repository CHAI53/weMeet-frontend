import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignupHeader.scss";

class SignupHeader extends Component {
  render() {
    return (
      <nav id="signup-head">
        <div class="head-logo">
          <Link to="/">
            <img
              src={require("Images/wemeet_transparent.png")}
              alt="logo"
              className="logo"
            ></img>
          </Link>
        </div>
      </nav>
    );
  }
}

export default SignupHeader;
