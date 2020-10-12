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
  updateOnGame({ commit }, payload) {
    Game.editById(payload)
    .then(({data}) => commit("setCurrentGame", data.success))
    .catch((err) =>  console.error(err));
  },
}
export default actions;
