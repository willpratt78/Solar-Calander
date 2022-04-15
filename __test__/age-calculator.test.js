import {AgeCalculator} from "../src/age-calculator.js"

describe ('AgeCalculator', () => {

  test('should take the user input age and return it', () => {
    const age = new AgeCalculator(27)
    expect(age.age).toEqual(27)
  })

  test('should return the age on Mercury rounded to the firt decimal place', () => {
    const age = new AgeCalculator(27)
    age.mercuryAge();
    expect(age.mercuryAgeRounded).toEqual(112.5)
  })
})