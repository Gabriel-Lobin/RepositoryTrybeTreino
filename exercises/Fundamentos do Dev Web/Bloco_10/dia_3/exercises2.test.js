const functions = require('./exercises2');
const { randomNumber } = functions;

describe('testa functions', () => {
  test('randomNumber', () => {
    expect.assertions(3);

    const randomNumber = jest.fn().mockReturnValue(10);
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toReturnWith(10);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  })
  test('randomNumber Changed', () => {
    expect.assertions(3);

    const random = jest.spyOn(functions, 'randomNumber')
      .mockImplementationOnce((a, b) => a / b);
    random(2, 1);
    expect(random).toHaveBeenCalledTimes(1);
    expect(random).toReturn();
    expect(random).toHaveBeenCalledWith(2, 1);
  })
  test('test division', () => {
    // expect.assertions(3);

    const random = jest.spyOn(functions, 'randomNumber')
      .mockImplementationOnce()
  })
})
