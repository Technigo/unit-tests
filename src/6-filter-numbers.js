export const filterNumbers = (array, largerThan) => {
  //Callback function to just return items from array less than the value or largerThan
  return array.filter(item => item <= largerThan)
} 
