import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GroupMakingFooter23.scss";

class GroupMakingFooter23 extends Component {
  render() {
    return (
      <div className="start-footer">
        <div className="bounds">
          <div class="button-align">
            <Link to="/GroupMaking2">
              <button type="button" class="back-button">
                <span>
                  <span>이전</span>
                </span>
              </button>
            </Link>
            <Link to="/GroupMaking4">
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

export default GroupMakingFooter23;
