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
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(){
    this.setState({
      name: "register-field-name-turn",
      hidden: false
    })
  }

  handleChange(event){
    console.dir(event.target.value.length);
    this.setState({
      value: event.target.value,
      name: "register-field-name"
    })
  }
 
  render(){
    return(             
      <div className="SignupInput">
        <label>{this.props.name}</label>
        <input type="text"        
                className={this.state.name}
                onClick={this.handleClick}
                onChange={this.handleChange}
                value={this.state.value}
                />
        {this.state.value.length === 0 && !this.state.hidden && <p class="register-error-name">공란일 수 없습니다.</p>}
      </div>
    );  
  }
}

export default SignupInput;
