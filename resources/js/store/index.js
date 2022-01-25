import Vue from "vue";
import Vuex from "vuex";

// plugin
// library that saves our Vuex data between page reloads.
import createPersistedState from "vuex-persistedstate";

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
        user: null,
        errors: [],
    },
    mutations: {
        // payload itu sama dengan data yang dikirm dan akan jadi parameter
        // ibaratkan aja ini method pada laravel dimana payload == $request
        SET_TOKEN(state, payload) {
            state.token = payload;
        },
        SET_USER(state, payload) {
            state.user = payload;
        },
        SET_ERRORS(state, payload) {
            state.errors = payload;
        },
        CLEAR_ERRORS(state) {
            state.errors = [];
        },
        CLEAR_TOKEN(state) {
            state.token = null;
        },
        CLEAR_USER_DATA(state) {
            state.token = null;
            state.user = null;
            localStorage.clear();
            location.reload();
        },
    },
    actions: {},
    getters: {
        isAuth: (state) => {
            return state.token != "null" && state.token != null;
        },
    },
    plugins: [createPersistedState()],
});

export default store;
