import React, { Component } from "react";
import "./Date.scss";

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.date,
      date: `${this.getDate(props.date)}일`,
      month: `${props.date.slice(5, 7)}월`
    };
  }

  getDate = date => {
    if (date[8] === "0") {
      return date.slice(9, 10);
    } else {
      return date.slice(8, 10);
    }
  };

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
