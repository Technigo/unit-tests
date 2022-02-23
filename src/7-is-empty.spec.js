import { isEmpty } from './7-is-empty'

describe('7-is-empty', () => {
  it('should return true for an empty string', () => {
    expect(isEmpty('')).toEqual(true)
  })

  it('should return false for a string with a value', () => {
    expect(isEmpty('hello')).toEqual(false)
  })

  it('should return true for an empty array', () => {
    expect(isEmpty([])).toEqual(true)
  })

  it('should return false for an array with items', () => {
    expect(isEmpty(['hello', 'world'])).toEqual(false)
  })

  it('should return true for an empty object', () => {
    expect(isEmpty({})).toEqual(true)
  })

  it('should return false for an object with properties', () => {
    expect(isEmpty({ name: 'Jane' })).toEqual(false)
  })
})
