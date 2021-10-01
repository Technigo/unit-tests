export const hackerSpeak = (words) => {
  return words
    .replace(/a/gi, "4")
    .replace(/e/gi, "3")
    .replace(/i/gi, "1")
    .replace(/o/gi, "0")
    .replace(/s/gi, "5");
};
