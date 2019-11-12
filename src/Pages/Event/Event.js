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
import FooterBottom from "components/BeforeLoginMain/Footer/FooterBottom";
import BeforeLoginNav from "components/BeforeLoginMain/BeforeLoginNav";
import { isUserLoggedIn } from "utils/common.js";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      userLog: false,
      sticky: false,
      data: null
    };
  }

  getData = () => {
    const eventId = this.props.match.params.id;
    fetch(`http://localhost:3030/events/${eventId}`)
      .then(res => res.json())
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err));
  };

  componentDidMount() {
    const { handleScroll, getData } = this;
    window.addEventListener("scroll", handleScroll);
    isUserLoggedIn() && this.setState({ userLog: true });
    getData();
  }

  handleScroll = () => {
    window.scrollY >= 260
      ? this.setState({ sticky: true })
      : this.setState({ sticky: false });
  };

  render() {
    const { data } = this.state;
    const { sticky, userLog } = this.state;
    return (
      <div className="event">
        {!userLog ? (
          <BeforeLoginNav />
        ) : (
          <>
            <SmallHeader />
            <Nav />
          </>
        )}
        <div className="event-header">
          {data && (
            <EventHeader
              date={data.startDate}
              title={data.name}
              hostInfo={data.hostInfo}
              limitUser={data.limitUser}
              attendeesCount={data.attendeesCount}
              attendStatus={data.attendStatus}
              eventId={data.id}
            />
          )}
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
              {data && (
                <>
                  <Card
                    startDate={data.startDate}
                    endDate={data.endDate}
                    address={data.address}
                    findGroup={data.findGroup}
                    geo={{ lat: data.lat, lng: data.lng }}
                  />
                  <GoogleMap geo={{ lat: data.lat, lng: data.lng }} />
                </>
              )}
            </div>
          </div>
          <div className="main-left">
            {data && (
              <EventDesc
                detail={{
                  image: data.mainImage,
                  description: data.introduction
                }}
                attendeesInfo={data.attendeesInfo}
              />
            )}
          </div>
        </main>
        <FooterBottom />
      </div>
    );
  }
}

export default withRouter(Event);
