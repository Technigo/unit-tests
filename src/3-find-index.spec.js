import { findIndex } from "./3-find-index"

describe("3-find-index", () => {
  const fruits = ["Apple", "Banana", "Orange", "Pear", "Lemon"]
  const stuff = ["Tomato", "Gurkin", "Lettuce", "Bob", "Coffee"]

  it("should return the correct index of the first item", () => {
    expect(findIndex(fruits, "Apple")).toEqual(0)
    expect(findIndex(stuff, "Tomato")).toEqual(0)
  })

  it("should return the correct index of the last item", () => {
    expect(findIndex(fruits, "Lemon")).toEqual(4)
    expect(findIndex(stuff, "Coffee")).toEqual(4)
  })

  it("should return the correct index of an item in the middle", () => {
    expect(findIndex(fruits, "Orange")).toEqual(2)
    expect(findIndex(stuff, "Lettuce")).toEqual(2)
  })

  it("should return -1 if the item is not in the array", () => {
    expect(findIndex(fruits, "Pineapple")).toEqual(-1)
    expect(findIndex(stuff, "Computer")).toEqual(-1)
  })
})
