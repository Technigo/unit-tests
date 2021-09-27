export const filterNumbers = (array, largerThan) => {
  return array.filter((elementInArray) => {
    if (elementInArray > largerThan) {
      return false
    }
    return true

  })

}
