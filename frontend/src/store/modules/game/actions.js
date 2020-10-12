const actions = {
  updateCreateModal({ commit }, payload) {
    commit("setCreateModal", payload);
  },
  updateNewGame({ commit }, payload) {
    commit("setNewGame", payload);
  },
}
export default actions;
