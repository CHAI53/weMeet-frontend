import React from "react";

export default function CreatingEventSetLocation(props) {
  const { location } = props;

  const handleChange = e => {
    const location = e.target.value;
    const { handleLocation } = props;
    handleLocation(location);
  };

  return (
    <div>
      <div className="input-label">이벤트 장소</div>
      <select
        className="selection"
        name="time"
        value={location}
        onChange={handleChange}
      >
        <option value="위워크 선릉역">위워크 선릉 1호점</option>
        <option value="위워크 선릉역2">위워크 선릉 2호점</option>
        <option value="위워크 선릉역3">위워크 선릉 3호점</option>
        <option value="위워크 삼성역2">위워크 삼성 2호점</option>
        <option value="위워크 강남역">위워크 강남 1호점</option>
        <option value="위워크 강남역2">위워크 강남 2호점</option>
        <option value="위워크 삼성역">위워크 삼성점</option>
        <option value="위워크 역삼역">위워크 역삼점</option>
      </select>
    </div>
  );
}
