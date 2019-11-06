import React from "react";
import "./CreatingEventMaxAttendee.scss";

export default function CreatingEventMaxAttendee(props) {
  const { maxAttendeeVal, handleMaxVal } = props;

  return (
    <div className="maxAttendee">
      <input onChange={handleMaxVal} value={maxAttendeeVal}></input>
    </div>
  );
}
