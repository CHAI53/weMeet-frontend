import React, { Component } from "react";
import "./BeforeLoginNav.scss";

class BeforeLoginNav extends Component {
  // fetch("http://10.58.4.169:8000/user/account/log-in", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     email: this.state.email,
  //     password: this.state.password
  //   })
  // })
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response);
  //     if (response.SUCCESS === "200") {
  //       localStorage.setItem("user_token", response.access_token);
  //       console.log(localStorage);
  //     }

  //     this.props.history.push("/after_login_main");
  //   });
  // console.log(this.state);

  render() {
    return (
      <div className="nav-top">
        <a href="/">
          <img className="nav-logo" src={require("./logo.png")} alt=""></img>
        </a>

        <div className="nav-right">
          <span className="new-group">
            <a href="/groupmaking1" className="new">
              새 그룹 시작하기
            </a>
          </span>
          <span className="nav-login">
            <a href="/login">로그인</a>
          </span>
          <span className="nav-signup">
            <button>
              <a href="/signup">회원가입</a>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default BeforeLoginNav;
