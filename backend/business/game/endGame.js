const endGame = async (id, gameSchema) => {
  try {
    const editGame = await gameSchema.findByIdAndUpdate(
      { _id: id },
      { finished: true },
      { new: true },
    );

    return editGame;
  } catch (error) {
    throw error;
  }
};

module.exports = endGame;
