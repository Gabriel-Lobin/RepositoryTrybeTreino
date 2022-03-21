const models = require('../model/models');

const validCEP = async (cep) => {
    const regexCEP = /\d{5}-?\d{3}/;
    
    console.log(!regexCEP.test(cep), cep.length !== 8);

  if (!regexCEP.test(cep) || cep.replace('-', '').length !== 8) throw { status: 400, error: { code: 'invalidData', message: 'CEP inválido' } };
    
  const result = await models.findCEP(cep);

  if (result.length === 0) throw { status: 404, error: { code: 'notFound', message: 'CEP não encontrado' } };
  return result;
};

const validInput = async (cep, logradouro, bairro, localidade, uf) => {
    if (!cep || !logradouro || !bairro || !localidade || !uf) throw { status: 400, error: { code: 'invalidData', message: '<mensagem do Joi>' } };
};

module.exports = {
    validCEP,
    validInput
};
