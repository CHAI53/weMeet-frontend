import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GroupFooterNoBack.scss";

class GroupFooterNoBack extends Component {
  render() {
    return (
      <div className="start-footer-without-back">
        <div className="bounds">
          <div class="button-align">
            <Link to="/GroupMaking2">
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

export default GroupFooterNoBack;
