import React from "react";

export default function Timeline(data) {
  const datetime = data.time;

  return (
    <div className="timeline-wrapper">
      <div className="date">{datetime[0]}</div>
      <div className="timeline">{datetime[1]}</div>
      <div className="day">{datetime[2]}</div>
    </div>
  );
}
