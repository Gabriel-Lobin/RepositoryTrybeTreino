const connection = require('./connection.mongo');

const addAutor = async (firstName, lastName, email, password) => {
  try {
    const connect = await connection();
    const { insertedId } = await connect.collection('authors').insertOne({
      firstName,
      lastName,
      email,
      password,
    });
  
    return insertedId;
    
  } catch (error) {
    console.error('erro', error.message);
  }
};

module.exports = {
  addAutor,
};
