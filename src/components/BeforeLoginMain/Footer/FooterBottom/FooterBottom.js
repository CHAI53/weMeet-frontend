import React, { Component } from "react";
import "./FooterBottom.scss";

class FooterBottom extends Component {
  render() {
    return (
      <div className="bottom-wrapper">
        <div className="bottom-wrapper-top">
          <div className="bottom-wrapper-top-top">
            <a href="/">새 그룹 시작하기</a>
          </div>
          <div className="bottom-wrapper-top-bottom">
            <div className="bottom-wrapper-top-bottom-group">
              <div className="text">
                <span>내 계정</span>
              </div>
              <div className="text">
                <a href="/">회원가입</a>
              </div>
              <div className="text">
                <a href="/login">로그인</a>
              </div>
              <div className="text">
                <a href="/">도움말</a>
              </div>
            </div>
            <div className="bottom-wrapper-top-bottom-group">
              <div className="text">
                <span>탐색</span>
              </div>
              <div className="text">
                <a href="/">그룹</a>
              </div>
              <div className="text">
                <a href="/">캘린더</a>
              </div>
              <div className="text">
                <a href="/">주제</a>
              </div>
              <div className="text">
                <a href="/">도시</a>
              </div>
            </div>
            <div className="bottom-wrapper-top-bottom-group">
              <div className="text">
                <span>We:Meet</span>
              </div>
              <div className="text">
                <a href="/">정보</a>
              </div>
              <div className="text">
                <a href="/">We:Meet Pro</a>
              </div>
              <div className="text">
                <a href="/">채용정보</a>
              </div>
              <div className="text">
                <a href="/event">앱</a>
              </div>
              <div className="text">
                <a href="/">API</a>
              </div>
              <div className="text">
                <a href="/">접근성</a>
              </div>
            </div>
            <div className="bottom-wrapper-top-bottom-icon-group">
              <div className="text">
                <span>팔로우하기</span>
              </div>
              <div className="icon">
                <a href="https://ko-kr.facebook.com/meetup/">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/fb.png"
                    alt=""
                  ></img>
                </a>
                <a href="https://www.instagram.com/meetup/">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/insta.png"
                    alt=""
                  ></img>
                </a>
                <a href="https://www.youtube.com/meetup">
                  <img
                    src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/yt.png"
                    alt=""
                  ></img>
                </a>
                <a href="https://twitter.com/meetup">
                  <img src={require("./twitter.png")} alt=""></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-wrapper-bottom">
          <div className="bottom-wrapper-bottom-first">
            © We:Meet 2019 ㆍ We:Meet은 Graceful_rain Companies Inc.의 전액출자
            자회사입니다.
          </div>
          <div className="bottom-wrapper-bottom-second">
            이용약관 ㆍ 개인정보처리방침 ㆍ 쿠키 정책
          </div>
        </div>
      </div>
    );
  }
}

export default FooterBottom;
