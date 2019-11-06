import React, { Component } from "react";
import "./GroupMaking1.scss";
import GroupMakingHeader from "components/GroupMaking/GroupMakingHeader/GroupMakingHeader";
import GroupMakingMain from "../../components/GroupMaking/GroupMakingMain/GroupMakingMain";
import GroupMakingFooter from "../../components/GroupMaking/GroupMakingFooter/GroupMakingFooter";

class GroupMaking1 extends Component {
  render() {
    return (
      <div className="start-page">
        <GroupMakingHeader />
        <GroupMakingMain />
        <GroupMakingFooter />
      </div>
    );
  }
}

export default GroupMaking1;
