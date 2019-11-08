import React, { Component } from "react";
import "./GroupMaking1.scss";
import GroupMakingHeader from "components/GroupMaking/GroupMakingHeader/GroupMakingHeader";
import GroupMakingMain1 from "../../components/GroupMaking/GroupMakingMain1/GroupMakingMain1";
import GroupFooterNoBack from "../../components/GroupMaking/GroupFooterNoBack/GroupFooterNoBack";

class GroupMaking1 extends Component {
  render() {
    return (
      <div className="start-page">
        <GroupMakingHeader />
        <GroupMakingMain1 />
        <GroupFooterNoBack />
      </div>
    );
  }
}

export default GroupMaking1;
