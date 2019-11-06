import React, { Component } from "react";
import "./Interest.scss";
import { NONAME } from "dns";
// import InterestTag from "./InterestTag";
// import InterestTagExample from "./InterestTag/InterestTagExample";

class Interest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowclick: "",
      category: []
    };
  }

  HandlerPlus = e => {
    this.setState({ category: this.state.category.concat(e) }, () => {
      console.log("HandlerPlus:", this.state.category);
    });
  };

  HandlerMinus = e => {
    let idx = this.state.category.indexOf(e);
    this.setState(
      {
        category: this.state.category.splice(idx, 1)
      },
      () => {
        console.log("HandlerMinus:", this.state.category.indexOf(e));
      }
    );
  };

  Handleclick = e => {
    this.setState({ nowclick: e.target.value }, () => {
      this.HandleOr(this.state.nowclick);
    });
  };
  HandleOr = e => {
    if (this.state.category.includes(e) === true) {
      console.log("내가있으면 요소가 삭제");
      this.HandlerMinus(e);
    } else if (this.state.category.includes(e) === false) {
      console.log("플러스시작");
      this.HandlerPlus(e);
    }
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
      <div className="int-box">
        <div className="interest-wrapper">
          <div className="interest-title">관심사</div>

          <ul class="ks-cboxtags">
            <ul class="ks-cboxtags">
              <li>
                <input
                  type="checkbox"
                  id="checkboxOne"
                  value="야외활동"
                  onClick={this.Handleclick}
                />
                <label for="checkboxOne">야외활동</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxTwo"
                  value="기술"
                  onClick={this.Handleclick}
                />
                <label for="checkboxTwo">기술</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxThree"
                  value="가족"
                  onClick={this.Handleclick}
                />
                <label for="checkboxThree">가족</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxFour"
                  value="건강과 웰빙"
                  onClick={this.Handleclick}
                />
                <label for="checkboxFour">건강과 웰빙</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxFive"
                  value="스포츠/피트니스"
                  onClick={this.Handleclick}
                />
                <label for="checkboxFive">스포츠/피트니스</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxSix"
                  value="학습"
                  onClick={this.Handleclick}
                />
                <label for="checkboxSix">학습</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxSeven"
                  value="사진촬영"
                  onClick={this.Handleclick}
                />
                <label for="checkboxSeven">사진촬영</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxEight"
                  value="음식"
                  onClick={this.Handleclick}
                />
                <label for="checkboxEight">음식</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxNine"
                  value="글쓰기"
                  onClick={this.Handleclick}
                />
                <label for="checkboxNine">글쓰기</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxTen"
                  value="언어와 문화"
                  onClick={this.Handleclick}
                />
                <label for="checkboxTen">언어와 문화</label>
              </li>
              <li class="ks-selected">
                <input
                  type="checkbox"
                  id="checkboxEleven"
                  value="음악"
                  onClick={this.Handleclick}
                />
                <label for="checkboxEleven">음악</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxTwelve"
                  value="사회운동"
                  onClick={this.Handleclick}
                />
                <label for="checkboxTwelve">사회운동</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxThirteen"
                  value="LGBTQ(성소수자)"
                  onClick={this.Handleclick}
                />
                <label for="checkboxThirteen">LGBTQ(성소수자)</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxFourteen"
                  value="영화"
                  onClick={this.Handleclick}
                />
                <label for="checkboxFourteen">영화</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxFifteen"
                  value="공상과학/게임"
                  onClick={this.Handleclick}
                />
                <label for="checkboxFifteen">공상과학/게임</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxSixteen"
                  value="믿음"
                  onClick={this.Handleclick}
                />
                <label for="checkboxSixteen">믿음</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxSeventeen"
                  value="예술"
                  onClick={this.Handleclick}
                />
                <label for="checkboxSeventeen">예술</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxEighteen"
                  value="북클럽"
                  onClick={this.Handleclick}
                />
                <label for="checkboxEighteen">북클럽</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxNineteen"
                  value="춤"
                  onClick={this.Handleclick}
                />
                <label for="checkboxNineteen">춤</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxTwoenty"
                  value="반려동물"
                  onClick={this.Handleclick}
                />
                <label for="checkboxTwoenty">반려동물</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxTwoentyOne"
                  value="취미와 공예"
                  onClick={this.Handleclick}
                />
                <label for="checkboxTwoentyOne">취미와 공예</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxTwoentyTwo"
                  value="패션과 스타일"
                  onClick={this.Handleclick}
                />
                <label for="checkboxTwoentyTwo">패션과 스타일</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxTwoentyThree"
                  value="친목"
                  onClick={this.Handleclick}
                />
                <label for="checkboxTwoentyThree">친목</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxTwoentyFour"
                  value="비즈니스"
                  onClick={this.Handleclick}
                />
                <label for="checkboxTwoentyFour">비즈니스</label>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default Interest;
