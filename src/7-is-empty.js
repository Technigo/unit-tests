export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    return stringArrayOrObject === ''
  } else if (type === 'array') {
    return stringArrayOrObject.isArray([]) 
  } else if (type === 'object') {
    return Object.keys(stringArrayOrObject).length === 0
  } else {
    return false
  }
}

  /* this was a bit of a head scratcher at first,
  where true or false had to be the result depending on values:
  first off the if statements all aim to come out as 'true',
  trying to match an empty string;
  determine whether the array is an array or not (and matching);
  and finally seeing if the object is zero in length aka empty */