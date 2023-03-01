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

            <h4 class="text-uppercase">STAFF</h4>
        </a>
    </div>
    <hr>
    <div class="ms-4">
        <p>
            <a class="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                <font-awesome-icon icon="fa-solid fa-user" />
            <span class="ms-3">Dịch vụ </span>
            <font-awesome-icon icon="fa-solid fa-arrow-down " class="ms-1"  />
            </a>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="ms-4">Làm đẹp
                
            </div>
            <div class="pt-3 ms-4">Nội trú
            </div>

            
            <router-link :to="{ name: 'Check' }" class="pt-5 ms-4 pb-3"> Khám bệnh</router-link>
            <!-- <div class="pt-3 ms-4 pb-3">Khám bệnh
            </div> -->
        </div>

    </div>
    <div class=" ms-3 pb-4">
        <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
            <font-awesome-icon icon="fa-solid fa-users" />
            <span class="ms-3">Duyệt yêu cầu</span>
        </a>
    </div>

    <div class=" ms-3 pb-4">
   
        <router-link :to="{ name: 'DoctorCalenadar' }" >
            <font-awesome-icon icon="fa-solid fa-users" />
            Lịch bác sĩ</router-link>
    </div>
    <div class=" ms-3 pb-4">

            <router-link :to="{ name: 'Examinated' }" >
            <font-awesome-icon icon="fa-solid fa-dog" />
            Đã khám trong ngày</router-link>
    </div>
    <hr>
    <div class=" ms-4">
        <a class="" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
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
