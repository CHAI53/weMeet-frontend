import React, {Component} from 'react';
import './AfterLoginMainFooter.scss'

class AfterLoginMainFooter extends Component{
    render(){
        return(
            <div className="after-login-main-footer-wrapper">
                <div className="after-login-main-footer-feed">
                    <div className="after-login-main-footer-feed-top">
                        <span className="after-login-main-footer-feed-top-newgroup">새 그룹 시작하기</span>
                        <span className="after-login-main-footer-feed-top-login">로그아웃</span>
                    </div>
                    <div className="after-login-main-footer-feed-top-under">
                        <span className="after-login-main-footer-text">도움말</span>  
                        <span className="after-login-main-footer-text">소개</span>
                        <span className="after-login-main-footer-text">We:Meet Pro</span>
                        <span className="after-login-main-footer-text">채용정보</span>
                        <span className="after-login-main-footer-text">앱</span>
                        <span className="after-login-main-footer-text">API</span>
                        <span className="after-login-main-footer-text">주제</span>
                        <span className="after-login-main-footer-text">도시 탐색</span>
                        <span className="after-login-main-footer-text">블로그</span>
                    </div>
                    <div className="after-login-main-footer-feed-follow">
                        팔로우하기
                        <div className="icon">
                                <a href="https://ko-kr.facebook.com/meetup/"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/fb.png" alt=""></img></a>
                                <a href="https://www.instagram.com/meetup/"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/insta.png" alt=""></img></a>
                                <a href="https://www.youtube.com/meetup"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/yt.png" alt="" ></img></a>
                                <a href="https://twitter.com/meetup"><img src={require('../../../Images/twitter.png')} alt=""></img></a>
                            </div>
                    </div>
                    <div className="after-login-main-footer-feed-bottom-wrapper">
                    <div className="after-login-main-footer-feed-helper">
                    <span className="after-login-main-footer-helper-first">© 2019 We:Meet</span>  We:Meet은 Graceful_rain Companies Inc.의 전액출자 자회사입니다.
                    </div>
                    <div className="after-login-main-footer-feed-bottom">
                        <span className="after-login-main-footer-text">개인정보</span>
                        <span className="after-login-main-footer-text">이용약관</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AfterLoginMainFooter;