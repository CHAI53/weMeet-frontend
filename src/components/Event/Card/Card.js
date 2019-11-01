import React from "react";
import "./Card.scss";
import Timeline from "./Timeline";

function Card(props) {
  const { address, findGroup, startDate, endDate, geo } = props;

  return (
    <section className="card">
      <div className="time-wrapper">
        <div className="time-icon" />
        <Timeline startDate={startDate} endDate={endDate} />
      </div>
      <div className="location-wrapper">
        <div className="location-icon" />
        <div className="address-wrapper">
          <a
            href={`https://www.google.com/maps/place/${geo.lat} ${geo.lng}`}
            target="blank"
            className="address"
          >
            <span>{address.first}</span>
            <br /> {address.second}
          </a>
          <div className="findLocation">
            이벤트 장소 찾는 법<br />
            {findGroup}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
