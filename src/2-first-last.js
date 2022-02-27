export const firstLast = (items, value) => {

  const arrayLength = items.length;

  if (arrayLength === 1) {
    return `Only item: ${items[0]}`;
  } else if (!arrayLength) {
    return `No items!`;
  } else {
    return `First: ${items[0]}, Last: ${items[arrayLength-1]}`
  }

}
