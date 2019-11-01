import React from "react";

export default function SingleAttendee(props) {
  const { image, name, role } = props.attendee;

  return (
    <div className="attendees">
      <div className="attendee">
        <img src={image} alt="profileImage" />
        <div className="name">{name}</div>
        <div className="role">{role}</div>
      </div>
    </div>
  );
}
