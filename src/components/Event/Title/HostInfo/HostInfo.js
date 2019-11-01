import React from "react";
import "./HostInfo.scss";

function HostInfo(props) {
  const { hostImg, hostName, hostGroup } = props.hostInfo;

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
          <span className="question-mark"></span>
        </span>
      </div>
    </div>
  );
}

export default HostInfo;
