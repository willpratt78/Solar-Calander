import {AgeCalculator} from "../src/age-calculator.js"

describe ('AgeCalculator', () => {

  test('should take the user input age and return it', () => {
    const age = new AgeCalculator(27)
    expect(age.age).toEqual(27)
  })
})