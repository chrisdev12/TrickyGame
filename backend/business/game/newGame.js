const Game = require('../../models/game');

const newGame = function (req) {
  // eslint-disable-next-line no-undef
  return new Promise((resolve, reject) => {
    let body = req.body;
    console.log(body);
    let newGame = new Game({
      name: body.name,
      players: body.players,
    });
    newGame.save((err, payload) => {
      if (err) return reject(err);

      return resolve(payload);
    });
  });
};

module.exports = newGame;
