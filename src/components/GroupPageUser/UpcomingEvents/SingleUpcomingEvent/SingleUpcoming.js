import React, { Component } from 'react'
import './SingleUpcoming.scss'

export class SingleUpcoming extends Component {
    render() {
        const SingleEventsLabelImg = (src) => ({
            backgroundImage: `url(${src})`
        })

        return (
            <div className="single-upcoming">
                <div className="single-upcoming-in">
                    <div className="single-upcoming-brief">
                        <div className="single-upcoming-brief-in">
                            <div className="single-upcoming-brief-left">
                                <div className="single-upcoming-date">
                                    {this.props.date}
                                </div>
                                <div className="single-upcoming-name">
                                    {this.props.name}
                                </div>
                                <div className="single-upcoming-place">
                                    <span className="place-icon"/>
                                    <span>{this.props.place}</span>
                                </div>
                            </div>
                            <div className="single-upcoming-brief-right">
                                <span
                                    className="single-upcoming-img"
                                    style={SingleEventsLabelImg(this.props.imageurl)}
                                >
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="single-upcoming-text">
                        <p className="single-upcoming-text-in">
                            {this.props.text}
                        </p>
                    </div>
                    <div className="single-upcoming-attend">
                        <div className="single-upcoming-attend-in">
                            <a className="single-attend-btn" href="true">참석</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleUpcoming
