import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.localStorage
    })
  ],
  state: {
    isLoginPressed: false,
    currentUser: undefined,
    token: ""
  },
  mutations: {
    changeLoginPressedState: (state, payload) => {
      state.isLoginPressed = payload;
    },
    setUser: (state, { token, user }) => {
      state.currentUser = user;
      state.token = token;
    }
  },
  actions: {
    pressLogin: ({ commit }, payload) => {
      commit("changeLoginPressedState", payload);
    },
    loginUser: ({ commit }, payload) => {
      commit("setUser", payload);
    }
  },
  modules: {}
});