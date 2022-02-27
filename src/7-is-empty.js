export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === '';
  }

  if (type === 'object') {
    return Object.entries(stringArrayOrObject).length === 0;
  }
  
  return false
}
