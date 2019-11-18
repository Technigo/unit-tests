export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  //Check if string is empty
  if (type === 'string') {
    return stringArrayOrObject === ''
  }

  //Check if array or object is empty - same check since arrays returns object too
  if (type === 'object') {
    return Object.entries(stringArrayOrObject).length === 0
  }

  return false
}
