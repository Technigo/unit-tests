export const hackerSpeak = (words) => {
  
  const newCharacter = words.replace(/a|A/g,'4').replace(/e|E/g,'3').replace(/i|I/g,'1').replace(/o|O/g,'0').replace(/s|S/g,'5')
  newCharacter.toUpperCase()

  return newCharacter

};





