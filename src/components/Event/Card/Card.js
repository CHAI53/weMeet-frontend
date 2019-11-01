import React from "react";
import "./Card.scss";
import Timeline from "./Timeline";

function Card(props) {
  const { address, findGroup, startDate, endDate } = props;

  return (
    <section className="card">
      <div className="time-wrapper">
        <div className="time-icon" />
        <Timeline startDate={startDate} endDate={endDate} />
      </div>
      <div className="location-wrapper">
        <div className="location-icon" />
        <div className="address-wrapper">
          <div className="address">
            <span>{address.first}</span>
            <br /> {address.second}
          </div>
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
