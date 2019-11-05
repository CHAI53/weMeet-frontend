import React, { Component } from 'react';
import './Overview.scss';

export class Overview extends Component {
    render() {
        return (
            <div className="overview">
                <div className="overview-in">
                    <h2 className="overview-title"><span></span></h2>
                    <div className="overview-body">
                        <div className="overview-text"></div>
                        <div className="overview-btn">더 읽기</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overview