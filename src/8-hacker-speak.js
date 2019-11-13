import { strict } from "assert";

export const hackerSpeak = words => {
  var lettersToNumbers = words
    .replace(/a/gi, "4")
    .replace(/e/gi, "3")
    .replace(/i/gi, "1")
    .replace(/o/gi, "0")
    .replace(/s/gi, "5");

  return lettersToNumbers;
};
