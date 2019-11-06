import React, { Component } from "react";
import "./AfterLoginMain.scss";
import AfterLogInNav from "components/Nav/AfterLogInNav";
import MemberHomeHead from "components/AfterLoginMain/MemberHomeHead";
import FindNavbar from "components/AfterLoginMain/FindNavbar";
import EventLists from "components/AfterLoginMain/EventLists";
import SeeMoreBtn from "components/AfterLoginMain/SeeMoreBtn";
import SimpleEventFilter from "components/AfterLoginMain/SimpleEventFilter";
import AfterLoginMainFooter from "components/AfterLoginMain/AfterLoginMainFooter";

export class AfterLoginMain extends Component {
  render() {
    return (
      <div className="after-login-main-page">
        <AfterLogInNav />
        <div className="pre-alm-page">
          <MemberHomeHead />
          <FindNavbar />
        </div>
        <div className="alm-page">
          <div className="alm-left">
            <EventLists />
            <SeeMoreBtn />
          </div>
          <div className="alm-right">
            <SimpleEventFilter />
          </div>
        </div>
        <AfterLoginMainFooter />
      </div>
    );
  }
}

export default AfterLoginMain;
