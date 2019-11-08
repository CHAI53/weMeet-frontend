import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Action.scss";
import EventStatus from "./EventStatus";
import EventButtons from "./EventButtons";
import EventShare from "./EventShare";
import { verifyAttendStatus } from "utils/common";
import { isUserLoggedIn } from "utils/common";

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

  handleClick = () => {
    this.props.history.push("/login");
  };

  render() {
    const { attendStatus, vacancy } = this.state;
    const { handleClick } = this;

    return (
      <div className={attendStatus ? "action" : "no-vacancy"}>
        <EventStatus attendStatus={attendStatus} vacancy={vacancy} />
        {attendStatus && isUserLoggedIn() && <EventButtons />}
        {!isUserLoggedIn() && (
          <div className="loginFirst" onClick={handleClick}>
            먼저 로그인해주세요
          </div>
        )}
        {/* <EventShare /> */}
      </div>
    );
  }
}

export default withRouter(Action);
