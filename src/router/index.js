import Vue from 'vue'
import Router from 'vue-router'
import componentA from "@/components/componentA";
import parent from "@/components/parent";
import grandpaDom from "@/components/grandpaDom";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "componentA",
      component: componentA
    },
    {
      path: "/one",
      name: "componentA",
      component: componentA
    },
    {
      path: "/two",
      name: "parent",
      component: parent
    },
    {
      path: "/three",
      name: "grandpaDom",
      component: grandpaDom
    }
  ]
});
