import React, { Component } from "react";
import "./CreatingEventOptions.scss";
import CreatingEventCheckbox from "../CreatingEventCheckbox/CreatingEventCheckbox";
import CreatingEventPayment from "../CreatingEventPayment/CreatingEventPayment";

class CreatingEventOptions extends Component {
  constructor() {
    super();
    this.state = {
      maxAttendee: false,
      payment: false
    };
  }

  handleClick = e => {
    const name = e.target.name;
    const currentState = this.state[name];
    this.setState({
      [name]: !currentState
    });
  };

  render() {
    const { handleClick } = this;
    const { payment } = this.state;

    return (
      <div className="optionsWrapper">
        <div className="optionsTitle">옵션 설정</div>
        <div className="option-box">
          <div className="max-attendees">최대 참석자 수</div>
          <CreatingEventCheckbox name="maxAttendee" onClick={handleClick} />
        </div>
        <div className="option-box">
          <div className="payment">이벤트 회비</div>
          <CreatingEventCheckbox name="payment" onClick={handleClick} />
        </div>
        {payment && <CreatingEventPayment />}
      </div>
    );
  }
}

export default CreatingEventOptions;
