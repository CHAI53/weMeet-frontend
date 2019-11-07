import React, { Component } from "react";
import "./UpcomingEvents.scss";
import Titlebar from "components/GroupPageUser/Titlebar";
import SingleUpcoming from "./SingleUpcomingEvent";
import UpcomingEventsData from "./UpcomingEventsData";

export class UpcomingEvents extends Component {
  constructor() {
    super();
    this.state = {
      data: UpcomingEventsData
    };
  }
  render() {
    return (
      <div className="upcoming-events">
        <div className="upcoming-events-in">
          <Titlebar titlename="예정된 이벤트" />
          <div className="upcoming-contents">
            {this.state.data.map((events, i) => {
              return (
                <SingleUpcoming
                  date={events.date}
                  name={events.name}
                  place={events.place}
                  imageurl={events.imageurl}
                  text={events.text}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default UpcomingEvents;
