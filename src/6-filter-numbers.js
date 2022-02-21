export const filterNumbers = (array, largerThan) => {
  const checkNumber = (number) => {
    return number <= largerThan;
  };
  return array.filter(checkNumber);
};
