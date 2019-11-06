import React, { Component } from "react";
import "./SectionTitle.scss";

class SectionTitle extends Component {
  constructor() {
    super();
    this.state = {
      name: "내 주변 이벤트",
      Firstline: "모두 보기",
      Secondline: "근처에서 곧 진행될 이벤트를 확인해 보세요."
    };
  }
  render() {
    return (
      <div className="all-wrapper">
        <div className="first-line">
          <span className="first-line-name">
            {this.state.name}
            {/* 내 주변 이벤트 */}
          </span>
          <span className="first-line-all">
            <a href="/Myprofile">{this.state.Firstline}</a>
            {/* 모두 보기 */}
          </span>
        </div>
        <div className="second-line">{this.state.Secondline}</div>
      </div>
    );
  }
}

export default SectionTitle;
