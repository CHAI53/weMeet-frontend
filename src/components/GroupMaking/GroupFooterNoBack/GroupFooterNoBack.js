import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./GroupFooterNoBack.scss";

class GroupFooterNoBack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleNext.bind(this);
  }
  handleNext = event => {
    this.props.history.push("/GroupMaking2");
  };

  render() {
    return (
      <div className="start-footer-without-back">
        <div className="bounds">
          <div className="button-align">
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

export default withRouter(GroupFooterNoBack);
