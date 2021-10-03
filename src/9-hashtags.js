
export const hashtags = (text) => {
  return text.split('')
  .filter((elementsInArray) => {
    return elementsInArray.match(/#\w+/g)
  }) 
}