export const isEmpty = stringArrayOrObject => {
  const type = typeof stringArrayOrObject;

  if (type === "string") {
    if (stringArrayOrObject === "") {
      return true;
    } else {
      return false;
    }
  } else if (type === "array") {
    if (stringArrayOrObject.length >= 0) {
      return false;
    } else {
      return true;
    }
  } else {
    if (Object.keys(stringArrayOrObject).length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
