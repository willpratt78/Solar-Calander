import {MercuryAge} from "../src/mercury.js";

describe ('Constructor name', () => {

  test('should accuratly describe what the test will be doing once passing', () => {
    
  })
})

describe ('MercuryAge', () => {

  test('should return the input of the person', () => {
    const info = new MercuryAge(24)
    expect(info.input).toEqual("24")
    
  })
})