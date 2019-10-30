import React, { Component } from "react";
import Nav from "components/Nav/AfterLogInNav";
import EventHeader from "./EventHeader";
import EventDesc from "components/Event/EventDesc";
import Card from "components/Event/Card";
import "./Event.scss";
import GoogleMap from "components/Event/GoogleMap/";
import StickyHeader from "./StickyHeader";

export default class Event extends Component {
  state = {
    sticky: false
  };

  componentDidMount() {
    const { handleScroll } = this;
    window.addEventListener("scroll", handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY >= 69 + 220) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };

  render() {
    const { sticky } = this.state;

    return (
      <div className="event">
        <Nav />
        <div className="event-header">
          <EventHeader />
          {sticky && <StickyHeader />}
        </div>
        <main>
          <div className="main-right-wrapper">
            <div className="main-right">
              <Card />
              <GoogleMap />
            </div>
          </div>
          <div className="main-left">
            <EventDesc />
          </div>
        </main>
      </div>
    );
  }
}
