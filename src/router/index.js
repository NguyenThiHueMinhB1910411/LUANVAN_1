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
import DashBoard from '@/views/Admin/DashBoard.vue';
import HRM from '@/views/Admin/HRM.vue';

//STAFF
import Staff from '@/views/Staff/Staff.vue';



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


  // ADMIN
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
  },
  {
    path: '/hrm',
    name: 'HRM',
    component: HRM,
  },


  {
    path: '/Admin',
    name: 'Admin',
    component: Admin,
    children : [
     {
      path: 'dashboard',
      name: 'DashBoard',
      component: () => import("@/views/Admin/DashBoard.vue"),
     },
     {
      path: 'hrm',
      name: 'HRM',
      component: () => import("@/views/Admin/HRM.vue"),
     },
     {
      path: 'addPerson',
      name: 'AddPerson',
      component: () => import("@/views/Admin/AddPerson.vue"),
     }
    ]
  },

  //STAFF
  {
    path: '/staff',
    name: 'Staff',
    component: Staff,
    children : [
      //trang xem các lịch trình đã khám
      //trang xác nhận 
     {
      path: 'Examinated',
      name: 'Examinated',
      component: () => import("@/views/Staff/Examinated.vue"),
     },
     //Trang lịch trình bác sĩ
     {
      path: 'DoctorCalenadar',
      name: 'DoctorCalenadar',
      component: () => import("@/views/Staff/DoctorCalenadar.vue"),
     },
     {
      path: 'Confirm',
      name: 'Confirm',
      component: () => import("@/views/Staff/Confirm.vue"),
     },
     //Trang ds bác sĩ
     {
      path: 'ListDoctors',
      name: 'ListDoctors',
      component: () => import("@/views/Staff/ListDoctors.vue"),
     },
     //Nhân viên xem các lịch đã được book trực tuyến
     {
      path: 'Booked',
      name: 'Booked',
      component: () => import("@/views/Staff/Booked.vue"),
     },
    
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
