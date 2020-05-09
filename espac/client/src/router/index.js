import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/SignUpPage.vue";
import SignInPage from "../views/SignInPage.vue";
import Home from "../views/Home.vue";
import PostFormPage from "../views/PostFormPage";
import UserDashboard from "../views/UserDashboard";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home
  },
  {
    path: "/SignUpPage",
    name: "SignUpPage",
    component: SignUpPage
  },
  {
    path: "/SignInPage",
    name: "SignInPage",
    component: SignInPage
  },
  {
    path: "/UserDashboard",
    name: "UserDashboard",
    component: UserDashboard
  },
  {
    path: "/PostFormPage",
    name: "PostFormPage",
    component: PostFormPage
  },
  {
    path: "/Catalogue",
    name: "Catalogue",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Catalogue.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
