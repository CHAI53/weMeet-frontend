import React, { Component } from "react";
import "./GroupMakingMain4.scss";

class GroupMakingMain4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowclick: "",
      category: []
    };
  }

  HandlerPlus = e => {
    const { category } = this.state;
    this.setState({ category: this.state.category.concat(e) }, () => {
      let categoryData = [];
      category.forEach(id => {
        const idObj = {};
        idObj["id"] = id;
        categoryData.push(idObj);
      });
      console.log("categoryData:", categoryData);

      fetch("http://10.58.4.169:8000/user/account/category1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("user_token")
        },
        body: JSON.stringify({ category: categoryData })
      });
      console.log(JSON.stringify({ category: categoryData }));
    });
  };

  Handleclick = e => {
    this.setState({ nowclick: e.target.value }, () => {
      this.HandleOr(this.state.nowclick);
    });
  };

  HandleOr = e => {
    this.HandlerPlus(e);
  };

  oneofus = e => {
    if (this.state.category.indexOf(e) !== -1) {
      //해당 요소가 있으면
      return this.state.category.indexOf(e);
    } else if (this.state.category.indexOf(e) === -1) {
      //해당 요소가 없으면
      return undefined;
    }
  };

  render() {
    return (
      <div className="container4">
        <div className="start-header">
          <div className="progress-bar progress-horizontal">
            <div className="progress-bar-inner"></div>
            <div className="progress-step">
              <div className="step-count4">4/4단계</div>
            </div>
          </div>
        </div>
        <div className="start-main">
          <div className="center">
            <div className="chunk">
              <h2 className="step-headline4">
                <span>
                  이제 그룹의 관심사에 맞는 주제를 몇 가지 선택해 주세요
                </span>
              </h2>
              <p className="topic-search">
                <span>
                  주제가 구체적일수록 비슷한 관심사를 가진 사람들에게 그룹을
                  홍보하기가 더 쉬워집니다. 주제는 최대 8개까지 선택 가능합니다.
                </span>
              </p>
              <div className="topic-pick">
                <ul className="ks-cboxtags">
                  <ul className="ks-cboxtags">
                    <li>
                      <input
                        type="checkbox"
                        id="1"
                        value="야외활동"
                        onClick={this.Handleclick}
                      />
                      <label for="1">야외활동</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="2"
                        value="기술"
                        onClick={this.Handleclick}
                      />
                      <label for="2">기술</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="3"
                        value="가족"
                        onClick={this.Handleclick}
                      />
                      <label for="3">가족</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="4"
                        value="건강과 웰빙"
                        onClick={this.Handleclick}
                      />
                      <label for="4">건강과 웰빙</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="5"
                        value="스포츠/피트니스"
                        onClick={this.Handleclick}
                      />
                      <label for="5">스포츠/피트니스</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="6"
                        value="학습"
                        onClick={this.Handleclick}
                      />
                      <label for="6">학습</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="7"
                        value="사진촬영"
                        onClick={this.Handleclick}
                      />
                      <label for="7">사진촬영</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="8"
                        value="음식"
                        onClick={this.Handleclick}
                      />
                      <label for="8">음식</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="9"
                        value="글쓰기"
                        onClick={this.Handleclick}
                      />
                      <label for="9">글쓰기</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="10"
                        value="언어와 문화"
                        onClick={this.Handleclick}
                      />
                      <label for="10">언어와 문화</label>
                    </li>
                    <li class="ks-selected">
                      <input
                        type="checkbox"
                        id="11"
                        value="음악"
                        onClick={this.Handleclick}
                      />
                      <label for="11">음악</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="12"
                        value="사회운동"
                        onClick={this.Handleclick}
                      />
                      <label for="12">사회운동</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="13"
                        value="LGBTQ(성소수자)"
                        onClick={this.Handleclick}
                      />
                      <label for="13">LGBTQ(성소수자)</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="14"
                        value="영화"
                        onClick={this.Handleclick}
                      />
                      <label for="14">영화</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="15"
                        value="공상과학/게임"
                        onClick={this.Handleclick}
                      />
                      <label for="15">공상과학/게임</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="16"
                        value="믿음"
                        onClick={this.Handleclick}
                      />
                      <label for="16">믿음</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="17"
                        value="예술"
                        onClick={this.Handleclick}
                      />
                      <label for="17">예술</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="18"
                        value="북클럽"
                        onClick={this.Handleclick}
                      />
                      <label for="18">북클럽</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="19"
                        value="춤"
                        onClick={this.Handleclick}
                      />
                      <label for="19">춤</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="20"
                        value="반려동물"
                        onClick={this.Handleclick}
                      />
                      <label for="20">반려동물</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="21"
                        value="취미와 공예"
                        onClick={this.Handleclick}
                      />
                      <label for="21">취미와 공예</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="22"
                        value="패션과 스타일"
                        onClick={this.Handleclick}
                      />
                      <label for="22">패션과 스타일</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="23"
                        value="친목"
                        onClick={this.Handleclick}
                      />
                      <label for="23">친목</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="24"
                        value="비즈니스"
                        onClick={this.Handleclick}
                      />
                      <label for="24">비즈니스</label>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="complete-message">
                <p>그룹 생성에 성공하였습니다!</p>
                <p> 이제 많은 그룹과 이벤트를 보러 이동해볼까요?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMakingMain4;
