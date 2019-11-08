import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./GroupMakingFooter34.scss";

class GroupMakingFooter34 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleBefore.bind(this);
    this.handleNext.bind(this);
  }

  handleBefore = event => {
    this.props.history.push("/GroupMaking3");
  };

  handleNext = event => {
    this.props.history.push("/group_page_user/1");
  };

  render() {
    return (
      <div className="start-footer">
        <div className="bounds">
          <div className="button-align">
            <button
              type="button"
              className="back-button"
              onClick={this.handleBefore}
            >
              <span>
                <span>이전</span>
              </span>
            </button>
            <button
              type="button"
              className="forward-button"
              onClick={this.handleNext}
            >
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

export default withRouter(GroupMakingFooter34);
