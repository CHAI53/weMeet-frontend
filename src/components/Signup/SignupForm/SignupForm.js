import React, { Component } from "react";
import "./SignupForm.scss";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      classname: "register-field-name",
      hidden: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.loseFocus = this.loseFocus.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      classname: "register-field-name-turn",
      hidden: false
    });
    console.log(event.target.value);
  };

  // loseFocus = event => {
  //   this.setState({
  //     classname: "register-field-name"
  //   });
  // };

  // handleClick() {
  //   this.setState({
  //     hidden: false
  //   });
  // }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const url = "http://10.58.4.169:8000/user/account/sign-up";
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    fetch(url, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response, "response");
        return response.json();
      })
      .then(res => {
        if (res.ok) {
          return res.blob();
        }
        throw new Error("Network response was not ok.");
      });
  };

  render() {
    let { password, name, email, classname, hidden } = this.state;

    return (
      <form onSubmit={this.handleSubmit} id="register-form">
        <h1 className="sign-up-text margin-bottom">회원가입</h1>
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
        <div className="register-fieldset chunk padding-top">
          <div className="signupInput chunk">
            <label>이름</label>
            <input
              type="text"
              className={classname}
              name="name"
              onChange={this.handleChange}
              //onBlur={this.loseFocus}
              // onClick={this.handleClick}
              value={name}
            />
            {name.length === 0 && !hidden && (
              <p class="register-error-name">공란일 수 없습니다.</p>
            )}
          </div>
          <div className="signupInput chunk">
            <label>이메일 주소</label>
            <input
              type="email"
              className={classname}
              name="email"
              onChange={this.handleChange}
              value={email}
            />
            {name.length === 0 && !hidden && (
              <p class="register-error-name">공란일 수 없습니다.</p>
            )}
          </div>
          <div className="signupInput chunk">
            <label>비밀번호</label>
            <input
              type="password"
              className={classname}
              name="password"
              onChange={this.handleChange}
              value={password}
            />
            {name.length === 0 && !hidden && (
              <p class="register-error-name">공란일 수 없습니다.</p>
            )}
          </div>

          <div class="chunk">
            <div className="row-item">
              <span className="location-icon-span">
                <img
                  className="location-icon"
                  alt="location-icon"
                  src="https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-gray-512.png"
                />
              </span>
              <span class="text-small text-secondary text-heavy">
                Sejong, KR
              </span>
              <a class="loc-change text-small" href="/">
                (변경)
              </a>
            </div>
          </div>
          <div className="chunk">
            <p class="text-small text-secondary">
              이름이 공개되어 있습니다. 귀하의 이메일 주소를 통해 업데이트
              사항과 근처에서 We:meet을 찾을 수 있는 위치를 알려드리겠습니다.
            </p>
          </div>
          <div className="chunk">
            <p>
              <input
                type="submit"
                class="button button-fullwidth button-primary text-heavy"
                value="계속"
              />
            </p>
          </div>
          <div className="chunk">
            <p class="text-small">
              '계속'을 선택하면 We:meet의
              <a
                href="https://help.meetup.com/hc/en-us/articles/360027447252"
                class="link"
              >
                {" "}
                이용약관
              </a>
              에 동의하는 것으로 간주됩니다. 회원님의 정보는 We:meet의
              <a href="https://www.meetup.com/ko-KR/privacy/" class="link">
                {" "}
                개인정보처리방침{" "}
              </a>
              및
              <a
                href="https://www.meetup.com/ko-KR/cookie_policy/"
                class="link"
              >
                {" "}
                쿠키정책
              </a>
              에 따라 처리됩니다.
            </p>
          </div>
        </div>
        <div className="chunk border-top">
          <p class="text-small">
            이미 회원이신가요?
            <a
              href="https://secure.meetup.com/ko-KR/login/?returnUri=https%3A%2F%2Fwww.meetup.com%2Ffind%2Fevents%2F"
              class="link"
            >
              {" "}
              로그인.
            </a>
          </p>
        </div>
      </form>
    );
  }
}

export default SignupForm;
