import { Venus } from "../src/venus"

describe ('Venus', () => {

  test('should take user input', () => {
    const info = new Venus(27);
    expect(info.input).toEqual(27)
  })
  test('should return the age on Venus rounded to the firt decimal place', () => {
    const info = new Venus(27)
    info.adjustedAge();
    expect(info.venusAge).toEqual(43.5)
  });
})
