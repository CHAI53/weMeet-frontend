import React, { Component } from "react";
import "./FooterTop.scss";

class FooterTop extends Component {
  render() {
    return (
      <div className="banner-wrapper">
        <div className="banner-top">We:Meet 활용법</div>
        <div className="banner-bottom">
          <div className="banner-bottom-left">
            <img src={require("./search.png")} alt=""></img>
            <div className="banner-bottom-left-group">
              <span className="title">그룹 탐색하기</span>
              <span className="desc">
                내 관심사에 맞는 로컬 이벤트를 운영하는 그룹을 찾아보세요.
              </span>
              <span className="link">
                <a href="/signup">We:Meet 가입하기 →</a>
              </span>
            </div>
          </div>
          <div className="banner-bottom-right">
            <img src={require("./plus.png")} alt=""></img>
            <div className="banner-bottom-right-group">
              <span className="title">그룹 시작하기</span>
              <span className="desc">
                내 We:Meet 그룹을 만들고 나와 같은 열정을 가진 사람들을 모아
                보세요.
              </span>
              <span className="link">
                <a href="/groupmaking1">시작하기 →</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterTop;
