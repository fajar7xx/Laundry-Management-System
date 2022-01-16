import Vue from "vue";
import VueRouter from "vue-router";

// import all pages
const HOME = () => import(/* webpackChunkName: "Home" */ "../views/Home.vue");
const LOGIN = () =>
    import(/* webpackChunkName: "Login" */ "../views/Login.vue");

Vue.use(VueRouter);

// define routes
const routes = [
    {
        path: "/",
        name: "home",
        component: HOME,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/login",
        name: "login",
        component: LOGIN,
        meta: {
            requiresAuth: false,
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
        const AUTH = store.getters.isAuth;
        if (!AUTH) {
            next({ name: "login" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
