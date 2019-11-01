import React, { Component } from "react";
import "./Title.scss";
import Status from "./Status";
import EventTitle from "./EventTitle/EventTitle";
import HostInfo from "./HostInfo/HostInfo";

class Title extends Component {
  constructor(props) {
    super(props);
    const { isValidEvent } = this;

    this.state = {
      status: isValidEvent(props.status)
    };
  }

  isValidEvent = date => {
    const x = new Date(date);
    const now = new Date();
    return x > now;
  };

  render() {
    const { status } = this.state;
    const { hostInfo, title } = this.props;

    return (
      <div className="title-wrapper">
        <Status status={status} />
        <EventTitle title={title} />
        <HostInfo hostInfo={hostInfo} />
      </div>
    );
  }
}

export default Title;
