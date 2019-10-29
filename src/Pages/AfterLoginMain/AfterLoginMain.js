import React, { Component } from 'react';
import './AfterLoginMain.scss';
import MemberHomeHead from 'components/MemberHomeHead';
import FindNavbar from 'components/FindNavbar';
import HostLocalEvents from 'components/HostLocalEvents';
import NewStepWithMeetup from 'components/NewStepWithMeetup';
import SeeMoreBtn from 'components/SeeMoreBtn';
import SimpleEventFilter from 'components/SimpleEventFilter';

export class AfterLoginMain extends Component {
    constructor() {
        super()
        this.state = {
        }

        // const getCurrentDate = () => {
        //     let week = ['일', '월', '화', '수', '목', '금', '토'];
        //     let today = new Date();
        //     let year = String(today.getFullYear());
        //     let month = String(today.getMonth() + 1);
        //     let day = String(today.getDate());
        //     let dayName = week[today.getDay()];
        //     return `${year}${'년 '}${month}${'월 '}${day}${'일 '}${dayName}${'요일'}`
        // }
    }
    render() {
        return (
            <div className="after-login-main-page">
                <div className="pre-alm-page">
                    <MemberHomeHead/>
                    <FindNavbar/>
                </div>
                <div className="alm-page">
                    <div className="alm-left">
                        <ul>
                            <li value={this.getCurrentDate}></li>
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
        );
    }
}

export default AfterLoginMain