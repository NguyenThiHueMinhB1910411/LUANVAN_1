import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home/HomeView.vue";
import Contact from "@/views/Contact/Contact.vue";
import Login from "@/views/Login/Login.vue";
import Register from "@/views/Login/Register.vue";
import About from "@/views/About/About.vue";
import FeverInDog from "@/views/About/FeverInDog.vue";
import StressCat from "@/views/About/StressCat.vue";

import Booking from '@/views/Booking/Booking.vue';
import Service from '@/views/Service/Service.vue';
import SpaRoom from '@/views/Service/SpaRoom/SpaRoom.vue';
import HotelRoom from '@/views/Service/HotelRoom/HotelRoom.vue';
import PhysicalExamination from '@/views/Service/PhysicalExamination/PhysicalExamination.vue';
// admin
import Admin from '@/views/Admin/Admin.vue';


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  { path: "/about", name: "About", component: About },
  {
    path: "/feverInDog",
    name: "FeverInDog",
    component: FeverInDog,
  },
  // stress cat
  {
    path: "/stressCat ",
    name: "StressCat",
    component: StressCat,
  },
  {
    path:'/booking',
    name:'Booking',
    component: Booking,
  },
  {
    path: '/Service',
    name: 'Service',
    component: Service,
  },
  {
    path: '/HotelRoom',
    name: 'HotelRoom',
    component: HotelRoom,
  },
  {
    path: '/SpaRoom',
    name: 'SpaRoom',
    component: SpaRoom,
  },
  {
    path: '/PhysicalExamination',
    name: 'PhysicalExamination',
    component: PhysicalExamination,
  },


  // admin
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
    children : [
     {
      path: 'con',
      name: 'con',
      component: PhysicalExamination,
     }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;