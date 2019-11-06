import React, { Component } from "react";
import "./CreatingEventDesc.scss";

class CreatingEventDesc extends Component {
  handleChange = e => {
    const scrollHeight = e.target.scrollHeight;
    let height = 100;
    if (scrollHeight > height) {
      document.querySelector(".mainDesc").style.height = scrollHeight + "px";
    }
  };

  render() {
    const { handleChange } = this;
    return (
      <div className="desc-wrapper">
        <div className="input-label">설명</div>
        <div className="subDescription">
          참석자들에게 이벤트 구성 내용, 지참물, 찾아오는 길 등을 포함한 세부
          사항들을 알려 주세요.
        </div>
        <textarea onChange={handleChange} type="text" className="mainDesc" />
        <span className="count">4000</span>
      </div>
    );
  }
}

export default CreatingEventDesc;
