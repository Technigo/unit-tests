export const firstLast = (items) => {
  if (items.length === 0) {
    return `No items!`

  }
  if (items.length === 1) {
    return `Only item: ${items[0]}`
  }
  {
    return `First: ${items[0]}, last: ${items[items.length - 1]}`
  }
}
