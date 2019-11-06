import React, { Component } from 'react';
import './UpcomingEvents.scss';
import Titlebar from 'components/GroupPageUser/Titlebar';
import SingleUpcoming from './SingleUpcomingEvent';

export class UpcomingEvents extends Component {
    render() {
        return (
            <div className="upcoming-events">
                <div className="upcoming-events-in">
                    <Titlebar titlename="예정된 이벤트 5+개"/>
                    <div className="upcoming-contents">
                        <SingleUpcoming/>
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
