import React, { Component } from "react";
import "./GroupMainTitle.scss";
import GroupMainTitleData from "./GroupMainTitleData";

export class GroupMainTitle extends Component {
  state = {
    data: GroupMainTitleData
  };

  render() {
    const { imageurl, name, place, leader } = this.state.data[0];
    const GroupPageTitleImg = src => ({
      backgroundImage: `url(${src})`
    });
    console.log(GroupPageTitleImg(imageurl));
    return (
      <div className="group-main-title">
        <div className="group-main-title-in">
          <div className="title-img" style={GroupPageTitleImg(imageurl)}></div>
          <div className="title-brief">
            <div className="title-brief-in">
              <div className="brief-name">{name}</div>
              <div className="brief-body">
                <div className="brief-place">
                  <div className="brief-icon"></div>
                  <div className="brief-icon-text">{place}</div>
                </div>
                <div className="brief-public">
                  <div className="brief-icon"></div>
                  <div className="brief-icon-text">
                    {this.state.data[0].public}
                  </div>
                </div>
                <div className="brief-leader">
                  <div className="brief-icon"></div>
                  <div className="brief-icon-text">
                    주최자:
                    <span className="brief-leader-name">{leader}</span>
                  </div>
                </div>
              </div>
              <div className="brief-share">
                <div className="brief-social">
                  <div className="social-text">공유: </div>
                  <div className="social-facebook"></div>
                  <div className="social-twitter"></div>
                  <div className="social-linkedin"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMainTitle;
