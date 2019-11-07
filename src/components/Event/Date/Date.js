import React, { Component } from "react";
import { makeKorDate } from "utils/common.js";
import "./Date.scss";

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.date,
      date: makeKorDate(props.date, "date"),
      month: makeKorDate(props.date, "month")
    };
  }

  // getDate = date => {
  //   if (date[8] === "0") {
  //     return date.slice(9, 10);
  //   } else {
  //     return date.slice(8, 10);
  //   }
  // };

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
