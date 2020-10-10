const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const stringConnection = `mongodb://${process.env.DB_MONGO_HOST}:{process.env.DB_MONGO_PORT}`;

const connectDb = () => {
  return mongoose.connect(stringConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_MONGO_NAME,
  });
};

module.exports = connectDb;
