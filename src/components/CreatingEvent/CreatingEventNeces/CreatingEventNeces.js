import React, { Component } from "react";
import "./CreatingEventNeces.scss";

class CreatingEventNeces extends Component {
  render() {
    return (
      <div className="input-form">
        <div className="input-label">타이틀(필수 사항)</div>
        <input />
        <span className="char-count">80</span>
      </div>
    );
  }
}

export default CreatingEventNeces;
