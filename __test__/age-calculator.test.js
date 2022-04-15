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
    const age = new AgeCalculator(27)
    age.venusAge();
    expect(age.venusAgeRounded).toEqual(43.5)
  });

  test('should return the age on Mars rounded to the firt decimal place', () => {
    const age = new AgeCalculator(27)
    age.marsAge();
    expect(age.marsAgeRounded).toEqual(14.4)
  })

  test('should return the age on Jupiter rounded to the firt decimal place', () => {
    const age = new AgeCalculator(27)
    age.jupiterAge();
    expect(age.jupiterAgeRounded).toEqual(2.3)
  })

  test('should return the user input age and lifeExpectancy', () => {
    const age = new AgeCalculator(27, 54)
    expect(age.lifeExpectancy).toEqual(54)
  });

  test('should return the user lifeExpectancy on Mercury', () => {
    const age = new AgeCalculator(27, 60)
    const remainingAge = age.lifeExpectancy - age.age
    age.age = remainingAge
    age.lifeExpectancyMercury()
    expect(age.lifeExpectancy).toEqual(137.5)
  });
})