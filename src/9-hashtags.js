function isHashtag(word) {
  return word.startsWith("#");
}

export const hashtags = (text) => {
  return text.split(" ").filter(isHashtag);
}
