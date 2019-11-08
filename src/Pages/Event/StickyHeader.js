import React, { Component } from "react";
import { verifyAttendStatus } from "utils/common.js";

class StickyHeader extends Component {
  constructor(props) {
    super(props);
    const { limitUser, attendeesCount, attendStatus, title, date } = props;
    const { getDate } = this;
    this.state = {
      accept: false,
      refuse: false,
      timeline: {
        time: props.date,
        date: `${getDate(date)}일`,
        month: `${date.slice(5, 7)}월`
      },
      title: {
        status: verifyAttendStatus(
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

  handleClick = e => {
    if (e.target.name === "accept") {
      fetch("http://locashost:8000/event/add", {
        method: "post",
        body: {
          message: ""
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === "success") {
            this.setState({ accept: true, refuse: false });
          }
        })
        .catch(err => console.log(err));
    }

    if (e.target.name === "refuse") {
      fetch("http://locashost:8000/event/add", {
        method: "post",
        body: {
          message: ""
        }
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === "success") {
            this.setState({ accept: false, refuse: true });
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { time, date, month } = this.state.timeline;
    const { title, status } = this.state.title;
    const { handleClick } = this;
    const { accept, refuse } = this.state;

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

        <div className="buttons">
          {status ? (
            <>
              <button
                className={!accept && "clicked"}
                name="accept"
                onClick={handleClick}
              >
                <span className="accept" />
              </button>
              <button
                className={!refuse && "clicked"}
                name="refuse"
                onClick={handleClick}
              >
                <span className="refuse" />
              </button>
            </>
          ) : (
            <div>이벤트에 참석할 수 없습니다</div>
          )}
        </div>
      </div>
    );
  }
}

export default StickyHeader;
