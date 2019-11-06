import React, { Component } from "react";
import "./GroupMakingFooter.scss";

class GroupMakingFooter extends Component {
  render() {
    return (
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
    );
  }
}

export default GroupMakingFooter;
