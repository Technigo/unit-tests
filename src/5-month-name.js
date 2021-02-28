const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  if (monthNumber > 12 || monthNumber < 1) {
    return null
  }
  else { //else can be taken away
    return months[monthNumber -1]
  }
}
