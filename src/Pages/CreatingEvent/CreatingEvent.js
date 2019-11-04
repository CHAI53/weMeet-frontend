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
import CreatingEventDesc from "../../components/CreatingEvent/CreatingEventDesc/CreatingEventDesc";

class CreatingEvent extends Component {
  constructor(props) {
    super(props);
    const group_name = props.match.params.group_name;
    this.state = {
      uploadedImage: ""
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

  render() {
    const { handleDrop, handleClick } = this;
    const { uploadedImage } = this.state;

    return (
      <div className="create-event">
        <Nav />
        <main className="create-event-main">
          <div className="main-left">
            <CreatingEventTitle />
            <div className="choices">
              <CreatingEventNeces />
              <CreatingEventDatePicker />
              <CreatingEventDuration />
              {uploadedImage.length > 1 ? (
                <ImagePreview
                  uploadedImage={uploadedImage}
                  handleClick={handleClick}
                />
              ) : (
                <CreatingEventDropzone accept={"image/*"} onDrop={handleDrop} />
              )}
              <CreatingEventDesc />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(CreatingEvent);
