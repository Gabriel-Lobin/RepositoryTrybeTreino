const mongodb = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://localhost:27017/model_example';
const DB_NAME = 'model_example';

module.exports = () =>
  mongodb
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => connection.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

// const { MongoClient } = require('mongodb');

// const OPTIONS = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

// let db = null;

// const connection = () => {
//   return db
//     ? Promise.resolve(db)
//     : MongoClient.connect(MONGO_DB_URL, OPTIONS).then((conn) => {
//         db = conn.db('model_example');
//         return db;
//       });
// };

// module.exports = connection;
