import React, { Component } from 'react'
import './EventsLists.scss'
import HostLocalEvents from 'components/HostLocalEvents';
import NewStepWithMeetup from 'components/NewStepWithMeetup';
import SingleEvent from './SingleEvent';
import EventListsData from './EventListsData';

export class EventsLists extends Component {
    constructor() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
        super()
        this.state = {
            data: EventListsData
        }
    }

    // getCurrentDate = () => {
    //     let week = ['일', '월', '화', '수', '목', '금', '토'];
    //     let today = new Date();
    //     let year = String(today.getFullYear());
    //     let month = String(today.getMonth() + 1);
    //     let day = String(today.getDate());
    //     let dayName = week[today.getDay()];
    //     return `${year}${'년 '}${month}${'월 '}${day}${'일 '}${dayName}${'요일'}`
    // }

    createEventList = () => {
        let eventGroup = [];
        for (let i = 0; i < 3; i++) {
            let eventSingle = [];
            for (let j = 0; j < 15; j++) {
                eventSingle.push(<SingleEvent
                    key={this.state.data[j].eventId}
                    groupName={this.state.data[j].groupName}
                    eventName={this.state.data[j].eventName}
                    expectMembers={this.state.data[j].expectMembers}
                />);
                console.log(this.state.data[j].eventId);
                console.log(this.state.data[j].groupName);
                console.log(this.state.data[j].eventName);
                console.log(this.state.data[j].expectMembers);
            }
            eventGroup.push(<ul className="group-event-list">{eventSingle}</ul>);
        }
        return eventGroup;
    }

    render() {
        return (
            <>
                {this.createEventList()}
                <HostLocalEvents/>
                <NewStepWithMeetup/>
            </>
        );
    }
}

export default EventsLists