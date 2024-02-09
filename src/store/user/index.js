import actions from "@/store/actions_types";
import mutations from "@/store/mutations_types";
import api from "@/api";

const user = {
  namespaced: true,
  state: {
    username: null,
  },
  getters: {
    getUser: (state) => {
      return state.username;
    },
  },
  actions: {
    [actions.get]({ commit }) {
      return api.fetchUser().then((res) => {
        commit(mutations.SET, res.username);
        return res;
      });
    },
  },
  mutations: {
    [mutations.SET](state, payload) {
      state["username"] = payload;
    },
  },
};

export default user;
