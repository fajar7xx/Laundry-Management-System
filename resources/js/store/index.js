import Vue from "vue";
import Vuex from "vuex";

// import all store modules
import auth from "./modules/auth";

Vue.use(Vuex);

const store = new Vuex.Store({
    // all modules
    modules: {
        auth,
    },
    state: {
        token: localStorage.getItem("token"),
        errors: [],
    },
    mutations: {
        SET_TOKEN(state, payload) {
            state.token = payload;
        },
        SET_ERRORS(state, payload) {
            state.errors = payload;
        },
        CLEAR_ERRORS(state) {
            state.errors = [];
        },
    },
    actions: {},
    getters: {
        isAuth: (state) => {
            return state.token != "null" && state.token != null;
        },
    },
});

export default store;
