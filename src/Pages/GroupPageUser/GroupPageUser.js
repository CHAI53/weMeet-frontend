import React, { Component } from "react";
import "./GroupPageUser.scss";
import AfterLogInNav from "components/Nav/AfterLogInNav";
import GroupMainTitle from "components/GroupPageUser/GroupMainTitle";
import GroupMainNavbar from "components/GroupPageUser/GroupMainNavbar";
import Overview from "components/GroupPageUser/Overview";
import UpcomingEvents from "components/GroupPageUser/UpcomingEvents";
import Photos from "components/GroupPageUser/Photos";
import HashTag from "components/BeforeLoginMain/HashTag";
import Flickity from "react-flickity-component";
import EventClip from "components/BeforeLoginMain/Feeds/EventClip";
import "components/BeforeLoginMain/Feeds/flickity.scss";
import FeedsExample from "components/BeforeLoginMain/Feeds/FeedsExample.js";
import GroupPageFooter from "components/GroupPageUser/GroupPageFooter";

export class GroupPageUser extends Component {
  componentDidMount() {
    console.log(this.props);
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div className="group-page">
        <AfterLogInNav />
        <div className="group-main">
          <GroupMainTitle />
          <GroupMainNavbar />
          <div className="group-main-contents-wrapper">
            <div className="group-main-contents">
              <div className="group-main-contents-in">
                <Overview />
                <UpcomingEvents />
                <Photos />
              </div>
              <div className="related-topic">
                <div className="topic-name">추천 주제</div>
                <HashTag />
              </div>
              <div className="feed-wrapper">
                <Flickity>
                  {FeedsExample.example.map(e => (
                    <EventClip
                      date={e.date}
                      name={e.name}
                      desc={e.desc}
                      location={e.location}
                      people={e.people}
                    />
                  ))}
                </Flickity>
              </div>
            </div>
          </div>
        </div>
        <GroupPageFooter />
      </div>
    );
  }
}

export default GroupPageUser;
