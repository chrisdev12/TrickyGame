const newGame = async ({ body }, gameSchema) => {
  try {
    const newGame = new gameSchema({
      name: body.name,
      players: body.players,
    });
    const insertGame = await newGame.save();

    return insertGame;
  } catch (error) {
    throw error;
  }
};

module.exports = newGame;
