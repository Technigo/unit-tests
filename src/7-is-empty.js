export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (Array.isArray(stringArrayOrObject)) {
    return stringArrayOrObject.length === 0
  } else if (type === 'object') {
    return Object.keys(stringArrayOrObject).length === 0
  }


}
