import { hackerSpeak } from './8-hacker-speak'

describe('8-hacker-speak', () => {
  it("should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5", () => {
    expect(hackerSpeak("javascript is cool")).toEqual('j4v45cr1pt 15 c00l')
    expect(hackerSpeak("programming is fun")).toEqual('pr0gr4mm1ng 15 fun')
    expect(hackerSpeak("become a coder")).toEqual('b3c0m3 4 c0d3r')
  })

  it('should replace uppercase letters', () => {
    expect(hackerSpeak("JAVASCRIPT IS COOL")).toEqual('J4V45CR1PT 15 C00L')
    expect(hackerSpeak("PROGRAMMING IS FUN")).toEqual('PR0GR4MM1NG 15 FUN')
    expect(hackerSpeak("BECOME A CODER")).toEqual('B3C0M3 4 C0D3R')
  })
})
