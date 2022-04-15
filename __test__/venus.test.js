import { Venus } from "../src/venus"

describe ('Venus', () => {

  test('should take user input', () => {
    const info = new Venus(27);
    expect(info.input).toEqual(27)
  })
})