import React, { Component } from "react";
import "./Title.scss";
import Status from "./Status";
import EventTitle from "./EventTitle/EventTitle";
import HostInfo from "./HostInfo/HostInfo";

class Title extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
      title: "Gangnam, Meetup en Español Spanish Language Meet up"
    };
  }
  render() {
    const { title, status } = this.state;

    return (
      <div className="title-wrapper">
        <Status status={status} />
        <EventTitle title={title} />
        <HostInfo />
      </div>
    );
  }
}

export default Title;
