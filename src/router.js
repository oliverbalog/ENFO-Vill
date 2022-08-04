import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Home from "./views/Home.vue";
import Energyopt from "./views/Energyopt.vue";
import Boiler from "./views/Boiler.vue";
import SysImprove from "./views/SysImprove.vue";
import Smarthome from "./views/Smarthome.vue";
import Electric from "./views/Electric.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Main",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/home",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/energyopt",
      name: "energyopt",
      components: {
        header: AppHeader,
        default: Energyopt,
        footer: AppFooter
      }
    },
    {
      path: "/electric",
      name: "Electric",
      components: {
        header: AppHeader,
        default: Electric,
        footer: AppFooter
      }
    },
    {
      path: "/boiler",
      name: "Boiler",
      components: {
        header: AppHeader,
        default: Boiler,
        footer: AppFooter
      }
    },
    {
      path: "/system_improve",
      name: "SysImprove",
      components: {
        header: AppHeader,
        default: SysImprove,
        footer: AppFooter
      }
    },
    {
      path: "/smarthome",
      name: "Smarthome",
      components:{
        header: AppHeader,
        default: Smarthome,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
