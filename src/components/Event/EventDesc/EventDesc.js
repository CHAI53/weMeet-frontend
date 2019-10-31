import React, { Component } from "react";
import { desc } from "./EventData";
import "./EventDesc.scss";
import Attendees from "../Attendees/";
import EventDetail from "./EventDetail";

class EventDesc extends Component {
  constructor() {
    super();
    this.state = {
      detail: {
        image:
          "https://secure.meetupstatic.com/photos/event/6/0/f/highres_486181551.jpeg",
        description: desc
      }
    };
  }

  render() {
    const { detail } = this.state;
    return (
      <div className="description">
        <EventDetail props={detail} />
        <Attendees />
      </div>
    );
  }
}

export default EventDesc;
