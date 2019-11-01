import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "components/Nav/AfterLogInNav";
import EventHeader from "./EventHeader";
import EventDesc from "components/Event/EventDesc";
import Card from "components/Event/Card";
import "./Event.scss";
import GoogleMap from "components/Event/GoogleMap/";
import StickyHeader from "./StickyHeader";
import SmallHeader from "./SmallHeader";
import mockUpData from "./EventData";

class Event extends Component {
  state = {
    sticky: false,
    data: mockUpData
  };

  // getData = () => {
  //   const { eventId } = this.props.match.params;
  //   fetch(`http://localhost:8000/event/${eventId}`)
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // };

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
    const { data } = this.state.data;
    const { sticky } = this.state;

    return (
      <div className="event">
        <SmallHeader />
        <Nav />
        <div className="event-header">
          <EventHeader
            date={data.startDate}
            title={data.name}
            hostInfo={data.hostInfo}
            limitUser={data.limitUser}
            attendeesCount={data.attendeesCount}
            attendStatus={data.attendStatus}
            eventId={data.id}
          />
          {sticky && (
            <StickyHeader
              title={data.name}
              attendStatus={data.attendStatus}
              attendeesCount={data.attendeesCount}
              limitUser={data.limitUser}
              date={data.startDate}
              eventId={data.id}
            />
          )}
        </div>
        <main>
          <div className="main-right-wrapper">
            <div className="main-right">
              <Card
                startDate={data.startDate}
                endDate={data.endDate}
                address={data.address}
                findGroup={data.findGroup}
              />
              <GoogleMap geo={{ lat: data.lat, lng: data.lng }} />
            </div>
          </div>
          <div className="main-left">
            <EventDesc
              detail={{ image: data.mainImage, description: data.introduction }}
              attendeesInfo={data.attendeesInfo}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Event);
