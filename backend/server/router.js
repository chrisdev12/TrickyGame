const gameController = require('../controllers/game');

const routes = function (server) {
  server.use('/game', gameController);
};

module.exports = routes;
