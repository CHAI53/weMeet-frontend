import React from "react";
import { withRouter } from "react-router-dom";
import "./AfterLoginNavRight.scss";

function AfterLoginNavRight(props) {
  const goToProfile = () => {
    props.history.push("/Myprofile");
  };

  const goToMain = () => {
    props.history.push("/after_login_main");
  };

  const goToGroupMaking = () => {
    props.history.push("/groupmaking1");
  };

  return (
    <div className="right">
      <span onClick={goToGroupMaking} className="start-new-group">
        새 그룹 시작하기
        <br />
        30% OFF
      </span>
      <span onClick={goToMain} className="search">
        탐색
      </span>
      <span onClick={goToProfile} className="profile" />
    </div>
  );
}

export default withRouter(AfterLoginNavRight);
