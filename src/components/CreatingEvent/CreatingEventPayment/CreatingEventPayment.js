import React, { Component } from "react";
import "./CreatingEventPayment.scss";

export default class CreatingEventPayment extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      amount: 0,
      tel: "",
      wrongInfo: false
    };
  }

  pay = () => {
    const { name, amount, tel } = this.state;
    if (name.includes("@") && amount !== "0" && tel.includes("-")) {
      this.setState({ wrongInfo: false });
      window.IMP.request_pay(
        {
          name: "이벤트 회비",
          merchant_uid: "merchant_" + new Date().getTime(),
          amount: amount,
          buyer_email: name,
          buyer_tel: tel
        },
        function(rsp) {
          console.log(rsp);
          if (rsp.success) {
            let msg = "결제가 완료되었습니다.";
            msg += "고유ID : " + rsp.imp_uid;
            msg += "상점 거래ID : " + rsp.merchant_uid;
            msg += "결제 금액 : " + rsp.paid_amount;
            msg += "카드 승인번호 : " + rsp.apply_num;
          } else {
            let msg = "결제에 실패하였습니다.";
            msg += "에러내용 : " + rsp.error_msg;
          }
        }
      );
    } else {
      const { wrongInfo } = this.state;
      this.setState({ wrongInfo: true });
    }
  };

  handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;

    if (key === "name" && typeof value === "string" && value.includes("@")) {
      this.setState({ [key]: value });
    } else if (key === "amount" && parseInt(value) !== 0) {
      this.setState({ [key]: value });
    } else if (key === "tel" && value.includes("-")) {
      this.setState({ [key]: value });
    }
  };

  render() {
    const { name, amount, tel } = this.props;
    const { pay, handleChange } = this;
    const { wrongInfo } = this.state;

    return (
      <>
        <div className="paymentInfo">
          <div className="name">
            이메일
            <input onChange={handleChange} value={name} name="name" />
          </div>
          <div className="amount">
            금액 *(원 빼고 적어주세요)
            <input onChange={handleChange} value={amount} name="amount" />
          </div>
          <div className="tel">
            전화번호 ("-"를 포함해서 적어주세요)
            <input onChange={handleChange} value={tel} name="tel" />
          </div>
        </div>
        <button className="toPay" type="button" onClick={pay}>
          결제하기
        </button>
        {wrongInfo && (
          <div className="wrongInfo">결제 정보를 정확히 입력해주세요</div>
        )}
      </>
    );
  }
}
