export const hackerSpeak = (words) => {
  return words.split('').map(letter => {
    switch (letter) {
      case 'a' : return '4'
      case 'A' : return '4'
      case 'e' : return '3'
      case 'E' : return '3'
      case 'i' : return '1'
      case 'I' : return '1'
      case 'o' : return '0'
      case 'O' : return '0'
      case 's' : return '5'
      case 'S' : return '5'
      default : return letter
    }
  }).join('')
}
