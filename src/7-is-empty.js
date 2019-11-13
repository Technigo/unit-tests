export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'array') {
    return stringArrayOrObject === []
  } else if (type === 'object') {
    return stringArrayOrObject === {}
  }
   else {
    return false
  }
}
