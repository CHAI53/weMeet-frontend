import React, { Component } from "react";
import "./Interest.scss";
import InterestTag from "./InterestTag";
import InterestTagExample from "./InterestTag/InterestTagExample";

class Interest extends Component {
  render() {
    return (
      <div className="int-box">
        <div className="interest-wrapper">
          <div className="interest-title">관심사</div>
          {InterestTagExample.example.map(e => (
            <InterestTag category_name={e.category_name} />
          ))}
        </div>
      </div>
    );
  }
}

export default Interest;
