const services = require('../services/services');

const getCep = async (req, res) => {
  try {
    const { cep } = req.params;
    const result = await services.validCEP(cep);
    return res.status(200).json(result);
  } catch ({ status, error }) {
    return res.status(status).json(error);
  }
};

const addCep = async (req, res) => {
  try {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    const result = await services.validInput(
      cep,
      logradouro,
      bairro,
      localidade,
      uf
    );
    return res.status(200).json(result);
  } catch ({ status, error }) {
    return res.status(status).json(error);
  }
};

module.exports = {
  getCep,
  addCep,
};
