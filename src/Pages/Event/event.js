import React, { Component } from "react";
import Nav from "../../components/Nav/AfterLogInNav";
import EventHeader from "./EventHeader";
import EventDesc from "../../components/Event/EventDesc";
import Card from "../../components/Event/Card";
import "./Event.scss";
import GoogleMap from "../../components/Event/GoogleMap/";

export default class Event extends Component {
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
          <div className="main-right">
            <Card />
            <GoogleMap />
          </div>
        </main>
      </div>
    );
  }
}
