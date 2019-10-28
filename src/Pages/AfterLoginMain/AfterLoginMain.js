import React, { Component } from 'react';
import MemberHomeHead from '../../components/MemberHomeHead';
import FindNavbar from '../../components/FindNavbar';
import HostLocalEvents from '../../components/HostLocalEvents';
import NewStepWithMeetup from '../../components/NewStepWithMeetup';
import SeeMoreBtn from '../../components/SeeMoreBtn';
import SimpleEventFilter from '../../components/SimpleEventFilter';

export class AfterLoginMain extends Component {
    render() {
        return (
            <div className="after-login-main-page">
                <div className="pre-alm-page">
                    <MemberHomeHead/>
                    <FindNavbar/>
                </div>
                <div classname="alm-page">
                    <div className="alm-left">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <HostLocalEvents/>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>
                                <NewStepWithMeetup/>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <SeeMoreBtn/>
                    </div>
                    <div className="alm-right">
                        <SimpleEventFilter/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AfterLoginMain