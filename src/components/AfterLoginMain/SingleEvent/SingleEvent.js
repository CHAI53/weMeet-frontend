import React from "react";
import './SingleEvent.scss';

export default function SingleEvent(props) {
    const {key, groupName, eventName, expectMembers} = props;
    return (
        <li className="single-event-list">
            <div className="single-event-content">
                <div className="single-event-group">{groupName}</div>
                <div className="single-event-name">{eventName}</div>
                <div className="expect-members">{expectMembers}</div>
            </div>
        </li>
    );
}