import React, { Component } from 'react';
import './Topics.scss';

export class Topics extends Component {
    render() {
        return (
            <div className="topics">
                <div className="topics-in">
                    <h3><span></span></h3>
                    <div>
                        <a className="topic" href="true">tag</a>
                        <a className="topic" href="true">tag</a>
                        <a className="topic" href="true">tag</a>
                        <a className="topic" href="true">tag</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topics