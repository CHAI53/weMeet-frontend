import React, { Component } from "react";
import "./About.scss";
import "./library.scss";
import Dropzone from "react-dropzone-uploader";

class About extends Component {
  constructor() {
    super();
    this.state = {
      password: "볼수없습니다",
      location: "Wework 2호점",
      signupdate: "2019년 10월 24일 (목)",
      gender: "",
      desc: "",
      data: ""
    };
  }

  genderF = () => {
    this.setState({ gender: "F" });
    console.log(this.state.gender);
  };

  genderM = () => {
    this.setState({ gender: "M" });
    console.log(this.state.gender);
  };

  genderother = () => {
    this.setState({ gender: "other" });
    console.log(this.state.gender);
  };

  handleClick = e => {
    this.setState({ profile_introduction: this.state.desc });
    const data = {
      profile_introduction: this.state.desc,
      gender: this.state.gender,
      profile_photo: "aaa"
    };
    fetch("http://10.58.4.169:8000/user/account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("user_token")
      },
      body: JSON.stringify(data)
      // localStorage.setItem("user_token", localStorage.user_token)
    });
    console.log(JSON.stringify(data));
  };

  setintroduction = e => {
    this.setState({ desc: e.target.value });
  };

  setDelete = () => {
    this.setState({ text: "자기소개를 입력해 주세요." });
  };

  passwordlength = () => {
    let pwd = "";
    for (let i = 0; i < this.state.password.length; i++) {
      pwd += "*";
    }
    return pwd;
  };

  showpassword = () => {
    alert(this.state.password);
  };

  componentDidMount() {
    fetch("http://10.58.4.169:8000/user/account", {
      method: "GET",
      headers: { authorization: localStorage.getItem("user_token") }
      // localStorage.setItem("user_token", localStorage.user_token)
    })
      .then(res => res.json())
      .then(info => {
        this.setState({
          data: info.data
        });
      });
  }

  render() {
    const MyUploader = () => {
      // specify upload params and url for your files
      const getUploadParams = ({ meta }) => {
        return { url: "" };
      };

      // called every time a file's `status` changes
      const handleChangeStatus = ({ meta, file }, status) => {
        console.log(status, meta, file);
      };

      // receives array of files that are done uploading when submit button is clicked
      const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta));
        allFiles.forEach(f => f.remove());
      };

      return (
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          accept="image/*,audio/*,video/*"
        />
      );
    };

    // console.log(localStorage.getItem("user_token"));
    let year = () => {
      let date = "";
      if (this.state.data) {
        date = this.state.data.updated_at.split("T");
        let date2 = date[0].split("-");
        let date3 = date2[0] + "년 " + date2[1] + "월 " + date2[2] + "일 ";
        return date3;
      }
    };

    return (
      <div className="about-wrapper">
        <div className="about-name">{this.state.data.name}</div>
        <div className="about-feeds">
          <Dropzone />
          <span className="profile-text">프로필 설정</span>

          <div className="about-feeds-first">
            <tr className="about-feeds-first-email">이메일</tr>
            <tr className="about-feeds-first-password">비밀번호</tr>
            <tr className="about-feeds-first-location">장소</tr>
            <tr className="about-feeds-first-date">수정날짜</tr>
            <tr className="about-feeds-first-gender">성별</tr>
          </div>

          <div className="about-feeds-first-right">
            <span className="about-feeds-right-email">
              {this.state.data.email}
            </span>
            <span className="about-feeds-right-password">
              {this.passwordlength()}
              <button className="password-button" onClick={this.showpassword}>
                확인
              </button>
            </span>
            <span className="about-feeds-right-location">
              {this.state.location}
            </span>
            <span className="about-feeds-right-date">{year()}</span>
            <div
              className={`about-feeds-right-gender-active-${this.state.gender}`}
            >
              <input
                className="gender-M"
                type="button"
                value="M"
                onClick={this.genderM}
              />
              <input
                className="gender-F"
                type="button"
                value="F"
                onClick={this.genderF}
              />
              <input
                className="gender-other"
                type="button"
                value="O"
                onClick={this.genderother}
              />
            </div>
            <br></br>
            <span className="about-feeds-second">자기 소개</span>
          </div>

          <div className="about-feeds-introduction">
            {this.state.data.profile_introduction}
          </div>
          <input
            className="introduction-input"
            type="textarea"
            placeholder="자기소개를 입력하세요."
            onChange={this.setintroduction}
          />
          <div className="introduction-button">
            <input
              className="delete"
              type="submit"
              value="삭제"
              onClick={this.setDelete}
            />
            <input
              className="define-button"
              type="submit"
              value="변경"
              onClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default About;
