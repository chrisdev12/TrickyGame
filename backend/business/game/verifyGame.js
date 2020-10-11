const verifyWinner = require('./verifyWinner');
const getGame = require('./getGame');

const verifyGame = async ({ params, body }, gameSchema) => {
  //Should come a body with players data, intead search by id.
  try {
    let winner;
    let { id } = params;
    let { players } = body;
    if (!players) players = await SearchGameById(id, gameSchema);
    for (const { name, moves } of players) {
      if (verifyWinner(moves)) {
        winner = await gameSchema.findByIdAndUpdate(
          { _id: id },
          { finished: true, winner: name },
          { new: true },
        );
      }
    }

    return winner;
  } catch (error) {
    throw error;
  }
};

async function SearchGameById(id, schema) {
  const { players } = await getGame(id, schema);
  return players;
}

module.exports = verifyGame;
