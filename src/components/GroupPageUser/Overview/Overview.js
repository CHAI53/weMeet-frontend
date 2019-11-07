import React, { Component } from "react";
import "./Overview.scss";

export class Overview extends Component {
  render() {
    return (
      <div className="overview">
        <div className="overview-in">
          <h2 className="overview-title">활동 계획</h2>
          <div className="overview-hidden">
            This is a group for anyone interested in making new friends,
            partying with new friends, study Langua etc. Everyone is welcome. I
            started this group because to make new friends and help foreigners
            learn Korean culture and language. Looking forward to having fun
            with everybody.
          </div>
          <div className="overview-show">
            This is a group for anyone interested in making new friends,
            partying with new friends, study Langua etc. Everyone is welcome. I
            started this group because to make new friends and help foreigners
            learn Korean culture and language. Looking forward to having fun
            with everybody.
          </div>
          <div className="overview-btn">더 읽기</div>
        </div>
      </div>
    );
  }
}

export default Overview;
