import React, { Component } from 'react';
import './GroupPageUser.scss';
import AfterLogInNav from 'components/Nav/AfterLogInNav';
import GroupMainTitle from 'components/GroupPageUser/GroupMainTitle';
import GroupMainNavbar from 'components/GroupPageUser/GroupMainNavbar';
import Overview from 'components/GroupPageUser/Overview';
import UpcomingEvents from 'components/GroupPageUser/UpcomingEvents';
import Photos from 'components/GroupPageUser/Photos';
import Discussion from 'components/GroupPageUser/Discussion';
import Topics from 'components/GroupPageUser/Topics';

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
                                <Discussion/>
                            </div>
                            <Topics/>
                        </div>
                        <div className="neighborhood-event"></div>
                    </div>
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default GroupPageUser