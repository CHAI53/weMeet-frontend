import React, { Component } from "react";
import BeforeLoginNav from "components/BeforeLoginMain/BeforeLoginNav";

import "./Login.scss";
import LoginMain from "./LoginMain";
import CommonFooter from "components/CommonFooter";

class Login extends Component {
  render() {
    return (
      <>
        <BeforeLoginNav></BeforeLoginNav>
        <LoginMain></LoginMain>
        <CommonFooter></CommonFooter>
      </>
    );
  }
}

export default Login;
