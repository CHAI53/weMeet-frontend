import React, { Component } from "react";
import "./GroupMainNavbar.scss";

export class GroupMainNavbar extends Component {
  render() {
    return (
      <div className="group-main-navbar">
        <div className="group-main-navbar-in">
          <div className="main-nav-left">
            <div className="main-nav-left-in">
              <ul className="nav-left-list">
                <li>정보</li>
                <li>이벤트</li>
                <li>사진</li>
                <li>토론</li>
              </ul>
            </div>
          </div>
          <div className="main-nav-right">
            <div className="main-nav-right-in">
              <div className="dropdown-btn">
                <div>회원</div>
                <div className="chevron-down"></div>
              </div>
            </div>
            <div>
              <div className="main-nav-right-in-event">
                <div className="master-event-add-btn">
                  <div>일정 등록</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMainNavbar;
