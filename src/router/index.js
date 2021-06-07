import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../views/Layout.vue";
import Rules from "../views/Rules.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
  },
  {
    path: "/rules",
    name: "Rules",
    component: Rules,
  },
  {
    path: "/design-system",
    name: "Design System",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DesignSystem.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
