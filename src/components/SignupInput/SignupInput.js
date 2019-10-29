import React, { Component } from 'react';
import "./SignupInput.scss";

class SignupInput extends Component {
  render(){
    return(             
        <div className="SignupInput">
          <label>{this.props.name}</label>
          <input type="text" className="register-field-name" name="realname" />
          <p id="register-error-name" className="text-error-display"></p>
        </div>
    );  
  }
}

export default SignupInput;
