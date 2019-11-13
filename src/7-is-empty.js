import { objectExpression } from "@babel/types"

export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'array') {
    return stringArrayOrObject.length === 0
  } else if (type === 'object') {
    return Object.entries(stringArrayOrObject).length === 0
  }
}
