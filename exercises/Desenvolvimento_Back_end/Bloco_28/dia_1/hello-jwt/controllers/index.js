const ping = require('./ping');
const jwt = require('jsonwebtoken');
const { createUserService } = require('../services/userServices');

const SECRET_PASSWORD = 'GObl467asdhihoHOSO';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const loginController = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await createUserService(username, password);

    const token = jwt.sign({ data: user }, SECRET_PASSWORD, jwtConfig);

    return res.status(200).json({ token });
    
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  ping,
  loginController,
};
