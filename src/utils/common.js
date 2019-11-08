export const isValidEvent = date => {
  const x = new Date(date);
  const now = new Date();
  return x > now;
};

export const makeKorDate = (datetime, needs) => {
  const rawDate = new Date(datetime);
  const year = rawDate.getFullYear() + "년";
  const month = rawDate.getMonth() + 1 + "월";
  let date = rawDate.getDate();
  date < 10 ? (date = "0" + date + "일") : (date = date + "일");
  let day = rawDate.getDay();
  const korWeekdays = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ];
  day = korWeekdays[day];
  const hour = rawDate.getHours();
  let min = rawDate.getMinutes();
  min < 10 && (min += "0");
  const result = {
    year: year,
    month: month,
    date: date,
    day: day,
    hour: hour,
    min: min
  };
  return result[needs];
};

// makeKorDate(datetime, "year");

export const verifyAttendStatus = (vacancy, attendStatus, date) => {
  if (vacancy <= 0 || attendStatus === 1 || !isValidEvent(date)) {
    return false;
  } else {
    return true;
  }
};

export const isUserLoggedIn = () => {
  return localStorage.getItem("user_token") !== null;
};
