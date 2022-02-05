"use strict";
import Vue from "vue";

// referensi
// https://vuejs.org/v2/guide/plugins.html

const GetImageHelper = {
    install(Vue, options) {
        Vue.prototype.getImage = (image) => {
            if (image != null && image.length > 0 && image != undefined) {
                return `/storage/couriers/${image}`;
            }
            return `https://plchldr.co/i/80x50?text=test&fc=000`;
        };
    },
};

Vue.use(GetImageHelper);
