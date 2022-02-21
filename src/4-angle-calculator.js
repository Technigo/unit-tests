export const angleCalculator = (turns) => {
  if (turns > 0) {
    turns = turns * 360
    return turns
  } else {
    return 0 
  }
}
