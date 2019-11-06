import React from "react";
import { useDropzone } from "react-dropzone";
import "./CreatingEventDropzone.scss";

const CreatingEventDropzone = ({ onDrop, accept }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept
  });

  return (
    <>
      <div className="input-label">대표 사진</div>
      <div className="dropzone-wrapper" {...getRootProps()}>
        <input className="dropzone-input" {...getInputProps()} />
        <div className="text-center">
          <div className="dropzone-content">사진 업로드</div>
        </div>
      </div>
    </>
  );
};

export default CreatingEventDropzone;
