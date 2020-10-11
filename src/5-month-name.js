const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber < 1) {
    let a = null
    return a
  } else if (monthNumber > 12) {
    let a = null
    return a
  } else {
    return months[monthNumber - 1]
  }
}
