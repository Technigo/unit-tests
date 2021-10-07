const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const monthName = (monthNumber) => {
  if (monthNumber < 1 || monthNumber > 12) {
    return null
  }
  else {
    return months[monthNumber - 1]
  }
}

  /* this one wanted 'null' when the index was <1 or >12,
  otherwise the months should correspond to 'human speak'
  numbers of months :) */