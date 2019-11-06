import React, { Component } from "react";
import "./CreatingEventDesc.scss";

class CreatingEventDesc extends Component {
  handleChange = e => {
    const scrollHeight = e.target.scrollHeight;
    const desc = e.target.value;
    const { handleDesc } = this.props;
    let height = 100;
    if (scrollHeight > height) {
      document.querySelector(".mainDesc").style.height = scrollHeight + "px";
    }
    handleDesc(desc);
  };

  render() {
    const { handleChange } = this;
    const { desc, descCount } = this.props;

    return (
      <div className="desc-wrapper">
        <div className="input-label">설명</div>
        <div className="subDescription">
          참석자들에게 이벤트 구성 내용, 지참물, 등을 포함한 세부 사항들을 알려
          주세요.
        </div>
        <textarea
          value={desc}
          onChange={handleChange}
          type="text"
          className="mainDesc"
        />
        <span className="count">{descCount}</span>
      </div>
    );
  }
}

export default CreatingEventDesc;
