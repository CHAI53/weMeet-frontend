import React from "react";
import "./EventDesc.scss";
import Attendees from "../Attendees/";
import EventDetail from "./EventDetail";

function EventDesc(props) {
  const { detail, attendeesInfo } = props;

  return (
    <div className="description">
      <EventDetail detail={detail} />
      <Attendees attendeesInfo={attendeesInfo} />
    </div>
  );
}

export default EventDesc;
