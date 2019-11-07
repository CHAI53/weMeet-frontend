import React, { Component } from "react";
import "./CreatingEventDuration.scss";

class CreatingEventDuration extends Component {
  handleChange = e => {
    const endDate = e.target.value;
    const { handleEndDate } = this.props;
    handleEndDate(endDate);
  };

  render() {
    const { select } = this.props;
    const { handleChange } = this;
    return (
      <div>
        <div className="input-label">지속 기간</div>
        <select
          className="selection"
          name="time"
          value={select}
          onChange={handleChange}
        >
          <option>시간을 선택하세요</option>
          <option value="1">1시간</option>
          <option value="2">2시간</option>
          <option value="3">3시간</option>
          <option value="4">4시간</option>
        </select>
        <span className="arrow" />
      </div>
    );
  }
}

export default CreatingEventDuration;
