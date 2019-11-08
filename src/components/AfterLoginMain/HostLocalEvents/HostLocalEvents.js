import React, { Component } from "react";
import "./HostLocalEvents.scss";
import { withRouter } from "react-router-dom";

export class HostLocalEvents extends Component {
  handleclick = () => {
    // const id = this.props.groupId;
    this.props.history.push(`/groupmaking1`);
  };

  render() {
    return (
      <div className="host-local-events">
        <div className="host-local-events-header">
          <h2 className="host-local-events-header-title">
            Seolleung II에서 이벤트 주최하기
          </h2>
          <p className="host-local-events-header-description">
            내가 찾고 있는 주제의 그룹이 없나요? 그룹을 직접 만들고 로컬
            이벤트를 직접 주최해 보세요.
          </p>
        </div>
        <ul className="host-local-events-list">
          <li
            className="host-local-events-list-item"
            onClick={this.handleclick}
          >
            <div className="host-local-events-card">
              <div className="host-local-events-card-title">피트니스</div>
              <div className="host-local-events-card-subtitle">
                17,575 명이 이 주제를 팔로우합니다
              </div>
              <div className="host-local-events-card-cta">Host events</div>
            </div>
          </li>
          <li
            className="host-local-events-list-item"
            onClick={this.handleclick}
          >
            <div className="host-local-events-card">
              <div className="host-local-events-card-title">외식</div>
              <div className="host-local-events-card-subtitle">
                26,240 명이 이 주제를 팔로우합니다
              </div>
              <div className="host-local-events-card-cta">Host events</div>
            </div>
          </li>
          <li
            className="host-local-events-list-item"
            onClick={this.handleclick}
          >
            <div className="host-local-events-card">
              <div className="host-local-events-card-title">Open Source</div>
              <div className="host-local-events-card-subtitle">
                7,961 명이 이 주제를 팔로우합니다
              </div>
              <div className="host-local-events-card-cta">Host events</div>
            </div>
          </li>
          <li
            className="host-local-events-list-item"
            onClick={this.handleclick}
          >
            <div className="host-local-events-card">
              <div className="host-local-events-card-title">
                새로 이사왔어요
              </div>
              <div className="host-local-events-card-subtitle">
                1,293 명이 이 주제를 팔로우합니다
              </div>
              <div className="host-local-events-card-cta">Host events</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(HostLocalEvents);
