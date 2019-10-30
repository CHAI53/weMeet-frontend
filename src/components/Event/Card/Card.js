import React, { Component } from "react";
import "./Card.scss";
import Timeline from "./Timeline";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      datetime: [
        "2019년 10월 29일 화요일",
        "오후 7:00 오후 8:00까지",
        "매주 화요일"
      ],
      findLocation:
        "Take Shinnonhyeon Station Exit 3. Turn right 180 degrees. Walk straight past 2 streets. Turn right on the third street. Turn left first main street. GSM Terrace is 50 meters on your left, 3rd floor. 신논현역 3번출구에서 나와서 논현역 방향으로 5분 정도 걸어 내려옵니다."
    };
  }
  render() {
    const { datetime, findLocation } = this.state;

    return (
      <section className="card">
        <div className="time-wrapper">
          <div className="time-icon" />
          <Timeline time={datetime} />
        </div>
        <div className="location-wrapper">
          <div className="location-icon" />
          <div className="address-wrapper">
            <div className="address">
              <span>GSM Terrace</span>
              <br /> Nonhyeon-Dong 164-14, 3rd floor · 서울
            </div>
            <div className="findLocation">
              도착 후 그룹 찾는 법<br />
              {findLocation}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Card;
