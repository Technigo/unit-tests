export const isEmpty = stringArrayOrObject => {
  const type = typeof stringArrayOrObject;
  // https://www.geeksforgeeks.org/how-to-check-if-a-variable-is-an-array-in-javascript/
  // typeOf [] === 'object'
  // typeOf {} === 'object'
  // so we need another check, as below
  // const isArray = Array.isArray(stringArrayOrObject); // true || false

  if (type === "string") {
    return stringArrayOrObject === "";
  }

  if (type === "array") {
    return stringArrayOrObject.length === 0;
  }

  // https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object
  if (type === "object") {
    return Object.keys(stringArrayOrObject).length === 0;
  }

  return false;
};

// an object is this:
// KEY: VALUES

// {
//   key: value
// }

// const person = {
//   age: 10,
//   name: "erik"
//   proffession: 'developer'
// };
// age = key
// 10 = value

// const arrayOfKeys = Object.keys(person)
// arrayOfKeys = ['age', 'name', 'proffession']
// Object.keys(person).length === 0
// person.age === 10

// arrayOfKeys.forEach(key => {
//   console.log('key') // age name proffession
//   console.log() // 10, 'erik', 'developer'
//   const value = person[key]
// })

// const array = ['erik', 'jens']
// array[1] // jens
