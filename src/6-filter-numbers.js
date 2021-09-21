export const filterNumbers = (array, largerThan) => {
  const check = (number) => {
    return number <= largerThan
  }
  return array.filter(check)
}
