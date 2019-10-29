import React, { Component } from 'react';
import "./SignupLoginBtn.scss";

class SignupLoginBtn extends Component {
  render(){
    return(             
      <div class="SignupLoginBtn margin-bottom button">
        <a className={this.props.className} href={this.props.moveTo}>
          <span className="svg-button">
            <img className="button-icon"
                  src={this.props.imgPath}
                  alt="button-icon" />
          </span>
          <span className="button-label">{this.props.message}</span>
        </a>       
      </div>
    );
  }
}

export default SignupLoginBtn;