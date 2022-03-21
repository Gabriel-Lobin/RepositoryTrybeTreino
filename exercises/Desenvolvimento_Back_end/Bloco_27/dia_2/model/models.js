const connect = require('./connectSQL');

const findCEP = async (cep) => {
  const [row] = await connect.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?',
    [cep.replace('-', '')]
  );
    
  return row;
};

module.exports = {
  findCEP,
};
