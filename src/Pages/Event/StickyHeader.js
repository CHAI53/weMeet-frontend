import React, { Component } from "react";
import * as Utils from "utils/common.js";

class StickyHeader extends Component {
  constructor(props) {
    super(props);
    const { limitUser, attendeesCount, attendStatus, title, date } = props;
    const { getDate } = this;
    this.state = {
      timeline: {
        time: props.date,
        date: `${getDate(date)}일`,
        month: `${date.slice(5, 7)}월`
      },
      title: {
        status: Utils.verifyAttendStatus(
          limitUser - attendeesCount,
          attendStatus,
          date
        ),
        title: title
      }
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
            {status ? "다가올 이벤트" : "지원할 수 없습니다"}
          </div>
          <div className="event-title">{title}</div>
        </div>
        {status && (
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
        )}
      </div>
    );
  }
}

export default StickyHeader;
