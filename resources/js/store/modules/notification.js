let nextId = 1;
const state = {
    notifications: [],
};

const mutations = {
    PUSH(state, notification) {
        state.notification.push({
            // using object distraction
            ...notification,
            id: nextId++,
        });
    },
    DELETE(state, notificationToRemove) {
        state.notification = state.notification.filter(
            (notification) => notification.id !== notificationToRemove.id
        );
    },
};

const actions = {
    add({ commit }, payload) {
        commit("PUSH", payload);
    },
    remove({ commit }, payload) {
        commit("DELETE", payload);
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
