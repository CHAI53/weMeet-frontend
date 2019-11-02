import React, { Component } from "react";
import "./HostInfo.scss";
import ToolTip from "../../ToolTip";

class HostInfo extends Component {
  constructor() {
    super();
    this.state = {
      toolTip: false
    };
  }

  handleClick = e => {
    const { toolTip } = this.state;
    this.setState({ toolTip: !toolTip });
  };

  render() {
    const { hostImg, hostName, hostGroup } = this.props.hostInfo;
    const { handleClick } = this;
    const { toolTip } = this.state;

    return (
      <div className="host-info">
        <img src={hostImg} className="host-img" alt="host" />
        <div className="info">
          <span>
            주최:<span className="link">{hostName}</span>
          </span>
          <span>
            그룹:
            <span className="link">{hostGroup}</span>
          </span>
          <span>
            공개 그룹
            <span className="question-mark" onClick={handleClick}>
              {toolTip && <ToolTip />}
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default HostInfo;
