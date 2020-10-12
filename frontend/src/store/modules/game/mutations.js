const mutations = {
  setCreateModal(state, payload) {
    state.create_modal = payload;
  },
  setNewGame(state, payload) {
    state.new_game = payload;
  },
  setCurrentGame(state, payload) {
    console.log(payload)
    state.current_game = payload;
  },
}
export default mutations
