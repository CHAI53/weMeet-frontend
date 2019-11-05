import React, { Component } from "react";
import "./MainVideo.scss";

class MainVideo extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="video-wrapper">
          <video className="main-video" loop autoPlay>
            <source
              src="https://www.meetup.com/mu_static/ko-KR/video.dddafbfe.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="video-in-text">
          <div className="large-text">
            <p className="large-text">직접 만나 함께하는 즐거움</p>
          </div>
          <div className="small-text">
            <p className="small-text">
              로컬 그룹에 가입하고 사람들과 코딩을 함께 하며 새로운 경험을
              즐겨보세요.
            </p>
          </div>
          <div className="video-in-signup" type="button">
            <p className="video-in-signup-text">We:Meet 가입하기</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MainVideo;
