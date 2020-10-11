export const filterNumbers = (array, largerThan) => {
  let newArray = []
  array.forEach(item => {
    if (item <= largerThan) {
      newArray.push(item)
    }
  })
  return newArray
}
