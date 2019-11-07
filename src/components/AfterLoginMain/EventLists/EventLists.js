import React, { Component } from "react";
import "./EventLists.scss";
import HostLocalEvents from "components/AfterLoginMain/HostLocalEvents";
import NewStepWithWeMeet from "components/AfterLoginMain/NewStepWithWeMeet";
import SingleEvent from "components/AfterLoginMain/SingleEvent";
import EventListsData from "./EventListsData";

export class EventLists extends Component {
  constructor() {
    super();
    this.state = {
      data: EventListsData
    };
  }

  createEventList = () => {
    let eventGroup = [];
    for (let i = 0; i < 3; i++) {
      let eventSingle = [];
      let start = i * 5;
      for (let j = start; j < start + 5; j++) {
        eventSingle.push(
          <SingleEvent
            groupName={this.state.data[j].groupName}
            eventName={this.state.data[j].eventName}
            expectMembers={this.state.data[j].expectMembers}
          />
        );
      }
      if (i === 1) {
        eventGroup.push(<HostLocalEvents />);
      } else if (i === 2) {
        eventGroup.push(<NewStepWithWeMeet />);
      }
      eventGroup.push(<ul className="group-event-list">{eventSingle}</ul>);
    }
    return eventGroup;
  };

  render() {
    return <>{this.createEventList()}</>;
  }
}

export default EventLists;
