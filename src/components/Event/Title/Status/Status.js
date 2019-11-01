import React from "react";
import "./Status.scss";

export default function Status(props) {
  const { status } = props;
  return (
    <div className="status">{status ? "다가올 이벤트" : "지난 이벤트"}</div>
  );
}
