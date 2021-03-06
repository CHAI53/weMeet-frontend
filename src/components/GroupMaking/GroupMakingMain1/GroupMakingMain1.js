import React, { Component } from "react";
import "./GroupMakingMain1.scss";

class GroupMakingMain1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  handleClick() {
    sessionStorage.setItem("name", this.state.name);
    console.log(this.state.name);
  }

  render() {
    let { name } = this.state;
    return (
      <div className="container1">
        <div className="start-header">
          <div className="progress-bar progress-horizontal">
            <div className="progress-bar-inner"></div>
            <div className="progress-step">
              <div className="step-count1">1/4단계</div>
            </div>
          </div>
        </div>
        <div className="start-main">
          <div className="center">
            <div className="chunk">
              <h2 className="step-headline1">
                <span>그룹의 이름은 무엇으로 하시겠어요?</span>
              </h2>
              <p className="topic-search">
                <span>
                  사람들이 그룹의 성격과 내용을 파악할 수 있는 이름을
                  지어주세요. 떠오르는 기발한 이름이 있나요? 마음이 바뀌면
                  나중에 다시 변경할 수 있습니다.
                </span>
              </p>
              <div className="input-wrapper">
                <input
                  group-name-error="error"
                  type="text"
                  name="name"
                  placeholder="원하시는 그룹명을 적어주세요"
                  className="group-name"
                  onChange={this.handleChange}
                  onClick={this.handleClick}
                  value={name}
                />
                {/* <p char-count="true" className="tiny">
                60
              </p> */}
              </div>
              <span className="text-error">필수 사항</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMakingMain1;
