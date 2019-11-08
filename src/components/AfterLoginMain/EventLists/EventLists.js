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
      // data: EventListsData
      data: null
    };
  }

  componentDidMount() {
    const key = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.BQaYsgMzTzB3FGNyGVccFd5LQqgXmM6zXpLVAA5V8QA`;
    fetch("http://10.58.0.106:8000/user/account", {
      method: "GET",
      headers: { Authorization: key }
    })
      .then(res => res.json())
      .then(info => {
        this.setState({
          data: info.data
        });
      });
  }

  createEventList = () => {
    let eventGroup = [];
    for (let i = 0; i < 3; i++) {
      let eventSingle = [];
      let start = i * 5;
      for (let j = start; j < start + 5; j++) {
        eventSingle.push(
          <SingleEvent
            // eventId={this.state.data[j].eventId}
            // groupName={this.state.data[j].groupName}
            // eventName={this.state.data[j].eventName}
            // expectMembers={this.state.data[j].expectMembers}
            eventId={this.state.data[j].data.id}
            groupName={this.state.data[j].data.group_id}
            eventName={this.state.data[j].data.title}
            expectMembers={this.state.data[j].data.attent_status}
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
    return <>{this.state.data && this.createEventList()}</>;
  }
}

export default EventLists;
