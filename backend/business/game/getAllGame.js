const getAllGames = async (page = 1, gameSchema) => {
  try {
    const options = {
      sort: { date: -1 },
      limit: 10,
      page: page,
    };
    const { docs, totalDocs, totalPages } = await gameSchema.paginate({}, options);

    return {
      games: docs,
      totalGames: totalDocs,
      totalPages: totalPages,
      currentPage: page,
      gamesPerPage: 10,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = getAllGames;
