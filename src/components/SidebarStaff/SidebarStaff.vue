<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faGear,
  faUser,
  faUsers,
  faDog,
  faArrowDown,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
library.add(faHouse, faGear, faUser, faUsers, faDog,
 faArrowDown,faCalendarCheck,);
</script>

<template>
  <div
    class="col-3 bg-color-sidebars text-light sidebars"
    style="font-size: 18px; font-family: Sans-serif"
  >
    <div class="pt-4 ms-3">
      <a
        class=""
        data-bs-toggle="collapse"
        href="#collapseExample1"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <h4 class="text-uppercase">STAFF</h4>
      </a>
    </div>
    <hr />
    <div class="ms-4 pb-4">
      <router-link :to="{ name: 'Confirm' }">
        <font-awesome-icon icon="fa-solid fa-calendar-check" class="px-2" />
        Duyệt yêu cầu</router-link
      >
    </div>

    <div class="ms-4 pb-4">
      <router-link :to="{ name: 'DoctorCalenadar' }">
        <font-awesome-icon icon="fa-solid fa-users" class="px-2" />
        Lịch bác sĩ</router-link
      >
    </div>
    <div class="ms-4 pb-4">
      <router-link :to="{ name: 'Examinated' }">
        <font-awesome-icon icon="fa-solid fa-dog" class="px-2"/>
        Đã khám trong ngày</router-link
      >
    </div>
    <hr />
    <div class="ms-4">
      <a
        class=""
        data-bs-toggle="collapse"
        href="#collapseExample1"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <font-awesome-icon icon="fa-solid fa-gear" />
        Cài đặt
      </a>
    </div>
  </div>
</template>

<style>
/* .sidebars {
    position: sticky;
    background-color: rgb(25, 36, 66);
    height: 1800px;
} */
.sidebars {
  position: sticky;
  background-color: rgb(25, 36, 66);
  height: 1800px;
}

.sidebars a {
  text-decoration: none;
  color: white;
}

.navbar {
  font-size: 25px;
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
