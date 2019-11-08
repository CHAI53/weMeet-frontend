import React, { Component } from "react";
import "./GroupList.scss";
import GroupListItems from "./GroupListItems";

class GroupList extends Component {
  render() {
    return (
      <section className="section categories-wrapper">
        <h2 className="section-title">
          카테고리
          <div className="padding-bottom">
            <span>관심 있는 주제별로 그룹을 찾아보세요.</span>
          </div>
          <GroupListItems />
        </h2>
      </section>
    );
  }
}

export default GroupList;
