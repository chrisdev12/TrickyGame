const editGame = async ({ params, body }, gameSchema) => {
  try {
    let { id } = params;
    body.movesNumber = CountPlayersMovements(body.players);
    const editGame = await gameSchema.findByIdAndUpdate({ _id: id }, { $set: body }, { new: true });

    return editGame;
  } catch (error) {
    throw error;
  }
};

function CountPlayersMovements(players) {
  const player1 = players[0].moves.length;
  const player2 = players[1].moves.length;

  return player1 + player2;
}

module.exports = editGame;
