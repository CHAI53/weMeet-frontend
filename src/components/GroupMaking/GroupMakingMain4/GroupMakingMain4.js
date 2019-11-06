import React, { Component } from "react";
import "./GroupMakingMain4.scss";

class GroupMakingMain4 extends Component {
  render() {
    return (
      <div className="container4">
        <div className="start-header">
          <div className="progress-bar progress-horizontal">
            <div className="progress-bar-inner"></div>
            <div className="progress-step">
              <div className="step-count4">4/4단계</div>
            </div>
          </div>
        </div>
        <div className="start-main">
          <div className="center">
            <div className="chunk">
              <h2 className="step-headline4">
                <span>그룹을 대표할 이미지를 보여주세요</span>
              </h2>
              <p className="topic-search">
                <span>
                  그룹을 대해 짐작할 수 있는 이미지를 올려주세요. 사람들에게
                  우리 그룹을 잘 보여줄 수 있을까요? 마음이 바뀌면 나중에 다시
                  변경할 수 있습니다.
                </span>
              </p>
              <div className="imageUpload-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMakingMain4;
