import React from "react";

export default function EventStatus(props) {
  const { eventStatus, vacancy } = props;
  console.log(props);
  return (
    <div className="event-status">
      <span className="question">
        {eventStatus
          ? "이 밋업은 지금 진행중입니다."
          : "이벤트에 참석하시겠습니까?"}
      </span>
      {vacancy && <span className="vacancy">{vacancy}자리 남음</span>}
    </div>
  );
}
