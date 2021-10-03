export const filterNumbers = (array, largerThan) => {
  
  const filterNumbers = array.filter(item => (item <= largerThan))
  return filterNumbers
}