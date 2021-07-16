const functions = require('./exercises2');
const { randomNumber, caixaAlta, firstLetter, concatt, randomDog } = functions;

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
  test('division', () => {
    expect.assertions(3);
    const random = jest.spyOn(functions, 'randomNumber')
      .mockImplementation((a, b, c) => a * b * c);
    random();
    expect(random).toHaveBeenCalled();
    expect(random).toReturn();
    random.mockReset();
    random.mockImplementation((a) => a * 2);
    expect(random(2)).toBe(4);
  })
  test('caixaAlta', () => {
    expect(caixaAlta('a')).toBe('A');
    const caixa = jest.spyOn(functions, 'caixaAlta')
      .mockImplementation((str) => str.toLowerCase());
      expect(caixa('A')).toBe('a');
  })
  test('firstLetter', () => {
    expect(firstLetter('nome grande')).toBe('n');
    const last = jest.spyOn(functions, 'firstLetter')
      .mockImplementation((string) => string[string.length - 1])
      expect(last('nome grande')).toBe('e')
  })
  test('concatt', () => {
    expect(concatt('to', 'loko')).toBe('to loko');
    const concatt3 = jest.spyOn(functions, 'concatt')
    .mockImplementation((a, b, c) => `${a} ${b} ${c}`)
    expect(concatt3('to', 'muito', 'loko')).toBe('to muito loko');
  })
  test('randomDog', () => {
    // randomDog()
    // .then((dog) => `request ${dog.status}`)
  })
})
