import React, { Component } from "react";
import "./GroupMaking1.scss";
import GroupMakingHeader from "components/GroupMaking/GroupMakingHeader/GroupMakingHeader";

class GroupMaking1 extends Component {
  render() {
    return (
      <div className="start-page">
        <GroupMakingHeader />
        <div className="container">
          <div className="start-header">
            <div className="progress-bar progress-horizontal">
              <div className="progress-bar-inner"></div>
              <div className="progress-step">
                <div className="step-count1">1/4단계</div>
              </div>
            </div>
          </div>
          <div className="start-main">
            <div className="center">
              <div className="chunk">
                <h2 className="step-headline1">
                  <span>그룹의 이름은 무엇으로 하시겠어요?</span>
                </h2>
                <p className="topic-search">
                  <span>
                    사람들이 그룹의 성격과 내용을 파악할 수 있는 이름을
                    지어주세요. 떠오르는 기발한 이름이 있나요? 마음이 바뀌면
                    나중에 다시 변경할 수 있습니다.
                  </span>
                </p>
                <div className="input-wrapper">
                  <input
                    group-name-error="error"
                    type="text"
                    placeholder="원하시는 그룹명은 무엇인가요"
                    className="group-name"
                  />
                  <p char-count="true" class="tiny">
                    60
                  </p>
                </div>
                <span class="text-error">필수 사항</span>
              </div>
            </div>
          </div>
          <div className="start-footer">
            <div className="bounds">
              <div class="button-align">
                <button type="button" class="back-button">
                  <span>
                    <span>이전</span>
                  </span>
                </button>
                <button type="button" class="forward-button">
                  <span>
                    <span>다음</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMaking1;
