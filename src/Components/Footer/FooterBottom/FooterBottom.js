import React, {Component} from 'react';
import './FooterBottom.scss'

class FooterBottom extends Component{
    render(){
        return(
            <div class="bottom-wrapper">
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
                                회원가입
                            </div>
                            <div className="text">
                                로그인
                            </div>
                            <div className="text">
                                도움말
                            </div>
                        </div>
                        <div className="bottom-wrapper-top-bottom-group">
                            <div className="text">
                                <span>탐색</span>
                            </div>
                            <div className="text">
                                그룹
                            </div>
                            <div className="text">
                                캘린더
                            </div>
                            <div className="text">
                                주제
                            </div>
                            <div className="text">
                                도시
                            </div>
                        </div>
                        <div className="bottom-wrapper-top-bottom-group">
                            <div className="text">
                                <span>We:Meet</span>
                            </div>
                            <div className="text">
                                정보
                            </div>
                            <div className="text">
                                We:Meet Pro
                            </div>
                            <div className="text">
                                채용정보
                            </div>
                            <div className="text">
                                앱
                            </div>
                            <div className="text">
                                API
                            </div>
                            <div className="text">
                                접근성
                            </div>
                        </div>
                        <div className="bottom-wrapper-top-bottom-group">
                            <div className="text">
                                <span>팔로우하기</span>
                            </div>
                            <div className="icon">
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/fb.png" alt=""></img>
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/insta.png" alt=""></img>
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/yt.png" alt=""></img>
                            </div>
                        </div>
                            
                    </div>
                </div>
                <div className="bottom-wrapper-bottom">
                    <div className="bottom-wrapper-bottom-first">
                    © Meetup 2019Meetup은 WeWork Companies Inc.의 전액출자 자회사입니다.
                    </div>
                    <div className="bottom-wrapper-bottom-second">
                    이용약관ㆍ개인정보처리방침ㆍ쿠키 정책
                    </div>     
                </div>
            </div>
        )
    }
}

export default FooterBottom;