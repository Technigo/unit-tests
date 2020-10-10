export const firstLast = (items) => {
  if (items.length === 2) {
    return `First: ${items[0]}, Last: ${items[1]}`
  }
  if (items.length > 2) {
    return `First: ${items[0]}, Last: ${items[items.length - 1]}`
  } if (items.length === 1) {
    return `Only item: ${items[0]}`
  } if (items.length === 0) {
    return `No items!`
  }
}