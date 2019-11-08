import React, { Component } from "react";
import "./GroupMaking2.scss";
import GroupMakingHeader from "components/GroupMaking/GroupMakingHeader/GroupMakingHeader";
import GroupMakingMain2 from "../../components/GroupMaking/GroupMakingMain2/GroupMakingMain2";
import GroupMakingFooter12 from "../../components/GroupMaking/GroupMakingFooter12/GroupMakingFooter12";

class GroupMaking2 extends Component {
  render() {
    return (
      <div className="start-page">
        <GroupMakingHeader />
        <GroupMakingMain2 />
        <GroupMakingFooter12 />
      </div>
    );
  }
}

export default GroupMaking2;
