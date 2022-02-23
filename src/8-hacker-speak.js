//different ways of solving the problem from live session 

export const hackerSpeak = (words) => {
  return words.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0').replace(/s/gi, '5')
}


export const hackerSpeak = (words) => {
  const a = /a/gi;
  const four = '4';
  const e = /e/gi;
  const three = '3';
  const i = /i/gi;
  const one = '1';
  const o = /o/gi;
  const zero = '0';
  const s = /s/gi;
  const five = '5';
  return words.replaceAll(a, four).replaceAll(e, three).replaceAll(i, one).replaceAll(o, zero).replaceAll(s, five);
}

export const hackerSpeak = (words) => {
  words = words.replace(/[aeios]/gi, charactersToReplace=>({'a':'4','e':'3','i':'1','o':'0','s':'5'})
  [charactersToReplace]);  
    return words
  }
