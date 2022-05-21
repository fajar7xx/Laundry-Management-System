import API from "../utils/api";

const LaundryTypeService = {
    getLaundryType() {
        return API.get(`\laundry-type`);
    },

    createLaundryType(payload) {
        return API.post(`\laundry-type`, payload);
    },
};

export default LaundryTypeService;
