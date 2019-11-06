import React, { Component } from "react";
import "./GroupMakingMain3.scss";

class GroupMakingMain3 extends Component {
  render() {
    return (
      <div className="container3">
        <div className="start-header">
          <div className="progress-bar progress-horizontal">
            <div className="progress-bar-inner"></div>
            <div className="progress-step">
              <div className="step-count3">3/4단계</div>
            </div>
          </div>
        </div>
        <div className="start-main">
          <div className="center">
            <div className="chunk">
              <h2 className="step-headline3">
                <span>그룹의 관심사에 맞는 주제를 몇 가지 선택해 주세요</span>
              </h2>
              <p className="topic-search">
                <span>
                  주제가 구체적일수록 비슷한 관심사를 가진 사람들에게 그룹을
                  홍보하기가 더 쉬워집니다. 주제는 최대 15개까지 선택
                  가능합니다.
                </span>
              </p>
              <ul className="topic-pick">
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMakingMain3;
