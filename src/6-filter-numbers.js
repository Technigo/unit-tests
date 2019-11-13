export const filterNumbers = (array, largerThan) => {
  function checkNumbers(number) {
    return number <= largerThan;
  }

  // const newArray = array.filter(checkNumbers);
  // return newArray;
};

// https://www.w3schools.com/jsref/jsref_filter.asp

// function(arg1, arg2) {
//   arg1 === array
//   arg2 === largerThan
// }

// examples
// const LARGER_THAN = 25

// // example 1
// // filter function
// function checkAge(age) {
//   return age <= LARGER_THAN
// }

// const newArray = [1, 2, 3, 30].filter(checkAge)

// // example 2
// // iterate over arrays
// const otherArray = [1,2,3,25].filter(number => {
//   return number <= LARGER_THAN
// })
