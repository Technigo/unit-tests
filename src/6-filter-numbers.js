export const filterNumbers = (array, largerThan) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largerThan) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
};
