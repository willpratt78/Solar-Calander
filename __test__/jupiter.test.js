import {Jupiter} from "../src/jupiter.js"

describe ('Jupiter', () => {

  test('should return the input of the person', () => {
    const info = new Jupiter(27);
    expect(info.input).toEqual(27)
    
  })
})