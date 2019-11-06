import React from "react";
import "./CreatingEventCheckbox.scss";

export default function CreatingEventCheckbox(props) {
  const { name } = props;

  const handleClick = e => {
    props.onClick(e);
  };

  return (
    <div className="slideOne">
      <input
        onClick={handleClick}
        name={`${name}`}
        type="checkbox"
        id="slideOne"
        className="check"
      />
      <label htmlFor="slideOne" />
    </div>
  );
}
