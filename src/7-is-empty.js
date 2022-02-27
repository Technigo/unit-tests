const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === "string") {
    return stringArrayOrObject === "" || false;
  } else {
    return (
      stringArrayOrObject === [] ||
      Object.keys(stringArrayOrObject).length === 0 ||
      false
    );
  }
};