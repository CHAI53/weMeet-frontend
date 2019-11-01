export const isValidEvent = function(date) {
  const x = new Date(date);
  const now = new Date();
  return x > now;
};

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
