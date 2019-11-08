import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { verifyAttendStatus, makeKorDate, isUserLoggedIn } from "utils/common";

class StickyHeader extends Component {
  constructor(props) {
    super(props);
    const { limitUser, attendeesCount, attendStatus, title, date } = props;
    const { getDate } = this;
    this.state = {
      timeline: {
        time: props.date,
        date: makeKorDate(date, "date"),
        month: makeKorDate(date, "month")
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

  handleClick = () => {
    this.props.history.push("/login");
  };

  render() {
    const { time, date, month } = this.state.timeline;
    const { title, status } = this.state.title;
    const { handleClick } = this;

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
          {!isUserLoggedIn() ? (
            <div className="loginFirst" onClick={handleClick}>
              먼저 로그인해주세요
            </div>
          ) : status ? (
            <>
              <button>
                <span className="accept" />
              </button>
              <button>
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

export default withRouter(StickyHeader);
