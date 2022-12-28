import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/views/home/HomePage.vue";
import Tutorials from "@/views/tutorials/Tutorials.vue";
import Portfolio from "@/views/portfolio/index.vue";
import CarDetails from "@/views/car/CarDetails";
import VendorLandingPage from "@/views/vendor/VendorLandingPage";

const routes = [
  // HomePage
  { path: "/", name: "Home", component: HomePage },
  { path: "/tutorials", name: "Tutorials", component: Tutorials },
  { path: "/portfolio", name: "Portfolio", component: Portfolio },
  { path: "/car/:car_id",  name: "CarDetails",  component: CarDetails,},
  { path: "/vendor", name: "VendorLandingPage", component: VendorLandingPage, }
];

Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes
});
export default router;
