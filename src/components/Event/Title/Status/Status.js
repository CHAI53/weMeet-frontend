import React from "react";
import "./Status.scss";

export default function Status(props) {
  const { status } = props;
  return (
    <div className="status">{status ? "지금 진행 중" : "지난 이벤트"}</div>
  );
}
