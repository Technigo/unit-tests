export const hashtags = text => {
  const stringToArray = text.split(" ");
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i].charAt(0) !== "#") {
      stringToArray.splice(i, 1);
      i--;
    }
  }
  return stringToArray;
};
