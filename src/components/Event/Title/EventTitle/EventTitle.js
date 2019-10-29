import React from "react";
import "./EventTitle.scss";

export default function EventTitle(props) {
  const { title } = props;
  return <div className="event-title">{title}</div>;
}
