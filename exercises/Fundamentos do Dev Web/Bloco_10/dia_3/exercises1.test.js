const calc = require('./exercises1');

describe('testa os calculos de', () => {
  test('subtrair', () => {
    expect.assertions(1);

    calc.subtrair = jest.fn();

    calc.subtrair(2, 1);
    expect(calc.subtrair).toHaveBeenCalled();
  })

  test('multiplicar', () => {
    expect.assertions(2);

    calc.multiplicar = jest.fn().mockReturnValue(10);

    calc.multiplicar();
    expect(calc.multiplicar).toHaveBeenCalled();
    calc.multiplicar();
    expect(calc.multiplicar).toReturnWith(10);
  })

  test('somar', () => {
    expect.assertions(3);

    const soma = jest.spyOn(calc, 'somar').mockImplementation((a, b) => a + b)
    soma(1, 1);
    expect(soma).toReturnWith(2);
    expect(soma).toHaveBeenCalled();
    expect(soma).toBeCalledWith(1, 1);
  })

  test('dividir', () => {
    expect.assertions(3);

    calc.dividir = jest.fn()
      .mockReturnValue(15);
    calc.dividir(2, 5);
    expect(calc.dividir).toReturnWith(15);
    expect(calc.dividir).toHaveBeenCalledWith(2, 5);
    expect(calc.dividir).toHaveBeenCalledTimes(1);
  })

  test('subtrair com implementação original', () => {
    expect.assertions(2);

    const subtrair = jest.spyOn(calc, 'subtrair');
    subtrair.mockReturnValue(20);
    subtrair(40, 20);
    expect(subtrair).toHaveBeenCalledWith(40, 20);
    expect(subtrair).toReturnWith(20);
  })
})