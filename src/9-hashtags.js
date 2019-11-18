export const hashtags = text => {
  let regex = /#\S+/g;
  let result = text.match(regex);
  return result;
};
