import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./CreateEventDatePicker.scss";

class CreatingEventDatePicker extends Component {
  handleChange = date => {
    this.props.onDate(date);
  };

  render() {
    const { startDate } = this.props;
    const { handleChange } = this;

    return (
      <div className="datePicker">
        <div className="input-label">날짜 및 시간</div>
        <DatePicker
          className="calender"
          selected={startDate}
          onChange={handleChange}
          calendarClassName="rasta-stripes"
          dateFormat="yyyy년 MM월 d일"
        />
        <DatePicker
          className="time"
          onChange={handleChange}
          selected={startDate}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="aa h:mm"
        />
      </div>
    );
  }
}

export default CreatingEventDatePicker;
