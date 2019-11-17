export const firstLast = items => {
  if (items.length === 0) {
    return 'No items!';
  }

  if (items.length === 1) {
    return `Only item: ${items}`;
  }

  if (items.length > 2) {
    return `First: ${items[0]}, Last: ${items[items.length - 1]}`;
  }

  return `First: ${items[0]}, Last: ${items[1]}`;
};
