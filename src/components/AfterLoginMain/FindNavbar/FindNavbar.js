import React, { Component } from 'react';
import './FindNavbar.scss';

export class FindNavbar extends Component {
    render() {
        return (
            <div className={this.props.inverted}>
                <div className="find-navbar">
                    <div className="find-navbar-left">
                        <div className="left-form">
                            <div className="dropdown-bar">
                                <input className="input-dropdown" placeholder="검색"></input>
                                <ul className="dropdown-menu">
                                    {/* <li>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </div>
                            <div>반경</div>
                            <div className="dropdown-center">5km</div>
                            <div>지역:</div>
                            <div className="dropdown-location">서울, KR</div>
                        </div>
                    </div>
                    <div className="find-navbar-right">
                        <ul className="view-selector">
                            <li className="view-selector-group">
                                <span className="view-selector-group-anc">그룹</span>
                            </li>
                            <li className="view-selector-calendar">
                                <span  className="view-selector-calendar-anc">캘린더</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="event-day-showing"></div>
            </div>
        );
    }
}

export default FindNavbar