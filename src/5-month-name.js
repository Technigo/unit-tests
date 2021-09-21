const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]
console.log(months)

export const monthName = (monthNumber) => {
    if (months.length < 12) {
      return null
    } 
    else (months.items[monthNumber])
    return months[monthNumber]
}
