import React, { Component } from "react";
import "./GroupMakingMain2.scss";

class GroupMakingMain2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: ""
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
    sessionStorage.setItem("introduction", this.state.introduction);
    console.log(this.state.introduction);
  };

  render() {
    let { introduction } = this.state;
    return (
      <div className="container2">
        <div className="start-header">
          <div className="progress-bar progress-horizontal">
            <div className="progress-bar-inner"></div>
            <div className="progress-step">
              <div className="step-count2">2/4단계</div>
            </div>
          </div>
        </div>
        <div className="start-main">
          <div className="center">
            <div className="chunk">
              <h2 className="step-headline2">
                <span>그룹에 대해서 설명해주세요</span>
              </h2>
              <p className="topic-search">
                <span>
                  설명글은 회원들에게 그룹을 홍보할 때 표시됩니다. 변경사항이
                  있다면 나중에 언제든지 업데이트가 가능합니다.
                </span>
              </p>
              <ul className="description-step">
                <li>
                  <span>그룹의 목적은 무엇인가요?</span>
                </li>
                <li>
                  <span>어떤 회원을 모집하나요?</span>
                </li>
                <li>
                  <span>이벤트에서는 무엇이 진행되나요?</span>
                </li>
              </ul>
              <div className="input-container">
                <div className="input-description">
                  <textarea
                    className="description-text"
                    type="text"
                    placeholder="최소 10자 이상 작성해주세요"
                    rows="6"
                    minLength="50"
                    error="필수사항"
                    name="introduction"
                    value={introduction}
                    onChange={this.handleChange}
                  />{" "}
                  <ul id="description-error">
                    <li>필수사항</li>
                  </ul>
                </div>
              </div>
              <div className="example-container">
                <div className="example-bar">
                  <div className="lightbulb-container">
                    <img
                      className="lightbulb"
                      src="https://www.meetup.com/mu_static/ko-KR/lightbulb.582d42c2.svg"
                      alt="lightbulb"
                    />
                  </div>
                  <div className="example-icon">
                    <span>예시: </span>
                  </div>
                </div>
                <div className="description-example">
                  <p>
                    "이 그룹은 하이킹, 암벽등반, 캠핑, 카약, 볼더링 등에
                    관심있는 사람을 위한 그룹입니다. 초보부터 전문가까지 레벨에
                    상관없이 모두 환영합니다. 야외 스포츠를 사랑하는 사람들을
                    만나기 위해 이 그룹을 시작했습니다. 다른분들과 같이 야외
                    스포츠를 즐길 날을 기대합니다."
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMakingMain2;
