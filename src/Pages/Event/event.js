import React, { Component } from "react";
import Nav from "../../components/Nav/AfterLogInNav";
import EventHeader from "./EventHeader";
import "./Event.scss";
import EventDesc from "../../components/Event/EventDesc";

export default class event extends Component {
  render() {
    return (
      <div className="event">
        <Nav />
        <div className="event-main">
          <EventHeader />
        </div>
        <main>
          <div className="main-left">
            <EventDesc />
          </div>
        </main>
      </div>
    );
  }
}
