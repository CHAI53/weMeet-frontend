import React, { Component } from 'react';
import './UpcomingEvents.scss';

export class UpcomingEvents extends Component {
    render() {
        return (
            <div className="upcoming-events">
                <div className="upcoming-events-in">
                    <div className="upcoming-menu">
                        <div className="upcoming-title">
                            <h3><span></span></h3>
                        </div>
                        <div className="upcoming-see-all">
                            <a className="see-all-in" href>see_all</a>
                        </div>
                    </div>
                    <div className="upcoming-contents">
                        <div className="single-upcoming">
                            <div className="single-upcoming-in">
                                <div className="single-upcoming-brief">
                                    <div className="single-upcoming-brief-in">
                                        <div className="single-upcoming-brief-left">
                                            <div className="single-upcoming-date"></div>
                                            <div className="single-upcoming-name"></div>
                                            <div className="single-upcoming-place"></div>
                                        </div>
                                        <div className="single-upcoming-brief-right">
                                            <span className="single-upcoming-img"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-upcoming-text">
                                    <p className="single-upcoming-text-in"></p>
                                </div>
                                <div className="single-upcoming-attend">
                                    <div className="single-upcoming-attend-in">
                                        <a className="single-attend-btn" href>attend</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-upcoming"></div>
                        <div className="single-upcoming"></div>
                        <div className="single-upcoming"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpcomingEvents
