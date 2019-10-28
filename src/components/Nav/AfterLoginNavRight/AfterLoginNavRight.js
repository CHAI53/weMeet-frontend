import React, { Component } from "react";
import "./AfterLoginNavRight.scss";

class AfterLoginNavRight extends Component {
  render() {
    return (
      <div className="right">
        <span className="start-new-group">
          새 그룹 시작하기
          <br />
          30% OFF
        </span>
        <span className="search">탐색</span>
        <span className="profile" />
      </div>
    );
  }
}

export default AfterLoginNavRight;
