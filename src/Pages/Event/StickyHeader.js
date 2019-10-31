import React, { Component } from "react";

export default class StickyHeader extends Component {
  constructor() {
    super();
    this.state = {
      timeline: {
        time: "1572256800000",
        date: "28일",
        month: "10월"
      },
      title: {
        status: true,
        title: "Gangnam, Meetup en Español Spanish Language Meet up"
      }
    };
  }
  render() {
    const { time, date, month } = this.state.timeline;
    const { title, status } = this.state.title;

    return (
      <div className="sticky-header">
        <div className="date-wrapper">
          <time dateTime={time}>
            <span className="date">{date}</span>
            <span className="month">{month}</span>
          </time>
        </div>
        <div className="title-wrapper">
          <div className="status">
            {status ? "지금 진행 중" : "지난 이벤트"}
          </div>
          <div className="event-title">{title}</div>
        </div>
        <div className="buttons">
          <button>
            <span className="accept" />
          </button>
          <button>
            <span className="refuse" />
          </button>
          <div>
            <span className="favorite" />
          </div>
        </div>
      </div>
    );
  }
}
