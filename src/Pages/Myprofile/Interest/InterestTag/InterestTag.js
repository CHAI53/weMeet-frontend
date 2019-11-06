import React, { Component } from "react";
import "./InterestTag.scss";

class InterestTag extends Component {
  constructor() {
    super();
    this.state = {
      nowclick: ""
    };
  }

  Handleclick = e => {
    console.log(e.target.name);
    this.setState({ nowclick: e.target.name }, () => {
      // console.log("nowclick:", this.state.nowclick);
    });
    //console.log("Handler에 들어가기전 nowclick:", this.state.nowclick);
    this.props.info(this.state.nowclick);
  };

  render() {
    console.log(this.state);
    return (
      <button
        className="interest-tag"
        onClick={this.Handleclick}
        data={this.state.nowclick}
        name={this.props.category_name}
      >
        {this.props.category_name}
      </button>
    );
  }
}

export default InterestTag;
