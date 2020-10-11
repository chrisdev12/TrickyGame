const { error } = require('../../server/responses');
const getGame = require('../../business/game/getGame');
const GameSchema = require('../../models/game');

async function gameIsFinished({ params: { id } }, res, next) {
  try {
    const { finished } = await getGame(id, GameSchema);
    if (finished) throw new Error();

    next();
  } catch (err) {
    return error(res, 403, 'Game is finished and cant be accesed');
  }
}

module.exports = gameIsFinished;
