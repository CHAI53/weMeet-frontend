import React from "react";

export default function CreatingEventFindLocation(props) {
  const handleChange = e => {
    const scrollHeight = e.target.scrollHeight;
    const way = e.target.value;
    const { handleWay } = props;
    let height = 100;
    if (scrollHeight > height) {
      document.querySelector(".mainDesc").style.height = scrollHeight + "px";
    }
    handleWay(way);
  };

  const { wayToFind, wayCount } = props;

  return (
    <div className="desc-wrapper">
      <div className="input-label">찾아오는 길</div>
      <div className="subDescription">
        참석자들에게 찾아오는 길을 알려 주세요.
      </div>
      <textarea
        value={wayToFind}
        onChange={handleChange}
        type="text"
        className="mainDesc"
      />
      <span className="count">{wayCount}</span>
    </div>
  );
}
