import React, { Component } from "react";
import "./GroupMakingMain3.scss";
import "./DropzoneStyle.scss";
import Dropzone from "react-dropzone-uploader";

class GroupMakingMain3 extends Component {
  render() {
    const Standard = () => {
      const getUploadParams = () => {
        return { url: "https://httpbin.org/post" };
      };

      const handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta);
      };

      const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta));
        allFiles.forEach(f => f.remove());
        sessionStorage.setItem("mainphoto", this.state.mainphoto);
      };

      return (
        <Dropzone
          getUploadParams={getUploadParams}
          onChangeStatus={handleChangeStatus}
          onSubmit={handleSubmit}
          styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
        />
      );
    };

    return (
      <div className="container3">
        <div className="start-header">
          <div className="progress-bar progress-horizontal">
            <div className="progress-bar-inner"></div>
            <div className="progress-step">
              <div className="step-count3">3/4단계</div>
            </div>
          </div>
        </div>
        <div className="start-main">
          <div className="center">
            <div className="chunk">
              <h2 className="step-headline3">
                <span>그룹을 대표할 이미지를 보여주세요</span>
              </h2>
              <p className="topic-search">
                <span>
                  그룹을 대해 짐작할 수 있는 이미지를 올려주세요. 사람들에게
                  우리 그룹을 잘 보여줄 수 있을까요? 마음이 바뀌면 나중에 다시
                  변경할 수 있습니다.
                </span>
              </p>
            </div>
            <div className="imageUpload-wrapper">
              <Standard />
            </div>
            {/* <div className="upload-guide">
              <p>여기에 원하는 이미지를 끌어다 놓아주세요</p>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default GroupMakingMain3;
