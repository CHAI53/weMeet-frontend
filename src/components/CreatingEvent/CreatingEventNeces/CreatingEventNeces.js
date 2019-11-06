import React, { Component } from "react";
import "./CreatingEventNeces.scss";

class CreatingEventNeces extends Component {
  handleInput = e => {
    e.preventDefault();
    const { handleInput } = this.props;
    const val = e.target.value;
    handleInput(val);
  };

  render() {
    const { handleInput } = this;
    const { title, count } = this.props;

    return (
      <div className="input-form">
        <div className="input-label">타이틀(필수 사항)</div>
        <input value={title} onChange={handleInput} />
        <span className="char-count">{count}</span>
      </div>
    );
  }
}

export default CreatingEventNeces;
