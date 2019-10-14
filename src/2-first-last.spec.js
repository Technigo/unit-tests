import { firstLast } from './2-first-last'

describe('2-first-last', () => {
  it('should return the first and last items from an array with two items', () => {
    expect(firstLast(['a', 'b'])).toEqual('First: a, Last: b')
  })

  it('should return the first and last items from an array with many items', () => {
    expect(firstLast(['a', 'b', 'c', 'd', 'e'])).toEqual('First: a, Last: e')
  })

  it('Should only return the first item if the array only has one item', () => {
    expect(firstLast(['bob'])).toEqual('Only item: bob')
  })

  it('Should return "No items!" if the array is empty', () => {
    expect(firstLast([])).toEqual('No items!')
  })
})
