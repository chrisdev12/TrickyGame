const mongoose = require('mongoose');

const connectDb = () => {
  return mongoose.connect(process.env.DB_MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
  });
};

module.exports = connectDb;
