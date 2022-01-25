import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

// import all pages
const HOME = () => import(/* webpackChunkName: "Home" */ "../views/Home.vue");
const LOGIN = () =>
    import(/* webpackChunkName: "Login" */ "../views/Login.vue");
const ERROR404 = () =>
    import(/* webpackChunkName: "Error404" */ "../views/404.vue");

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
        path: "*",
        name: "notfound",
        component: ERROR404,
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
