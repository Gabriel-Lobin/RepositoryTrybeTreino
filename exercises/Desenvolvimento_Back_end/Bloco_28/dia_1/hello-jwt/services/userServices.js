const createUserService = async (username, password) => {
    if (!username || !password) return { statusCode: 401, message: 'usuario ou senha invalidos' };

    const user = await findUserModel(username);

    if (!user || user.password !== password) return { statusCode: 401, message: 'usuario ou senha invalidos' };

    return user;
};

module.exports = {
    createUserService,
};
