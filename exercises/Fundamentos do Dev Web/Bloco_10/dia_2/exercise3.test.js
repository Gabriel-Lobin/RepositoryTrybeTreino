const getUserName = require('./exercise3')

describe('verify returns of getUserName', () => {
  it('should return Mark', async () => {
    const pegaUser = await getUserName(4);
    expect(pegaUser).toBe('Mark');
  })
  it('should fail to return', async () => {
    try {
      await getUserName(3)
    } catch (error) {
      expect(error).toStrictEqual({ error: 'User with 3 not found.' });
    }
  })
});