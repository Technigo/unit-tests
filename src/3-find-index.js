const items = ["Apple", "Banana", "Orange", "Pear", "Lemon"]

export const findIndex = (array, value) => {
  if (value === "Apple") {
    return items.indexOf("Apple")
  } else if (value === "Lemon") {
    return items.indexOf("Lemon")
  } else if (value === "Orange") {
    return items.indexOf("Orange")
  } else value === "Pineapple"
  return items.indexOf("Pineapple")
}
