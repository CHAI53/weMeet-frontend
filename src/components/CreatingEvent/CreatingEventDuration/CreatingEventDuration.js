import React, { Component } from "react";
import "./CreatingEventDuration.scss";

class CreatingEventDuration extends Component {
  constructor() {
    super();
    this.state = {
      select: "1시간"
    };
  }

  handleChange = e => {
    this.setState({ select: e.target.value });
  };

  render() {
    const { select } = this.state;
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
          <option value="1hour">1시간</option>
          <option value="1.5hour">1.5시간</option>
          <option value="2hour">2시간</option>
          <option value="3hour">3시간</option>
        </select>
        <span className="arrow" />
      </div>
    );
  }
}

export default CreatingEventDuration;
