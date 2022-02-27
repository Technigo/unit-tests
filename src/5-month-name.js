const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber>months.length) {
    return null
  }
  if (monthNumber<(months.length)-(months.length -1)) {
    return null
  }
  return months[monthNumber-1]
}
