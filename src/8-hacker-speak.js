export const hackerSpeak = (words) => {
  words = words.replace(/a/gi, "4")
  words = words.replace(/e/gi, "3")
  words = words.replace(/i/gi, "1")
  words = words.replace(/o/gi, "0")
  words = words.replace(/s/gi, "5")
  return words
}
