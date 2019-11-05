import React, { Component } from "react";
import "./About.scss";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

class About extends Component {
  constructor() {
    super();
    this.state = {
      name: "김영준",
      email: "a@a.com",
      password: "asdfasdf",
      location: "Wework 2호점",
      signupdate: "2019년 10월 24일 (목)",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      gender: ""
    };
  }

  genderwoman = () => {
    this.setState({ gender: "woman" });
    console.log(this.state.gender);
  };

  genderman = () => {
    this.setState({ gender: "man" });
    console.log(this.state.gender);
  };

  genderother = () => {
    this.setState({ gender: "other" });
    console.log(this.state.gender);
  };

  handleClick = e => {
    this.setState({ text: this.state.desc });
    console.log(this.state.text);
  };

  setintroduction = e => {
    this.setState({ desc: e.target.value });
    console.log(this.state.desc);
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

  render() {
    const MyUploader = () => {
      // specify upload params and url for your files
      const getUploadParams = ({ meta }) => {
        return { url: "https://httpbin.org/post" };
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
    return (
      <div className="about-wrapper">
        <div className="about-name">{this.state.name}</div>
        <div className="about-feeds">
          <Dropzone />
          <span className="profile-text">프로필 설정</span>

          <div className="about-feeds-first">
            <tr className="about-feeds-first-email">이메일</tr>
            <tr className="about-feeds-first-password">비밀번호</tr>
            <tr className="about-feeds-first-location">장소</tr>
            <tr className="about-feeds-first-date">가입일</tr>
            <tr className="about-feeds-first-gender">성별</tr>
          </div>

          <div className="about-feeds-first-right">
            <span className="about-feeds-right-email">{this.state.email}</span>
            <span className="about-feeds-right-password">
              {this.passwordlength()}
              <button className="password-button" onClick={this.showpassword}>
                확인
              </button>
            </span>
            <span className="about-feeds-right-location">
              {this.state.location}
            </span>
            <span className="about-feeds-right-date">
              {this.state.signupdate}
            </span>
            <div
              className={`about-feeds-right-gender-active-${this.state.gender}`}
            >
              <input
                className="gender-man"
                type="button"
                value="M"
                onClick={this.genderman}
              />
              <input
                className="gender-woman"
                type="button"
                value="F"
                onClick={this.genderwoman}
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

          <div className="about-feeds-introduction">{this.state.text}</div>
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
