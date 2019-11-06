import React, { Component } from "react";
import "./CreatingEventCheckbox.scss";

export default class CreatingEventCheckbox extends Component {
  handleClick = e => {
    this.props.onClick(e);
  };

  render() {
    const { handleClick } = this;
    const { name } = this.props;

    return (
      <div className="slideOne">
        <input
          onClick={handleClick}
          name={`${name}`}
          type="checkbox"
          id="slideOne"
          className="check"
        />
        <label htmlFor="slideOne" />
      </div>
    );
  }
}
