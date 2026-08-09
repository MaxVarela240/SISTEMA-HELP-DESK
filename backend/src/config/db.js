const mongoose = require('mongoose');

// Conecta a MongoDB. Si no se define MONGODB_URI (por ejemplo, en desarrollo
// local sin un servidor Mongo instalado), levanta un MongoDB en memoria con
// mongodb-memory-server para que el CRUD funcione igual sin instalación previa.
async function connectDB() {
  let uri = process.env.MONGODB_URI;

  if (!uri) {
    const { MongoMemoryServer } = require('mongodb-memory-server');
    const mongod = await MongoMemoryServer.create();
    uri = mongod.getUri();
    console.log('MONGODB_URI no definida: usando MongoDB en memoria para desarrollo.');
  }

  await mongoose.connect(uri);
  console.log('Conectado a MongoDB');
}

module.exports = connectDB;
