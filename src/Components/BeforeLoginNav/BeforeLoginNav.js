import React, {Component} from 'react';
import './BeforeLoginNav.scss'

class BeforeLoginNav extends Component{
    render(){
        return(
                <div className="nav-top">
                    <img className="nav-logo" src="https://secure.meetupstatic.com/s/img/5455565085016210254/logo/svg/logo--script.svg" alt=""></img>
                    
                    <div className="nav-right">
                        <span className="new-group">
                            <a href="/" className="new">새 그룹 시작하기</a>
                        </span>
                        <span className="nav-login">
                            <a href="/">로그인</a>
                        </span>
                        <span className="nav-signup">
                            <button>회원가입</button>
                        </span>
                    </div>
                </div>
        )
    }
}

export default BeforeLoginNav;