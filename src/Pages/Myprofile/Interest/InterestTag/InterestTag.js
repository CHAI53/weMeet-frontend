import React, { Component } from "react";
import "./InterestTag.scss";

class InterestTag extends Component {
  constructor() {
    super();
    this.state = {
      category: [{}]
    };
  }
  Handleclick = () => {
    this.setState({ now: this.props.category_name });
    console.log(this.state.now);
    // this.state.category.push({ interesting: this.state.now });
    // this.setState({ category: this.state.category });
    // console.log(this.state.category);
    // this.setState({});
    // console.log(this.state.category);
    // this.setState({ choice: this.state.interest });
    // console.log(this.state);
  };

  render() {
    return (
      <button className="interest-tag" onClick={this.Handleclick}>
        {this.props.category_name}
      </button>
    );
  }
}

export default InterestTag;
