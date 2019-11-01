import React from "react";

export default function Timeline(props) {
  const { startDate, endDate } = props;

  return (
    <div className="timeline-wrapper">
      <div className="date">{`${convertDate(startDate, 0)}`}</div>
      <div className="timeline">{`${convertDate(
        startDate,
        1
      )}부터 ${convertDate(endDate, 1)}까지`}</div>
      <div className="day">{`매주 ${findDay(startDate)}`}</div>
    </div>
  );
}

function convertDate(date, num) {
  const strDate = `${date}`;
  const dateArr = strDate.split(" ");
  const yymmdd = dateArr[0].split("-");
  const tt = dateArr[1];
  const timeLine = [`${yymmdd[0]}년 ${yymmdd[1]}월 ${yymmdd[2]}일`, `${tt}`];
  return timeLine[num];
}

function findDay(date) {
  const weekName = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ];

  return weekName[new Date().getDay(date)];
}
