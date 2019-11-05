import React, { Component } from "react";
import "./HashTagButton.scss";

class HashTagButton extends Component {
  render() {
    return <button className="tag-button">{this.props.name}</button>;
  }
}

export default HashTagButton;
