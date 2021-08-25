const {
  sum,
  myRemove,
  myRemoveWithoutCopy,
  myFizzBuzz
} = require("./exercises");

describe('verifica se a função sum está somando', () =>
  it('sum retorna 9 da soma de 4 + 5', () => {
    expect(sum(4, 5)).toBe(9);
  }),
  it('verifica soma de 0 retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
)

describe('verifica se a função myRemove retorna uma array', () => {
  it('verifica se o valor é retirado da array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  })
  it('verifica se não retorna a array sem mudança', ()=> {
    expect(myRemove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
  })
  it('verifica se houve mudança no array', () => {
    const param = [1, 2, 3, 4];
    expect(myRemove(param, 3)).not.toStrictEqual(param);
  })
  it('verifica se o valor é retirado da array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  })
})

describe('verifica se a função myRemoveWithOutCopy retorna a propria array sem elemento', () => {
  it('verifica se myRemoveWithCopy retorna a array esperada', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  })
  it('verifica se não retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
  })
  it('verifica se a array de parametro sofre alteração', () => {
    const param = [1, 2, 3, 4];
    const change = param;
    expect(myRemoveWithoutCopy(param, 3)).toBe(change);
  })
  it('verifica se retorna a array esperada', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  })
})

describe('verifica se a função myFizzBuzz retorna os valores corretos', () => {
  it('verifica se ao chamar a função com valor divisível por 3 e 5,retorna o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
  it('verifica se ao chamar a função com valor divisível por 3, retorna o esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })
  it('verifica se ao chamar a função com valor divisível por 5, retorna o esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })
  it('verifica se ao chamar a função com valor não divisível por 3 ou 5, retorna o resperado', () => {
    expect(myFizzBuzz(7)).toBe(7);
  })
  it('verifica o retorno se o valor da chamada não for um numero', () => {
    expect(myFizzBuzz('z')).toBe(false);
  })
})