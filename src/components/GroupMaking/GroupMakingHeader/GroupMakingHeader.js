import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GroupMakingHeader.scss";

class GroupMakingHeader extends Component {
  render() {
    return (
      <nav id="group-head">
        <div id="head-logo">
          <Link to="/">
            <img
              src={require("Images/wemeet_transparent.png")}
              alt="logo"
              className="logo"
            />
          </Link>
        </div>
        <button>
          <span />
        </button>
      </nav>
    );
  }
}

export default GroupMakingHeader;
