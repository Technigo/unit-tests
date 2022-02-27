export const hashtags = (text) => {
  return text.split(" ").filter((word) => word.charAt(0) === "#");
};
