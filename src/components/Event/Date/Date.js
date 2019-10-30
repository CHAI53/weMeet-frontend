import React, { Component } from "react";
import "./Date.scss";

class Date extends Component {
  constructor() {
    super();
    this.state = {
      time: "1572256800000",
      date: "28일",
      month: "10월"
    };
  }
  render() {
    const { time, date, month } = this.state;
    return (
      <div className="date-wrapper">
        <time dateTime={time}>
          <span className="date">{date}</span>
          <span className="month">{month}</span>
        </time>
      </div>
    );
  }
}

export default Date;
