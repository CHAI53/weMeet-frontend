import React, {Component} from 'react';
import './CommonFooter.scss'

class CommonFooter extends Component{
    render(){
        return(
            <div className="common-footer-wrapper">
                <div className="common-footer-feed">
                    <div className="common-footer-feed-top">
                        <span className="common-footer-feed-top-newgroup">새 그룹 시작하기</span>
                        <span className="common-footer-feed-top-login">로그인</span>
                    </div>
                    <div className="common-footer-feed-top-under">
                        <span className="common-footer-text">도움말</span>  
                        <span className="common-footer-text">소개</span>
                        <span className="common-footer-text">We:Meet Pro</span>
                        <span className="common-footer-text">채용정보</span>
                        <span className="common-footer-text">앱</span>
                        <span className="common-footer-text">API</span>
                        <span className="common-footer-text">주제</span>
                        <span className="common-footer-text">도시 탐색</span>
                        <span className="common-footer-text">블로그</span>
                    </div>
                    <div className="common-footer-feed-follow">
                        팔로우하기
                        <div className="icon">
                                <a href="https://ko-kr.facebook.com/meetup/"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/fb.png" alt=""></img></a>
                                <a href="https://www.instagram.com/meetup/"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/insta.png" alt=""></img></a>
                                <a href="https://www.youtube.com/meetup"><img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/yt.png" alt="" ></img></a>
                                <a href="https://twitter.com/meetup"><img src={require('../Footer/FooterBottom/twitter.png')} alt=""></img></a> 
                            </div>
                    </div>
                    <div className="common-footer-feed-bottom-wrapper">
                    <div className="common-footer-feed-helper">
                    <span className="common-footer-helper-first">© 2019 We:Meet</span>  We:Meet은 Graceful_rain Companies Inc.의 전액출자 자회사입니다.
                    </div>
                    <div className="common-footer-feed-bottom">
                        <span className="common-footer-text">개인정보</span>
                        <span className="common-footer-text">이용약관</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommonFooter;