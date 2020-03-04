export const filterNumbers = (array, largerThan) => {
  let newArray = []
  array.forEach(item => {
    if (item <= largerThan) {
      newArray.push(item)
    }
  })
  return newArray
}


// const filterNumbers = (array, largerThan) => {
//   array.forEach(item => {
//     if(item > largerThan) {
//       array.splice(array.indexOf(item), 1)
//     }
//   })
//   return array
// }
