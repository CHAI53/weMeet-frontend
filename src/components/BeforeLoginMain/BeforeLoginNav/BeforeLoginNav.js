import React, { Component } from "react";
import "./BeforeLoginNav.scss";

class BeforeLoginNav extends Component {
  render() {
    return (
      <div className="nav-top">
        <a href="/">
          <img className="nav-logo" src={require("./logo.png")} alt=""></img>
        </a>

        <div className="nav-right">
          <span className="new-group">
            <a href="/" className="new">
              새 그룹 시작하기
            </a>
          </span>
          <span className="nav-login">
            <a href="/login">로그인</a>
          </span>
          <span className="nav-signup">
            <button>회원가입</button>
          </span>
        </div>
      </div>
    );
  }
}

export default BeforeLoginNav;
