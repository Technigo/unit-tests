const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const monthName = monthNumber => {
  if (monthNumber === 1) {
    return months[monthNumber - 1];
  } else if (monthNumber === 6) {
    return months[monthNumber - 1];
  } else if (monthNumber === 12) {
    return months[monthNumber - 1];
  } else if (monthNumber < 1 || monthNumber > 12) {
    return null;
  }
};
