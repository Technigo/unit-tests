export const hackerSpeak = (words) => {
  let workArr = words.split("");
  return workArr
    .map((letter) => {
      if (letter === "a" || letter === "A") {
        return (letter = "4");
      } else if (letter === "e" || letter === "E") {
        return (letter = "3");
      } else if (letter === "i" || letter === "I") {
        return (letter = "1");
      } else if (letter === "o" || letter === "O") {
        return (letter = "0");
      } else if (letter === "s" || letter === "S") {
        return (letter = "5");
      } else {
        return letter;
      }
    })
    .join("");
};
