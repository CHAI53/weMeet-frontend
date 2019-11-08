import React from "react";
import "./SingleEvent.scss";
import { withRouter } from "react-router-dom";

function SingleEvent(props) {
  const handleclick = () => {
    const id = props.eventId;
    props.history.push(`/event/${id}`);
    console.log(id);
    console.log(props);
  };

  const { groupName, eventName, expectMembers } = props;
  return (
    <li className="single-event-list">
      <div className="single-event-content" onClick={handleclick}>
        <div className="single-event-group">{groupName}</div>
        <div className="single-event-name">{eventName}</div>
        <div className="expect-members">{expectMembers}</div>
      </div>
    </li>
  );
}

export default withRouter(SingleEvent);
