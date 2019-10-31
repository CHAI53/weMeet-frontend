import React, { Component } from "react";
import "./Attendees.scss";
import SingleAttendee from "./SingleAttendee";
import data from "./AttendeesData";

class Attendees extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      count: 8
    };
  }

  render() {
    const { data, count } = this.state;
    return (
      <div className="attendees-box">
        <div className="attendees-nav">
          <span className="attendees-count">참석자({`${count}`})</span>
          <span className="see-all">모두 보기</span>
        </div>
        <div className="attendees-wrapper">
          {data.map((attendee, index) => {
            return <SingleAttendee props={attendee} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Attendees;
