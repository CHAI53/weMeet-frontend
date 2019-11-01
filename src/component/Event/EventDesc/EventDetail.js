import React from "react";

export default function EventDetail(props) {
  const { image, description } = props.detail;

  return (
    <>
      <span
        className="event-img"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="details">
        <span className="detail">세부사항</span>
        <p>{description}</p>
      </div>
    </>
  );
}
