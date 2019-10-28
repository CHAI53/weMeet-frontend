import React, { Component } from 'react';
import './FindNavbar.scss';

export class FindNavbar extends Component {
    render() {
        return (
            <div className="find-navbar-wrap">
                <div className="find-navbar">
                    <span className="find-navbar-box">
                        <div className="seach-and-range">
                            <div className="dropdown">
                                <input className="main-keyword" type="text" placeholder="검색"></input>
                            </div>
                            <div className="icon-x"></div>
                            <div className="icon-search-glass"></div>
                            <div>반경</div>
                            <div className="dropdown-center">5km</div>
                            <div>지역:</div>
                            <div className="dropdown-location">서울, KR</div>
                        </div>
                    </span>
                    <span className="group-and-calendar">
                        <div className="view-selector">
                            <div className="view-selector-group">
                                그룹
                            </div>
                            <div className="view-selector-calendar">
                                캘린더
                            </div>
                        </div>
                    </span>
                </div>
                <div className="event-day-showing"></div>
            </div>
        )
    }
}

export default FindNavbar