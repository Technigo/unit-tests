const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber < 13 && monthNumber >0) {
    return months[monthNumber - 1]
  } else {
    return null
  }
}
