const isValidEvent = function(date) {
  const x = new Date(date);
  const now = new Date();
  return x > now;
};

const verifyAttendStatus = (vacancy, attendStatus, date) => {
  if (vacancy <= 0 || attendStatus === 1 || !isValidEvent(date)) {
    return false;
  } else {
    return true;
  }
};

export default verifyAttendStatus;
