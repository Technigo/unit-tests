export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject
  
  if (type === 'string') {
    return stringArrayOrObject === ''
  }
  if (type === 'object') {
    if (stringArrayOrObject.length === 0 || Object.keys(stringArrayOrObject).length === 0) {
      return true
    } 
    else {
      return false
    }
  }
  return false
}