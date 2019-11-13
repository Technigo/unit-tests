export const isEmpty = stringArrayOrObject => {
  const type = typeof stringArrayOrObject;
  if (type === "string") {
    return stringArrayOrObject === "";
  }

  if (type === "array") {
    return stringArrayOrObject.length === 0;
  }
  if (type === "object") {
    return Object.keys(stringArrayOrObject).length === 0;
  }

  return false;
};
