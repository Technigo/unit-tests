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
  "December",
];

export const monthName = (monthNumber) => {
  const incorrect = null;
  if (1 > monthNumber || monthNumber > 12) {
    return incorrect;
  }
  return months[monthNumber - 1];
};
