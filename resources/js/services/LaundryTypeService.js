import API from "../utils/api";

const LaundryTypeService = {
    createLaundryType(payload) {
        return API.post(`\laundry-type`, payload);
    },
};

export default LaundryTypeService;
