import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./CreateEventDatePicker.scss";

class CreatingEventDatePicker extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    const { startDate } = this.state;
    const { handleChange } = this;

    return (
      <div className="date">
        <div className="input-label">날짜 및 시간</div>
        <DatePicker
          className="calender"
          selected={startDate}
          onChange={handleChange}
          calendarClassName="rasta-stripes"
          dateFormat="yyyy d MMMM"
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
