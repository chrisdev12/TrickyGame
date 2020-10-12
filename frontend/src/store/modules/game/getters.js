const getters = {
  getCurrentGameName(state) {
    return state.current_game.name;
  },
  getCurrentGamePlayers(state) {
    return state.current_game.players;
  },
  getWinnerGame(state) {
    return state.current_game.winner;
  },
};

export default getters;
