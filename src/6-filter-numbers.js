export const filterNumbers = (array, largerThan) => {
  // const result = []
  // array.forEach(number => {
  //   if (number <= largerThan) {
  //     result.push(number)
  //   }
  // })
  // return result

  const result = array.filter(number => {
    if (number <= largerThan) {
      return true
    }
    return false
  })
  return result
}
