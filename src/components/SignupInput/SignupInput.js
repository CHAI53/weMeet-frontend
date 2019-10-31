import React, { Component } from 'react';
import "./SignupInput.scss";

class SignupInput extends Component {
  constructor(props){
    super(props);
    this.state={
      name: "register-field-name",
      hidden: true,
      value:''
    }
    this.handleClick =  this.handleClick.bind(this);
    this.noValueInput = this.noValueInput.bind(this);
  }

  handleClick(){
    this.setState({
      name: "register-field-name-turn",
    })
  }

  noValueInput(){
    this.setState({
      hidden: false,
    })
  }
 
  render(){
    return(             
      <div className="SignupInput">
        <label>{this.props.name}</label>
        <input type="text"        
                className={this.state.name}
                onClick={this.handleClick}
                onChange={this.noValueInput}
                />
        {!this.state.hidden && <p class="register-error-name">공란일 수 없습니다.</p>}
      </div>
    );  
  }
}

export default SignupInput;
