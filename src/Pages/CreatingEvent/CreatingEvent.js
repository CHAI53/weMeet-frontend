import React, { Component } from "react";
import "./CreatingEvent.scss";
import { withRouter } from "react-router-dom";
import Nav from "components/Nav/AfterLogInNav";
import CreatingEventTitle from "components/CreatingEvent/CreatingEventTitle";
import CreatingEventNeces from "components/CreatingEvent/CreatingEventNeces";
import CreatingEventDatePicker from "components/CreatingEvent/CreatingEventDatePicker";
import CreatingEventDuration from "components/CreatingEvent/CreatingEventDuration";

class CreatingEvent extends Component {
  constructor(props) {
    super(props);
    const group_name = props.match.params.group_name;
  }

  render() {
    return (
      <div className="create-event">
        <Nav />
        <main className="create-event-main">
          <div className="main-left">
            <CreatingEventTitle />
            <div className="choices">
              <CreatingEventNeces />
              <CreatingEventDatePicker />
              <CreatingEventDuration />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(CreatingEvent);
