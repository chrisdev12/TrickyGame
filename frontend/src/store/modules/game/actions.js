import Game from "@/api/Game";

const actions = {
  updateCreateModal({ commit }, payload) {
    commit("setCreateModal", payload);
  },
  updateNewGame({ commit }, payload) {
    commit("setNewGame", payload);
  },
  updateCurrentGame({ commit }, payload) {
    Game.getById(payload)
    .then(({data}) => commit("setCurrentGame", data.success))
    .catch((err) =>  console.error(err));
  },
  updateMovesOnGame({ commit, getters  } ,payload) {
    const {getCurrentGameId} = getters
    Game.editById(getCurrentGameId,payload)
    .then(({data}) => commit("setCurrentGame", data.success))
    .catch((err) =>  console.error(err));
  },
}
export default actions;
