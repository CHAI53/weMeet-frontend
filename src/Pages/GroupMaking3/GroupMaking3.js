import React, { Component } from "react";
import "./GroupMaking3.scss";
import GroupMakingHeader from "components/GroupMaking/GroupMakingHeader/GroupMakingHeader";
import GroupMakingMain3 from "../../components/GroupMaking/GroupMakingMain3/GroupMakingMain3";
import GroupMakingFooter23 from "../../components/GroupMaking/GroupMakingFooter23/GroupMakingFooter23";

class GroupMaking3 extends Component {
  render() {
    return (
      <div className="start-page">
        <GroupMakingHeader />
        <GroupMakingMain3 />
        <GroupMakingFooter23 />
      </div>
    );
  }
}

export default GroupMaking3;
