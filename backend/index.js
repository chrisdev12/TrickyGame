const server = require('./server/config.js');
const connectDb = require('./server/database.js');

connectDb().then(() =>
  server.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}!`);
    server.on('error', console.error('failed'));
    server.on('listening', console.log('working'));
  }),
);
