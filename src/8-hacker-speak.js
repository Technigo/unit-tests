export const hackerSpeak = (words) => {

  return words
  .replace(/a/g, '4')
  .replace(/e/g, '3')
  .replace(/i/g, '1')
  .replace(/o/g, '0')
  .replace(/s/g, '5')
  .replace(/A/g, '4')
  .replace(/E/g, '3')
  .replace(/I/g, '1')
  .replace(/O/g, '0')
  .replace(/S/g, '5');
}