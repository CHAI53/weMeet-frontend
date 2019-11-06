import React, { Component } from "react";
import "./EventClip.scss";

class EventClip extends Component {
  render() {
    return (
      <div className="clip-wrapper">
        <div className="clip-inside-wrapper">
          <div className="clip-header">
            <div className="date">
              {/* 10월 30일 (수), 오후 7:00 */}
              {this.props.date}
            </div>
            <div className="clip-name">
              <span className="clip-name-text">
                {/* Gananam 1:1 and 1:2 Language Exchange [Korean - ENglish] */}
                {this.props.name}
              </span>
            </div>
            <div className="clip-desc">
              <span className="clip-desc-text">
                {/* Learning Korea Language with Native Korean */}
                {this.props.desc}
              </span>
            </div>
            <div className="clip-location">
              <span className="clip-location-text">
                <img
                  src="https://files.slack.com/files-pri/TH0U6FBTN-FPX4FQQN4/location.png"
                  alt=""
                ></img>
                {/* GSM Global Seoul Mates(Gangnam) */}
                {this.props.location}
              </span>
            </div>
          </div>
          <div className="clip-footer">
            <span className="people-count">
              {/* 참석인원 5명 */}
              참석인원 {this.props.people}명
            </span>
            <button className="clip-button">참석</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EventClip;
