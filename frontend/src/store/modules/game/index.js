import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const state = {
  game_name: null,
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
