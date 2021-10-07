export const firstLast = (items) => {
  if (!items.length) {
    return `No items!`
  } else if (items.length === 1) {
    return `Only item: ${items[0]}`
  } else {
    return `First: ${items[0]}, Last: ${items[items.length - 1]}`
  }
}

  /* this was done in the code session with our teacher
  simple if statements trying to pass all the logic */