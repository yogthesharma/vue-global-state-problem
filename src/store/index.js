import { createStore } from "vuex";

export default createStore({
  state: {
    id: {},
  },

  mutations: {
    CHANGE_NAME(state, id) {
      state.id.push(id);
    },
  },

  actions: {
    changeUser({ commit }, id) {
      commit("CHANGE_NAME", id);
    },
  },

  modules: {},
});
