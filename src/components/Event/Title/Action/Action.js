import React, { Component } from "react";
import "./Action.scss";
import EventStatus from "./EventStatus";
import EventButtons from "./EventButtons";
import EventShare from "./EventShare";

class Action extends Component {
  constructor() {
    super();
    this.state = {
      eventStatus: false,
      vacancy: 39
    };
  }
  render() {
    const { eventStatus, vacancy } = this.state;
    return (
      <div>
        <EventStatus props={(eventStatus, vacancy)} />
        <EventButtons />
        <EventShare />
      </div>
    );
  }
}

export default Action;
