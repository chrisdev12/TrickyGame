const server = require('./server/config.js');
const connectDb = require('./server/database.js');
const dotenv = require('dotenv');
dotenv.config();

connectDb()
  .then(() =>
    server.listen(process.env.API_PORT, () =>
      console.log(`API listening on port ${process.env.API_PORT}`),
    ),
  )
  .catch((err) => console.error(err));
