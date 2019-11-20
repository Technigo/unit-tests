export const hackerSpeak = (words) => {
  
  // words.replace(/ 4/g, "A");
  // var allAs = /A/gi;
  // var allIs = /I/gi;

  return words.replace(/A/gi,'4').replace(/I/gi, '1').replace(/S/gi, '5').replace(/E/gi, '3').replace(/O/gi, '0')
}

