import VueRouter from "vue-router";
import welcome from "./view/welcome";
import error404 from "./view/404";

const routes = [
    //routes not login
    { 
        path: "/", 
        name:"welcome", 
        component: welcome 
    },
    //error 404 page
    { 
        path:"/404",
        alias: "*",
        name: "error404", 
        component: error404 
    }
]

const router = new VueRouter({
    routes,
    mode: "history",
  });

export default router;
  