export const hashtags = (text) => {
  return text.split(' ').filter(word => word.startsWith('#')) 
}
