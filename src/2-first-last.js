export const firstLast = (items) => {
  if (items.length >= 2 ) {
  // should return the first and last items from an array with two items
  // should return the first and last items from an array with many item
    return `First: ${items[0]}, Last: ${items[items.length-1]}`
  } else if (items.length == 1) {
    // Should only return the first item if the array only has one item
    return `Only item: ${items[0]}`
  } else {
    // Should return "No items!" if the array is empty'
    return "No items!"
  }
}
