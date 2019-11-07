import React, { Component } from "react";
import "./Feeds.scss";
import Flickity from "react-flickity-component";
import SectionTitle from "./SectionTitle/SectionTitle";
import EventClip from "./EventClip/EventClip";
import "./flickity.scss";
import FeedsExample from "./FeedsExample";
import Categories from "../../Categories";

class Feeds extends Component {
  render() {
    return (
      <div className="feeds">
        <SectionTitle />
        <Flickity>
          {FeedsExample.example.map(e => (
            <EventClip
              date={e.date}
              name={e.name}
              desc={e.desc}
              location={e.location}
              people={e.people}
            />
          ))}
        </Flickity>
        <Categories />
      </div>
    );
  }
}

export default Feeds;
