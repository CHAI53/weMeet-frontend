import React from "react";

function ImagePreview(props) {
  const { uploadedImage, handleClick } = props;
  return (
    <>
      <img className="group-image" alt="groupImage" src={uploadedImage} />
      <div onClick={handleClick} className="changeImg">
        다시 업로드
      </div>
    </>
  );
}

export default ImagePreview;
