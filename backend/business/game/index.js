const newGame = require('./newGame');
const editGame = require('./editGame');
const endGame = require('./endGame');
const GameSchema = require('../../models/game');

class Game {
  constructor(GameSchema) {
    this.GameSchema = GameSchema;
  }

  newOne(req) {
    return newGame(req, this.GameSchema);
  }

  editOne(req) {
    return editGame(req, this.GameSchema);
  }

  endOne(req) {
    return endGame(req, this.GameSchema);
  }
}

module.exports = new Game(GameSchema);
