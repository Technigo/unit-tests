export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject
  const arrayType = stringArrayOrObject.isArray

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'object') {
    return Object.keys(stringArrayOrObject).length === 0
  }

