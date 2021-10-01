export const hashtags = (text) => {
  return text.split(" ").filter((words) => {
    return words.startsWith("#");
  });
};
