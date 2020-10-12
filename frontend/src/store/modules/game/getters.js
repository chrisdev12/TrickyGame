const getters = {
  getCurrentGameName(state) {
    return state.current_game.name;
  },
  getCurrentGamePlayers(state) {
    return state.current_game.players;
  },
  getCurrentGameId(state) {
    return state.current_game._id;
  },
  getWinnerGame(state) {
    return state.current_game.winner;
  },
  getGameMovesPlayed(state){
    const [player1, player2] = state.current_game.players;
    return [...player1.moves, ...player2.moves]
  }
};

export default getters;
