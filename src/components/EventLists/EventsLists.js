import React, { Component } from 'react'
import './EventsLists.scss'
import HostLocalEvents from 'components/HostLocalEvents';
import NewStepWithMeetup from 'components/NewStepWithMeetup';

export class EventsLists extends Component {
    render() {
        return (
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
        );
    }
}

export default EventsLists