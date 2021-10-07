export const hackerSpeak = (words) => {
  return words.replace(/a|A/g, '4')
              .replace(/e|E/g, '3')
              .replace(/i|I/g, '1')
              .replace(/o|O/g, '0')
              .replace(/s|S/g, '5')
}

  /* task was to replace certain letters with words:
  here we used the .replace() function in a chanined order
  to replace all letters, with the '//g' to target them globally */