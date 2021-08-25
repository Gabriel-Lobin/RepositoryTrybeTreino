const uppercase = require('./exercise1.js')

describe('verify uppercase', () => {
  it('should receive a letter and return it in uppercase', () => {
    uppercase("a", (upper) => expect(upper).toBe("A"));
  });
})