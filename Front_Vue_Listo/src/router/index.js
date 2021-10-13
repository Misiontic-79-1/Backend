import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Nosotros from "../views/Nosotros.vue";
import Dashboard from "../views/Dashboard.vue";
import Config from "../views/Config.vue";
import Reservas from "../views/Reservas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/notas",
    name: "Notas",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Notas.vue"),
  },

  {
    path: "/nosotros",
    name: "Nosotros",
    component: Nosotros,
  },

  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Reservas",
    name: "Reservas",
    component: Reservas,
  },

  {
    path: "/Config",
    name: "Config",
    component: Config,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
