import { monthName } from './5-month-name'

describe('5-month-name', () => {
  it('should return "January" for month 1', () => {
    expect(monthName(0)).toEqual('January')
  })

  it('should return "June" for month 6', () => {
    expect(monthName(5)).toEqual('June')
  })

  it('should return "December" for month 12', () => {
    expect(monthName(11)).toEqual('December')
  })

  it('should return null for month if the month number is greater than 12', () => {
    expect(monthName(12)).toEqual(null)
  })

  it('should return null for month if the month number is less than 1', () => {
    expect(monthName(-1)).toEqual(null)
  })
})
