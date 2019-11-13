export const firstLast = (items) => {

  const LastIndex = items.length-1

  if (items.length === 1) {
    return `Only item: ${items[0]}`
  }

  if (items.length === 0) {
    return `No items!`
  }

  return `First: ${items[0]}, Last: ${items[LastIndex]}`

}