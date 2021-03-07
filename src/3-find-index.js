export const findIndex = (array, value) => {
    const isValue = (element) => element === value
    return array.findIndex(isValue)
}
