export const firstLast = (items) => {
  if (items.lenght === 0) {
    return "There is nothing!"
  } else if (items.lenght === 1) {
    return 'Only one: ${items[0]}'
  } else {
    return `First: ${items[0]}, Last: ${items[1]}`
  }
  }