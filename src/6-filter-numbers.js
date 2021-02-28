export const filterNumbers = (array, largerThan) => {
  const filteredArray = array.filter((number) => {
    if (number > largerThan) {
      return false
    } 
    else {
      return true
    }
  }) 
  return filteredArray
}
