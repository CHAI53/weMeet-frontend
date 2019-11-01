import React, { Component } from 'react';
import "./Signup.scss";
import SignupHeader from "components/SignupHeader";
import SignupForm from "components/SignupForm";

class Signup extends Component {
  render(){
    return(
      <div class="view">
        <SignupHeader />
          <div class="register-panels">
            <div class="register-panel-center">
              <SignupForm />
            </div>
          </div>
      </div>
    );
  }
}

export default Signup;
