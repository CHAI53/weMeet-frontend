import React, { Component } from "react";
import "./Titlebar.scss";

export class Titlebar extends Component {
  render() {
    return (
      <div className="title-bar">
        <div className="title-bar-in">
          <h3>{this.props.titlename}</h3>
          <div className="see-all">모두 보기</div>
        </div>
      </div>
    );
  }
}

export default Titlebar;
