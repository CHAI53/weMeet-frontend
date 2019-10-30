import React, { Component } from "react";
import "./HostInfo.scss";

class HostInfo extends Component {
  constructor() {
    super();
    this.state = {
      hostImg:
        "https://secure.meetupstatic.com/photos/member/9/1/a/e/thumb_273277294.jpeg",
      hostName: "David, Marcus Yun",
      hostGroup: "Gangnam Meet up and Language Exchange - GSM"
    };
  }
  render() {
    const { hostImg, hostName, hostGroup } = this.state;

    return (
      <div className="host-info">
        <img src={hostImg} className="host-img" alt="host" />
        <div className="info">
          <span>
            주최:<span className="link">{hostName}</span>
          </span>
          <span>
            그룹:
            <span className="link">{hostGroup}</span>
          </span>
          <span>
            공개 그룹
            <span className="question-mark"></span>
          </span>
        </div>
      </div>
    );
  }
}

export default HostInfo;
