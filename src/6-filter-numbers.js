export const filterNumbers = (array, largerThan) => {
  const smallerThan = array.filter((number) => number <= largerThan)
  return smallerThan
}
