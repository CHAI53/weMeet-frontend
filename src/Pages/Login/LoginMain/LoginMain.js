import React, {Component} from 'react';
import './LoginMain.scss'

class LoginMain extends Component{
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }

    HandleFetch = (e) =>{
        //fetch 함수가 들어간 함수를 담기
        //로컬스토리지에 token setItem
        this.HandleClick(e)
        
        localStorage.setItem('TOKEN', JSON.stringify(this.state.email));
        console.log(localStorage)
    }
    //JSON.stringify 안에 토큰으로 들어오는 값을 저장!

    HandleClick = (e) =>{
        fetch("https://randomuser.me/api/?results=1")
        .then(response=>response.json())
        .then(json=>this.setState({name : json.results[0].name.last}))
        console.log(this.state.name)
    }
    //로그인버튼을 누르면 state에 저장되게 만들었음. 나중에 삭제해야됨.
        
    // HandleClick = (e) =>{
    //     fetch("url주소", {
    //         method:'POST',
    //         headers:{'Content-Type':'application/json'},
    //         body: JSON.stringify({
    //             'email':'this.state.email',
    //             'password':'this.state.password'
    //         })
    //     })
    //     .then(response=>response.json())
    //     console.log(json)
    // }
    //나중에 쓸 때 대비한 코드

    setemail=(e)=>{
        this.setState({email:e.target.value})
        console.log(this.state)
    }//이메일 넣은 값 가져와서 state에 넣기

    setpassword=(e)=>{
        this.setState({password:e.target.value})
        console.log(this.state)
    }//비밀번호 넣은 값 가져와서 state에 넣기

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
                        <input onChange={this.setemail}  className="login-email" type="text" placeholder="이메일을 입력하세요." autoFocus="true" tabIndex="101"></input>

                        <div className="login-mid-password">비밀번호</div>
                        
                        <input onChange={this.setpassword} className="login-password" type="password" placeholder="비밀번호를 입력하세요."></input>

                        <input className="login-check" type="checkbox"></input>
                        <span className="login-keepgoing">로그인 상태 유지</span>



                        <input className="login-login-button" type="submit" value="로그인" onClick={this.HandleFetch} />



                        <div className="login-or">또는</div>
                    </div>
                    <div className="login-bot">
                    <div className="login-facebook">
                    <img className="login-facebook-icon" src={require('./fabook.png')} alt=""></img>

                        <input className="login-facebook-button" type="button" value="페이스북 계정으로 로그인" />

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