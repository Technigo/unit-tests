export const firstLast = (items) => {
  // return `First: ${items[0]}, Last: ${items[1]}`
  if (items.length < 1) {
    return 'No items!'
  } else if (items.length === 1) {
    return `Only item: ${items[0]}`
  } else {
    return `First: ${items[0]}, Last: ${items[items.length - 1]}`
  }
}
