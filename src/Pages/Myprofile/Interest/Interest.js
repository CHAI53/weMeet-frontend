import React, { Component } from "react";
import "./Interest.scss";
import InterestTag from "./InterestTag";
import InterestTagExample from "./InterestTag/InterestTagExample";

class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      nowclick: ""
    };
  }

  Handler = e => {
    this.setState({
      category: this.state.category.concat(e)
    });
    // console.log(this.state.category);
  };
  render() {
    console.log("last====", this.state);
    return (
      <div className="int-box">
        <div className="interest-wrapper">
          <div className="interest-title">관심사</div>
          {InterestTagExample.example.map(e => (
            <InterestTag category_name={e.category_name} info={this.Handler} />
          ))}
        </div>
      </div>
    );
  }
}

export default Interest;
