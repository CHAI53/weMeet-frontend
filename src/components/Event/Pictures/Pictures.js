import React from "react";
import "./Pictures.scss";

export default function Pictures(data) {
  const { images } = data;
  return (
    <div className="pictures-wrapper">
      <span className="picture">사진</span>
      <div className="pictures">
        {images.map((el, index) => {
          return <img alt="eventPicture" key={index} src={el.img}></img>;
        })}
      </div>
    </div>
  );
}
