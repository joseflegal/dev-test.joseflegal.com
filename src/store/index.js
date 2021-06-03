import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import gallery from './gallery';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    gallery
  },
});
