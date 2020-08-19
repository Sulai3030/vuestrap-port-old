import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home.vue";
import About from "./views/about.vue";

Vue.use(Router);

export default new Router({
  routes:[
    {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "views/home/")
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "home" */ "views/about/")
  },
  {
    path: "/experience",
    name: "experince",
    component: () =>
      import(/* webpackChunkName: "home" */ "views/experience/")
  },
  {
    path: "/education",
    name: "education",
    component: () =>
      import(/* webpackChunkName: "home" */ "views/education/")
  },
  {
    path: "/skills",
    name: "skills",
    component: () =>
      import(/* webpackChunkName: "home" */ "views/skills/")
  },
  {
    path: "/interestes",
    name: "interests",
    component: () =>
      import(/* webpackChunkName: "home" */ "views/interests/")
  },
  {
    path: "/certifications",
    name: "certifications",
    component: () =>
      import(/* webpackChunkName: "home" */ "views/certifications/")
  },
  {
    path: "/blog",
    name: "blog",
    component: () =>
      import(/* webpackChunkName: "home" */ "views/blog/")
  }
  ]
})
  