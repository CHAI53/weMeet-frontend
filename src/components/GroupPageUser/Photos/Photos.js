import React, { Component } from 'react';
import './Photos.scss';

export class Photos extends Component {
    render() {
        return (
            <div className="photos">
                <div className="photos-in">
                    <div className="photos-menu">
                        <div className="photos-title">
                            <h3><span></span></h3>
                        </div>
                        <div className="photos-see-all">
                            <a className="see-all-in" href>see_all</a>
                        </div>
                    </div>
                    <div className="photos-contents">
                        <div className="photos-contents-in">
                            <ul className="photos-contents-list">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Photos