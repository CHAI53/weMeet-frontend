import React, { Component } from "react";
import "./GroupMainTitle.scss";

export class GroupMainTitle extends Component {
  render() {
    return (
      <div className="group-main-title">
        <div className="group-main-title-in">
          <div className="title-img"></div>
          <div className="title-brief">
            <div className="title-brief-in">
              <div className="brief-name">
                GLOBAL KOREA! (한국인&외국인 친구!)
              </div>
              <div className="brief-body">
                <div className="brief-place">
                  <div className="brief-icon"></div>
                  <div className="brief-icon-text">서울, 한국(대한민국)</div>
                </div>
                <div className="brief-public">
                  <div className="brief-icon"></div>
                  <div className="brief-icon-text">공개 그룹</div>
                </div>
                <div className="brief-leader">
                  <div className="brief-icon"></div>
                  <div className="brief-icon-text">
                    주최자:{" "}
                    <span className="brief-leader-name">Tony Williams</span>
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
