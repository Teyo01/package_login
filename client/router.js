import VueRouter from "vue-router";
import welcome from "./view/welcome";

const routes = [
    //routes not login
    { 
        path: "/", 
        name:"welcome", 
        component: welcome 
    }
]

const router = new VueRouter({
    routes,
    mode: "history",
  });

export default router;
  