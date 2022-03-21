const connection = require('./connection');

const findUserModel = async (username) => {
    const connect = await connection();

    const user = await connect.collection('users').find({ username }).toArray();

    return user;
};

module.exports = {
    findUserModel,
};
