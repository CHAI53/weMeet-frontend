import React, { Component } from "react";
import "./GroupMakingMain2.scss";

class GroupMakingMain2 extends Component {
  render() {
    return (
      <div className="container2">
        <div className="start-header">
          <div className="progress-bar progress-horizontal">
            <div className="progress-bar-inner"></div>
            <div className="progress-step">
              <div className="step-count2">2/4단계</div>
            </div>
          </div>
        </div>
        <div className="start-main">
          <div className="center">
            <div className="chunk">
              <h2 className="step-headline2">
                <span>이제 그룹에 대해서 설명해주세요</span>
              </h2>
              <p className="topic-search">
                <span>
                  설명글은 회원들에게 그룹을 홍보할 때 표시됩니다. 변경사항이
                  있다면 나중에 언제든지 업데이트가 가능합니다.
                </span>
              </p>
              <ul className="description-step">
                <li>
                  <span>그룹의 목적은 무엇인가요?</span>
                </li>
                <li>
                  <span>어떤 회원을 모집하나요?</span>
                </li>
                <li>
                  <span>이벤트에서는 무엇이 진행되나요?</span>
                </li>
              </ul>
              <div className="input-container">
                <div className="input-description">
                  <textarea
                    className="description-text"
                    type="text"
                    placeholder="최소 50자 이상 작성해주세요"
                    rows="6"
                    minLength="50"
                    error="필수사항"
                  />
                </div>
                <ul id="description-error">
                  <li>필수사항</li>
                </ul>
              </div>
              <div className="example-container">
                <div className="example-bar">
                  <div className="lightbulb-container">
                    <img
                      className="lightbulb"
                      src="https://www.meetup.com/mu_static/ko-KR/lightbulb.582d42c2.svg"
                      alt="lightbulb"
                    />
                  </div>
                  <div className="lightbulb-example">
                    <span>예시: </span>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMakingMain2;
