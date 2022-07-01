import UserService from "../../services/UserService";

const state = {
    users: [],
    authenticated: [],
};

const mutations = {
    ASSIGN_USER(state, payload) {
        state.users = payload;
    },
    ASSIGN_USER_AUTH(state, payload) {
        state.authenticated = payload;
    },
};

const actions = {
    async getUserLists({ commit }) {
        try {
            const response = await UserService.getUserLists();
            console.log(response.data);
            commit("ASSIGN_USER", response.data);
        } catch (error) {
            console.group("error for get user lists");
            console.log(error);
            console.groupEnd();
            throw error;
        }
    },
    async getUserAuthenticated({ commit }) {
        try {
            const response = await UserService.getUserAuthenticated();
            console.log(response.data);
            commit("ASSIGN_USER_AUTH", response.data);
        } catch (error) {
            console.group("error for get user authenticated");
            console.log(error);
            console.groupEnd();
            throw error;
        }
    },
};

const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
