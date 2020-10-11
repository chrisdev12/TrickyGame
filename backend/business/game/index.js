const newGame = require('./newGame');
const editGame = require('./editGame');
const endGame = require('./endGame');
const verifyGame = require('./verifyGame');
const getGame = require('./verifyGame');
const GameSchema = require('../../models/game');

class Game {
  constructor(GameSchema) {
    this.GameSchema = GameSchema;
  }

  newOne(req) {
    return newGame(req, this.GameSchema);
  }

  getOne(req) {
    const {
      params: { id },
    } = req;

    return getGame(id, this.GameSchema);
  }

  editOne(req) {
    return editGame(req, this.GameSchema);
  }

  endOne(req) {
    const {
      params: { id },
    } = req;

    return endGame(id, this.GameSchema);
  }

  verifyWinner(req) {
    return verifyGame(req, this.GameSchema);
  }
}

module.exports = new Game(GameSchema);
