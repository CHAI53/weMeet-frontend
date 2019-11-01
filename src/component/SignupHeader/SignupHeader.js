import React, { Component } from 'react';
import "./SignupHeader.scss";

class SignupHeader extends Component {
  render(){
    return(
      <nav id="head">
        <div id="head-logo">
          <a rel="home" href="https://www.meetup.com/ko-KR/">
            <img className="logo" alt="logo" src="https://secure.meetupstatic.com/s/img/642287997414509021596/logo/svg/logo--mSwarm--2color.svg" />
          </a>
        </div>
      </nav>
    );
  }
}

export default SignupHeader;