import React, { Component } from "react";
import "./CreatingEventCard.scss";

class CreatingEventCard extends Component {
  render() {
    return (
      <div className="creatingCard">
        <div className="tips">
          <div className="tips-title">성공적인 이벤트 주최를 위한 팁</div>
          <div>
            <p>타이틀은 포인트가 잘 드러나게</p>
            사람들이 이벤트 내용을 한눈에 파악할 수 있는 타이틀을 작성해 주세요
          </div>
          <div>
            <p>설명글은 깔끔하고 이해하기 쉽게</p>
            설명글은 이해하기 쉬운 명확한 순서로 작성해 주세요. 이벤트에 대한
            전체적인 설명으로 시작한 다음, 이벤트 구성 내용을 추가하고, 기타
            세부 사항을 마지막에 적어 마무리하시면 좋아요.
          </div>
          <div>
            <p>이미지는 적절하게</p>
            사진 또는 이미지를 업로드하여 사람들이 이벤트 분위기를 쉽게 파악할
            수 있게 해주세요
          </div>
        </div>
      </div>
    );
  }
}

export default CreatingEventCard;
