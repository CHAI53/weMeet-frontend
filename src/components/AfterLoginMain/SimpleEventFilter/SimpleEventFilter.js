import React, { Component } from "react";
import "./SimpleEventFilter.scss";

export class SimpleEventFilter extends Component {
  render() {
    return (
      <ul className="simple-event-filter">
        <li>
          <span className="selected">모든 예정된 이벤트</span>
        </li>
        <li>
          <span className="">Saved events</span>
        </li>
        <li>
          <span className="">나의 그룹 및 추천 그룹</span>
        </li>
        <li>
          <span className="">나의 그룹만</span>
        </li>
        <li>
          <span className="">내 이벤트만</span>
        </li>
      </ul>
    );
  }
}

export default SimpleEventFilter;
