export const hackerSpeak = (words) => {
  
  // words.replace(/ 4/g, "A");
  // var allAs = /A/gi;
  // var allIs = /I/gi;

  return words.replace(/A/g,'4').replace(/I/g, '1').replace(/S/g, '5').replace(/E/g, '3').replace(/O/g, '0').replace(/a/g,'4').replace(/i/g, '1').replace(/s/g, '5').replace(/o/g, '0').replace(/e/g, '3')


}

