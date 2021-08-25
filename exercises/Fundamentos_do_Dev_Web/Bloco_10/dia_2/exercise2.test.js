const { getUserName } = require('./exercise2');

describe('verify returns of getUserName', () => {
  it('should return Mark', () => {
    expect.assertions(1);

    return expect(getUserName(4)).resolves.toBe('Mark');
  })
  it('should fail to return', () => {
    expect.assertions(1);

    return expect(getUserName(3)).rejects.toStrictEqual({ error: 'User with 3 not found.' });
  })
});