export const findIndex = (array, valueToFind) => {
  return array.findIndex((elementInArray) => {
    if (elementInArray === valueToFind) {
      return true;
    }
    return false;

  });

}

//https://www.w3schools.com/jsref/jsref_findindex.asp