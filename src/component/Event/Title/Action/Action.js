import React, { Component } from "react";
import "./Action.scss";
import EventStatus from "./EventStatus";
import EventButtons from "./EventButtons";
import EventShare from "./EventShare";
import verifyAttendStatus from "utils/common.js";

class Action extends Component {
  constructor(props) {
    super(props);
    const { limitUser, attendeesCount, attendStatus, status, eventId } = props;
    this.state = {
      attendStatus: verifyAttendStatus(
        limitUser - attendeesCount,
        attendStatus,
        status
      ),
      vacancy: props.limitUser - props.attendeesCount
    };
  }

  render() {
    const { attendStatus, vacancy } = this.state;

    return (
      <div className={attendStatus ? "action" : "no-vacancy"}>
        <EventStatus attendStatus={attendStatus} vacancy={vacancy} />
        {attendStatus && <EventButtons />}
        <EventShare />
      </div>
    );
  }
}

export default Action;
