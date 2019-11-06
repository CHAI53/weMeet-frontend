import React, { Component } from 'react';
import './GroupPageUser.scss';
import AfterLogInNav from 'components/Nav/AfterLogInNav';
import GroupMainTitle from 'components/GroupPageUser/GroupMainTitle';
import GroupMainNavbar from 'components/GroupPageUser/GroupMainNavbar';
import Overview from 'components/GroupPageUser/Overview';
import UpcomingEvents from 'components/GroupPageUser/UpcomingEvents';
import Photos from 'components/GroupPageUser/Photos';
// import Discussion from 'components/GroupPageUser/Discussion';
import HashTag from 'components/BeforeLoginMain/HashTag';
import Feeds from 'components/BeforeLoginMain/Feeds';
import GroupPageFooter from 'components/GroupPageUser/GroupPageFooter';


export class GroupPageUser extends Component {
    render() {
        return (
            <div className="group-page">
                <AfterLogInNav/>
                <div className="group-main">
                    <GroupMainTitle/>
                    <GroupMainNavbar/>
                    <div className="group-main-contents-wrapper">
                        <div className="group-main-contents">
                            <div className="group-main-contents-in">
                                <Overview/>
                                <UpcomingEvents/>
                                <Photos/>
                                {/* <Discussion/> */}
                            </div>
                            <div className="related-topic">
                                <div className="topic-name">
                                    추천 주제
                                </div>
                                <HashTag/>
                            </div>
                            <div className="feed-wrapper">
                                <Feeds/>
                            </div>
                        </div>
                    </div>
                </div>
                <GroupPageFooter/>
            </div>
        )
    }
}

export default GroupPageUser