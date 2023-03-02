<script>
import {
    library
} from "@fortawesome/fontawesome-svg-core";
import {
    FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import {
    faHouse,
    faGear,
    faUser,
    faUsers,
    faDog,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faHouse,
    faGear,
    faUser,
    faUsers,
    faDog,
    faArrowDown,
);
</script>

<template>
<div class="col-3 bg-color-sidebars text-light sidebars " style="font-size: 18px;font-family: Sans-serif;">
   
    <div class="pt-4 ms-3">
        <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">

            <h4 class="text-uppercase">ADMIN</h4>
        </a>
    </div>
    <hr>
    <div class="ms-4">
        <p>
            <a class="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <font-awesome-icon icon="fa-solid fa-user" />
            <span class="ms-3">Quản tài khoản </span>
            <font-awesome-icon icon="fa-solid fa-arrow-down " class="px-2"  />
            </a>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="ms-4">Nhân viên
                
            </div>
            <div class="pt-3 ms-4">Bác sĩ
            </div>
            <div class="pt-3 ms-4 pb-3">Khách hàng
            </div>
        </div>

    </div>

    <!-- <div class=" ms-3 pb-4">
        <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
            <font-awesome-icon icon="fa-solid fa-user" />
            <span class="ms-3">Quản tài khoản</span>

        </a>
    </div> -->

    <div class=" ms-3 pb-4">
        <router-link :to="{ name: 'HRM' }">
        <font-awesome-icon icon="fa-solid fa-users" class="px-2" />
        Quản lý nhân sự</router-link
      >
        

        
        <!-- <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
            <font-awesome-icon icon="fa-solid fa-users" class="px-2" />
            <span class="px-2">Quản lý nhân sự</span>
        </a> -->
    </div>
    <div class=" ms-3 pb-4">
        <!-- <a href="#"><i class="fas fa-cog fs-5 me-3"></i>Cài Đặt</a> -->
        <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
            <font-awesome-icon icon="fa-solid fa-dog" class="px-2" />
            <span class="px-2">Quản lý thú y</span>

        </a>
    </div>
    <hr>
    <div class=" ms-4">
        <!-- <a href="#"><i class="fas fa-cog fs-5 me-3"></i>Cài Đặt</a> -->
        <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
            <font-awesome-icon icon="fa-solid fa-gear" class="px-2" />
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
