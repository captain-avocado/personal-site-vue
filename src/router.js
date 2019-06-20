import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Projects from "./views/Projects.vue";
import Notes from "./views/Notes.vue";
import More from "./views/More.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Main
    },
    {
      path: "/projects",
      component: Projects
    },
    {
      path: "/notes",
      component: Notes
    },
    {
      path: "/more",
      component: More
    },
    {
      path: "/about",
      component: About
    }
  ]
});
