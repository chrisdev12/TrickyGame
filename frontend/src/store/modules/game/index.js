import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  game_name: null,
  create_modal: false,
  new_game: ''
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
