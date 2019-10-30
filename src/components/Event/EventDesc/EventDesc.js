import React, { Component } from "react";
import { desc, pictures } from "./EventData";
import "./EventDesc.scss";
import Attendees from "../Attendees/";
import EventDetail from "./EventDetail";
import Pictures from "../Pictures";

class EventDesc extends Component {
  constructor() {
    super();
    this.state = {
      detail: {
        image:
          "https://secure.meetupstatic.com/photos/event/6/0/f/highres_486181551.jpeg",
        description: desc
      },
      pictures: pictures
    };
  }

  render() {
    const { detail, pictures } = this.state;
    return (
      <div className="description">
        <EventDetail props={detail} />
        <Attendees />
        {/* <Pictures images={pictures} /> */}
      </div>
    );
  }
}

export default EventDesc;
