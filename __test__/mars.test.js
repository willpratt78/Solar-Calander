import {Mars} from "../src/mars.js";

describe ('Mars', () => {

  test('should return the input of the person', () => {
    const info = new Mars(27)
    expect(info.input).toEqual(27)
  })
})