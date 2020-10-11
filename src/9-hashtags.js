export const hashtags = (text) => {
  return text.match(/#\S+/g)
}
