export const hashtags = (text) => {
  let words = text.split(' ')
  let filtered = words.filter((word) => {
    return word[0] === '#'
  })
  return filtered
}

  /* task was to filter out the words starting with a hashtag:
  here i use the split() function to separate the words
  into an array, and then filter() those words
  finally outputting the words where the first character matches '#' */