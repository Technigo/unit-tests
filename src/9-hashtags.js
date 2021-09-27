export const hashtags = (text) => {
  return text.split(' ')
  .filter((elementInArray) => {
    return elementInArray.startsWith('#') 
  }) 
}
