import React, { Component } from "react";
import "./CreatingEvent.scss";
import { withRouter } from "react-router-dom";
import Nav from "components/Nav/AfterLogInNav";
import CreatingEventTitle from "components/CreatingEvent/CreatingEventTitle";
import CreatingEventNeces from "components/CreatingEvent/CreatingEventNeces";
import CreatingEventDatePicker from "components/CreatingEvent/CreatingEventDatePicker";
import CreatingEventDuration from "components/CreatingEvent/CreatingEventDuration";
import CreatingEventDropzone from "components/CreatingEvent/CreatingEventDropzone";
import ImagePreview from "./ImagePreview";
import CreatingEventDesc from "components/CreatingEvent/CreatingEventDesc";
import CreatingEventOptions from "components/CreatingEvent/CreatingEventOptions";
import CreatingEventCard from "components/CreatingEvent/CreatingEventCard";
import CreatingEventFindLocation from "components/CreatingEvent/CreatingEventFindLocation";
import CreatingEventSetLocation from "components/CreatingEvent/CreatingEventSetLocation";

class CreatingEvent extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      titleCount: 80,
      uploadedImage: "",
      startDate: new Date(),
      endDate: new Date(),
      select: "0",
      desc: "",
      descCount: 4000,
      wayToFind: "",
      wayCount: 4000,
      location: "위워크 선릉역",
      maxAttendeeVal: 0,
      payment: true
    };
  }

  handleDrop = imgFile => {
    const reader = new FileReader();
    reader.readAsDataURL(imgFile[0]);
    reader.onload = e => {
      this.setState({ uploadedImage: e.target.result });
    };
  };

  handleClick = () => {
    this.setState({ uploadedImage: "" });
  };

  handleInput = val => {
    const { title } = this.state;
    title.length < 80 &&
      this.setState({ title: val }, () => {
        const { title } = this.state;
        this.setState({ titleCount: 80 - title.length });
      });
  };

  handleDate = date => {
    this.setState({ startDate: date });
  };

  handleEndDate = select => {
    const { startDate, endDate } = this.state;
    let hour = startDate.getHours();
    const duration = parseInt(select);
    hour += duration;
    const newDate = new Date(endDate.setHours(hour));
    this.setState({ endDate: newDate, select: select });
  };

  handleDesc = desc => {
    const { descCount } = this.state;
    if (descCount <= 4000) {
      this.setState({ desc: desc }, () => {
        const { desc, descCount } = this.state;
        this.setState({ descCount: descCount - desc.length });
      });
    }
  };

  handleSubmit = () => {
    const group_id = this.props.match.params.groupId;
    const {
      title,
      uploadedImage,
      startDate,
      endDate,
      desc,
      wayToFind,
      location,
      maxAttendeeVal
    } = this.state;
    // { "title":"sdadasd", "mainimage":"http://127.0.0.1:8000", "introduction":"1", "findlocation":"2", "start_date":"2019-11-06T12:09:54.601Z", "end_date":"2019-11-06T12:11:54.601Z", "limit_user":"20", "loc_name":"위워크 선릉역2"}
    let data = {
      title,
      mainimage: uploadedImage,
      start_date: startDate,
      end_date: endDate,
      introduction: desc,
      findlocation: wayToFind,
      loc_name: location,
      limit_user: maxAttendeeVal
    };
    const user_token = localStorage.getItem("user_token");
    data = JSON.stringify(data);
    console.log(data);
    fetch(`http://10.58.0.106:8000/event/add?group=${group_id}`, {
      method: "post",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.BQaYsgMzTzB3FGNyGVccFd5LQqgXmM6zXpLVAA5V8QA"
      },
      body: data
    })
      .then(res => res.json())
      .then(res => {
        this.props.history.push(`/event/${1}`);
        // if (res.message === "success") {
        //   console.log(res.message);
        //   const eventId = res.event_id;
        // }
        // else {
        //   window.location.reload();
        // }
      });
    // const eventId = 1;
    // this.state.payment
    //   ? this.props.history.push(`/event/${eventId}`)
    //   : alert("결제 먼저 해주세요");
  };

  handleCancel = () => {
    this.props.history.push("/");
  };

  handleWay = way => {
    this.setState({ wayToFind: way }, () => {
      const { wayToFind, wayCount } = this.state;
      this.setState({ wayCount: wayCount - wayToFind.length });
    });
  };

  handleLocation = location => {
    this.setState({ location: location });
  };

  handleMaxVal = e => {
    const maxVal = parseInt(e.target.value);
    e.target.value === ""
      ? this.setState({ maxAttendeeVal: 0 })
      : typeof maxVal === "number" && this.setState({ maxAttendeeVal: maxVal });
  };

  handlePayment = () => {
    this.setState({
      payment: true
    });
  };

  render() {
    const {
      handleDrop,
      handleClick,
      handleInput,
      handleDate,
      handleEndDate,
      handleDesc,
      handleSubmit,
      handleCancel,
      handleWay,
      handleLocation,
      handleMaxVal,
      handlePayment
    } = this;
    const {
      uploadedImage,
      title,
      titleCount,
      startDate,
      select,
      desc,
      descCount,
      wayToFind,
      wayCount,
      location,
      maxAttendeeVal
    } = this.state;

    return (
      <div className="create-event">
        <Nav />
        <main className="create-event-main">
          <div className="main-left">
            <CreatingEventTitle />
            <div className="choices">
              <CreatingEventNeces
                count={titleCount}
                value={title}
                handleInput={handleInput}
              />
              <CreatingEventDatePicker
                startDate={startDate}
                onDate={handleDate}
              />
              <CreatingEventDuration
                handleEndDate={handleEndDate}
                select={select}
              />
              {uploadedImage.length > 1 ? (
                <ImagePreview
                  uploadedImage={uploadedImage}
                  handleClick={handleClick}
                />
              ) : (
                <CreatingEventDropzone accept={"image/*"} onDrop={handleDrop} />
              )}
              <CreatingEventDesc
                descCount={descCount}
                handleDesc={handleDesc}
                desc={desc}
              />
              <CreatingEventFindLocation
                wayCount={wayCount}
                handleWay={handleWay}
                wayToFind={wayToFind}
              />
              {/* out: 남은 자리,  in: 장소 찾는 법, 장소 이름, 론 랫 */}
              <CreatingEventSetLocation
                location={location}
                handleLocation={handleLocation}
              />
              <CreatingEventOptions
                handlePayment={handlePayment}
                handleMaxVal={handleMaxVal}
                maxAttendeeVal={maxAttendeeVal}
              />
            </div>
          </div>
          <div className="main-right">
            <div className="main-right-wrapper">
              <CreatingEventCard />
            </div>
          </div>
        </main>
        <footer>
          <div className="footer-wrapper">
            <div onClick={handleCancel} className="cancel">
              취소
            </div>
            <div onClick={handleSubmit} className="submit">
              게재하기
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(CreatingEvent);
