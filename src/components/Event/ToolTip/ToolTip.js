import React from "react";
import "./ToolTip.scss";

export default function ToolTip() {
  return (
    <>
      <div className="triangle" />
      <div className="tool-tip">
        <div className="box">
          <span>
            이 그룹의 회원 및 이벤트 상세 정보를 포함한 전체 컨텐츠는 공개되어
            있습니다.
          </span>
        </div>
      </div>
    </>
  );
}
