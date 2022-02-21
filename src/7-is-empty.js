export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === "string" && stringArrayOrObject === "") {
    return true;
  }
  if (type === "string" && stringArrayOrObject !== "") {
    return false;
  }
  if (
    (type === "object" && stringArrayOrObject.length === 0) ||
    Object.keys(stringArrayOrObject).length === 0
  ) {
    return true;
  }
  if (type === "object" && stringArrayOrObject !== undefined) {
    return false;
  }
};
