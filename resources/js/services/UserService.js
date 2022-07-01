import API from "../utils/api";

const UserService = {
    getUserLists() {
        return API.get(`/user-lists`);
    },

    getUserAuthenticated() {
        return API.get(`/user-authenticated`);
    },
};

export default UserService;
