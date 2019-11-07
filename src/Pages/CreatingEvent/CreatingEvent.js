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
      select: "1",
      desc: "",
      descCount: 4000,
      wayToFind: "",
      wayCount: 4000,
      location: "위워크 선릉역",
      maxAttendeeVal: 0
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
    const group_name = this.props.match.params.group_name;
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
    const data = {
      title,
      uploadedImage,
      startDate,
      endDate,
      desc,
      wayToFind,
      location,
      maxAttendeeVal
    };
    alert(JSON.stringify(data));
    // fetch(`http://localhost:8000/api/create_event/${group_name}`, {
    //   method: "post",
    //   headers: {
    //     Authorization: localStorage.getItem("user_token")
    //   },
    //   body: {
    //     data
    //   }
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res));
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
    console.log(e.target.value);
    const maxVal = parseInt(e.target.value);
    e.target.value === ""
      ? this.setState({ maxAttendeeVal: 0 })
      : typeof maxVal === "number" && this.setState({ maxAttendeeVal: maxVal });
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
      handleMaxVal
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
