import React from "react";
import "./Attendees.scss";
import SingleAttendee from "./SingleAttendee";

function Attendees(props) {
  const attendeesCount = props.attendeesInfo.length;
  const data = props.attendeesInfo;

  return (
    <div className="attendees-box">
      <div className="attendees-nav">
        <span className="attendees-count">참석자({`${attendeesCount}`})</span>
        <span className="see-all">모두 보기</span>
      </div>
      <div className="attendees-wrapper">
        {data.map(attendee => {
          return <SingleAttendee attendee={attendee} key={attendee.id} />;
        })}
      </div>
    </div>
  );
}

export default Attendees;
