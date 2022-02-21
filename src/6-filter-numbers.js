import { loadPartialConfig } from "@babel/core"

export const filterNumbers = (array, largerThan) => {
  let newArray = array.filter(item => item < largerThan + 1)
  return newArray
}


