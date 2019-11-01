import React, {Component} from 'react';
import './LoginMain.scss'

class LoginMain extends Component{
    render(){
        return(
            <div className="login-main-wrapper">
                <div className="login-wrapper">
                    <div className="login-top">
                        <div className="login-top-group">
                            <span className="login-text">
                                로그인
                            </span>
                            <span className="login-sign-up">
                                아직 회원이 아니신가요? <a href="/">회원가입</a>
                            </span>
                        </div>
                    </div>
                    <div className="login-mid">
                        <div className="login-mid-email">
                            이메일 주소
                        </div>
                        <input className="login-email" type="text" placeholder="이메일을 입력하세요." autoFocus="true" tabIndex="101"></input>
                        <div className="login-mid-password">비밀번호</div>
                        <input className="login-password" type="password" placeholder="비밀번호를 입력하세요."></input>
                        <input className="login-check" type="checkbox"></input>
                        <span className="login-keepgoing">로그인 상태 유지</span>
                        <input className="login-login-button" type="submit" value="로그인"></input>
                        <div className="login-or">또는</div>
                    </div>
                    <div className="login-bot">
                    <div className="login-facebook">
                    <img className="login-facebook-icon" src={require('./fabook.png')} alt=""></img>
                        <input className="login-facebook-button" type="button" value="페이스북 계정으로 로그인"></input>
                    </div>
                    <div className="login-google">
                        <img className="login-google-icon" src={require('./google.png')} alt=""></img>
                        <input className="login-google-button" type="button" value="구글 계정으로 로그인"></input>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginMain;