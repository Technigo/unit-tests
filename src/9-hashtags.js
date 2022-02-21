export const hashtags = (text) => {
  const splitText = text.split(" ");
  return splitText.filter((word) => word.charAt(0) === "#");
}
