export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    if (stringArrayOrObject === '') {
      return true
    } else {
      return false
    }
  }
  if (Array.isArray(stringArrayOrObject) === true) {
    if (stringArrayOrObject[0] === undefined) {
      return true
    } else {
      return false
    }
  }
  if (type === 'object') {
    if (Object.entries(stringArrayOrObject).length === 0) {
      return true
    } else {
      return false
    }
  }
}


