import {Jupiter} from "../src/jupiter.js"

describe ('Jupiter', () => {

  test('should return the input of the person', () => {
    const info = new Jupiter(27);
    expect(info.input).toEqual(27)
    
  })

  test('should return the age on Jupiter rounded to the firt decimal place', () => {
    const info = new Jupiter(27)
    info.adjustedAge();
    expect(info.jupiterAge).toEqual(2.3)
  })
})