export const filterNumbers = (array, largerThan) => {
  // const checkNumber = (number) => {
  // return number <= largerThan;
  //};
  //return array.filter(checkNumber);
  let newArray = array.filter((item) => item < largerThan + 1);
  return newArray;
};
