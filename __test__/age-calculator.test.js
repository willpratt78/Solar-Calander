import {AgeCalculator} from "../src/age-calculator.js"

describe ('AgeCalculator', () => {

  test('should take the user input age and return it', () => {
    const age = new AgeCalculator(27)
    expect(age.age).toEqual(27)
  });

  test('should return the age on Mercury rounded to the firt decimal place', () => {
    const age = new AgeCalculator(27)
    age.mercuryAge();
    expect(age.mercuryAgeRounded).toEqual(112.5)
  });

  test('should return the age on Venus rounded to the firt decimal place', () => {
    const info = new AgeCalculator(27)
    info.venusAge();
    expect(info.venusAgeRounded).toEqual(43.5)
  });
  test('should return the age on Mars rounded to the firt decimal place', () => {
    const info = new AgeCalculator(27)
    info.marsAge();
    expect(info.marsAgeRounded).toEqual(14.4)
  })
})