import {Mars} from "../src/mars.js";

describe ('Mars', () => {

  test('should return the input of the person', () => {
    const info = new Mars(27)
    expect(info.input).toEqual(27)
  })
  test('should return the age on Mars rounded to the firt decimal place', () => {
    const info = new Mars(27)
    info.adjustedAge();
    expect(info.marsAge).toEqual(14.4)
  })
})