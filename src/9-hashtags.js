export const hashtags = (text) => {
  let workArr = text.split(" ");
  return workArr.filter((word) => {
    return word[0] === "#";
  });
};
