import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// import all pages
const HOME = () => import(/* webpackChunkName: "Home" */ "../views/Home.vue");
const LOGIN = () =>
    import(/* webpackChunkName: "Login" */ "../views/Login.vue");
const ERROR_404 = () =>
    import(/* webpackChunkName: "Error404" */ "../views/404.vue");

// Outlet
const INDEX_OUTLET = () =>
    import(/* webpackChunkName: "IndexOutlet"*/ "../views/outlets/Index");
const DATA_OUTLET = () =>
    import(/* webpackChunkName: "DataOutlet"*/ "../views/outlets/Data");
const ADD_OUTLET = () =>
    import(/* webpackChunkName: "AddOutlet"*/ "../views/outlets/Add");
const EDIT_OUTLET = () =>
    import(/* webpackChunkName: "EditOutlet"*/ "../views/outlets/Edit");

Vue.use(VueRouter);

// define routes
const routes = [
    {
        path: "/",
        name: "home",
        component: HOME,
        meta: {
            requiresAuth: true,
            title: "Dashboard",
        },
    },
    {
        path: "/login",
        name: "login",
        component: LOGIN,
        meta: {
            // requiresAuth: false,
            layout: "blank",
            title: "Login",
        },
    },
    {
        path: "/outlets",
        component: INDEX_OUTLET,
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: "/", //sebagai index
                name: "outlets.data",
                component: DATA_OUTLET,
                meta: {
                    title: "Manage Outlets",
                },
            },
            {
                path: "/add",
                name: "outlets.add",
                component: ADD_OUTLET,
                meta: {
                    title: "Add New Outlet",
                },
            },
            {
                path: "/edit/:id",
                name: "outlet.edit",
                component: EDIT_OUTLET,
                meta: {
                    title: "Edit OUtlet",
                },
            },
        ],
    },
    {
        path: "*s",
        name: "notfound",
        component: ERROR_404,
        meta: {
            layout: "blank",
            title: "not found",
        },
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

// navigation guard
router.beforeEach((to, from, next) => {
    // bersihkan semua error yang ada
    store.commit("CLEAR_ERRORS");
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        let auth = store.getters.isAuth;
        if (!auth) {
            next({ name: "login" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
