import React from "react";
import { makeKorDate } from "utils/common";

export default function Timeline(props) {
  const { startDate, endDate } = props;

  return (
    <div className="timeline-wrapper">
      <div className="date">{`${makeKorDate(startDate, "year")}년 ${makeKorDate(
        startDate,
        "month"
      )} ${makeKorDate(startDate, "day")}`}</div>
      <div className="timeline">{`${makeKorDate(
        startDate,
        "hour"
      )}:${makeKorDate(startDate, "min")} 부터 ${makeKorDate(
        endDate,
        "hour"
      )}:${makeKorDate(endDate, "min")} 까지`}</div>
      <div className="day">{`매주 ${makeKorDate(startDate, "day")}`}</div>
    </div>
  );
}
