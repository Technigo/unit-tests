export const hashtags = (text) => {
  return text.match(/\#[a-zA-Z]*/g)
}
