import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GroupMakingFooter34.scss";

class GroupMakingFooter34 extends Component {
  render() {
    return (
      <div className="start-footer">
        <div className="bounds">
          <div class="button-align">
            <Link to="/GroupMaking3">
              <button type="button" class="back-button">
                <span>
                  <span>이전</span>
                </span>
              </button>
            </Link>
            <Link to="/after_login_main">
              <button type="button" class="forward-button">
                <span>
                  <span>다음</span>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMakingFooter34;
