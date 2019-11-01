import React from "react";

export default function EventStatus(props) {
  const { attendStatus, vacancy } = props;

  return (
    <div className={"event-status"}>
      <span className="question">
        {attendStatus ? "참석하시겠습니까?" : "이벤트에 참석할 수 없습니다"}
      </span>
      {vacancy > 0 && attendStatus === true && (
        <span className="vacancy">{vacancy}자리 남음</span>
      )}
    </div>
  );
}
