import React from "react";

export default function SmallHeader() {
  return (
    <div className="small-header">
      <div className="icon-wrapper">
        <div className="search" />
        <div>탐색</div>
      </div>
      <div className="icon-wrapper">
        <div className="group" />
        <div>그룹</div>
      </div>
      <div className="icon-wrapper">
        <div className="profile" />
        <div>프로필</div>
      </div>
    </div>
  );
}
