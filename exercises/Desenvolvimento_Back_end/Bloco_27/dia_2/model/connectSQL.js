const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'gabriel',
  password: 'Gabriel@21',
  database: 'cep_lookup',
});

module.exports = connection;
