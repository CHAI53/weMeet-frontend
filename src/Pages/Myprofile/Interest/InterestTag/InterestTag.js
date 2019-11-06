import React, { Component } from "react";
import "./InterestTag.scss";

class InterestTag extends Component {
  constructor() {
    super();
    this.state = {
      nowclick: ""
    };
  }

  Handleclick = event => {
    this.setState({ nowclick: event.target.name });
    console.log("onClick===", this.state.nowclick);
    // this.state.category.push(this.state.nowclick);
    // console.log(this.test);
    // this.setState({ category: this.state.category });
    // this.setState({});
    // console.log(this.state.category);
    // this.setState({ choice: this.state.interest });
    // console.log(this.state);
    this.props.info(this.state.nowclick);
    console.log("setstateProps=====", this.props.info);
  };

  render() {
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
