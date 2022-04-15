import {Mercury} from "../src/mercury.js";

describe ('Constructor name', () => {

  test('should accuratly describe what the test will be doing once passing', () => {
    
  })
})

describe ('MercuryAge', () => {

  test('should return the input of the person', () => {
    const info = new Mercury(24)
    expect(info.input).toEqual(24)
  })

    test('should return the age on Mercury', () => {
      const info = new Mercury(27)
      info.adjustedAge();
      expect(info.mercuryAge).toEqual(112.5)
    })

})