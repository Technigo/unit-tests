import { findIndex } from './3-find-index'

describe('3-find-index', () => {
  const items = ['Apple', 'Banana', 'Orange', 'Pear', 'Lemon']

  it('should return the correct index of the first item', () => {
    expect(findIndex(items, 'Apple')).toEqual(0)
  })

  it('should return the correct index of the last item', () => {
    expect(findIndex(items, 'Lemon')).toEqual(4)
  })

  it('should return the correct index of an item in the middle', () => {
    expect(findIndex(items, 'Orange')).toEqual(2)
  })

  it('should return -1 if the item is not in the array', () => {
    expect(findIndex(items, 'Pineapple')).toEqual(-1)
  })
})
