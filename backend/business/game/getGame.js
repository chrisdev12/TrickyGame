const getGame = async (id, gameSchema) => {
  try {
    return await gameSchema.findById(id);
  } catch (error) {
    throw error;
  }
};

module.exports = getGame;
