import React, { Component } from "react";
import "./LoginMain.scss";
import { withRouter } from "react-router-dom";

class LoginMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  HandleClick = e => {
    console.log(this.state);
    fetch("http://10.58.4.169:8000/user/account/log-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.SUCCESS === "200") {
          this.props.history.push("/after_login_main");
          console.log(localStorage);
        } else {
          console.log("error");
        }
      });
    console.log(this.state);
  };

  setemail = e => {
    this.setState({ email: e.target.value });
    console.log(this.state);
  }; //이메일 넣은 값 가져와서 state에 넣기

  setpassword = e => {
    this.setState({ password: e.target.value });
    console.log(this.state);
  }; //비밀번호 넣은 값 가져와서 state에 넣기
  render() {
    return (
      <div className="login-main-wrapper">
        <div className="login-wrapper">
          <div className="login-top">
            <div className="login-top-group">
              <span className="login-text">로그인</span>
              <span className="login-sign-up">
                아직 회원이 아니신가요? <a href="/">회원가입</a>
              </span>
            </div>
          </div>
          <div className="login-mid">
            <div className="login-mid-email">이메일 주소</div>
            <input
              className="login-email"
              type="text"
              placeholder="이메일을 입력하세요."
              autoFocus="true"
              tabIndex="101"
              onChange={this.setemail}
            ></input>
            <div className="login-mid-password">비밀번호</div>
            <input
              className="login-password"
              type="password"
              placeholder="비밀번호를 입력하세요."
              onChange={this.setpassword}
            ></input>
            <input className="login-check" type="checkbox"></input>
            <span className="login-keepgoing">로그인 상태 유지</span>
            <input
              className="login-login-button"
              type="submit"
              value="로그인"
              onClick={this.HandleClick}
            ></input>
            <div className="login-or">또는</div>
          </div>
          <div className="login-bot">
            <div className="login-facebook">
              <img
                className="login-facebook-icon"
                src={require("./fabook.png")}
                alt=""
              ></img>
              <input
                className="login-facebook-button"
                type="button"
                value="페이스북 계정으로 로그인"
              ></input>
            </div>
            <div className="login-google">
              <img
                className="login-google-icon"
                src={require("./google.png")}
                alt=""
              ></img>
              <input
                className="login-google-button"
                type="button"
                value="구글 계정으로 로그인"
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginMain);
