export const filterNumbers = (array, largerThan) => {
  return array.filter(item => item <= largerThan)
}

  /* here i was supposed to filter out the array:
  using the filter() function we check for items
  and compare to the largerThan value,
  and if they're lower then or equal they are filtered out */