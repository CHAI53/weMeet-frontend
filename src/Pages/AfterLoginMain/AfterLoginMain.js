import React, { Component } from 'react';
import HostEvents from '../../components/HostEvents';
import NewStepWithMeetup from '../../components/NewStepWithMeetup';
import SeeMore from '../../components/SeeMore';

export class AfterLoginMain extends Component {
    render() {
        return (
            <div className="after-login-main-page">
                <div className="pre-alm-page"></div>
                <div classname="alm-page">
                    <div className="alm-left">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <HostEvents/>
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
                        <SeeMore/>
                    </div>
                    <div className="alm-right"></div>
                </div>
            </div>
        )
    }
}

export default AfterLoginMain