import React, { Component } from "react";
import "./GroupMaking4.scss";
import GroupHeaderWithBtn from "../../components/GroupMaking/GroupHeaderWithBtn/GroupHeaderWithBtn";
import GroupMakingMain4 from "../../components/GroupMaking/GroupMakingMain4/GroupMakingMain4";
import GroupMakingFooter34 from "../../components/GroupMaking/GroupMakingFooter34/GroupMakingFooter34";

class GroupMaking4 extends Component {
  render() {
    return (
      <div className="start-page">
        <GroupHeaderWithBtn />
        <GroupMakingMain4 />
        <GroupMakingFooter34 />
      </div>
    );
  }
}

export default GroupMaking4;
