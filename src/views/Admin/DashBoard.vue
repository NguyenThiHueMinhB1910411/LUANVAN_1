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
    faUserDoctor,
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faHouse,
    faGear,
    faUser,
    faUsers,
    faDog,
    faArrowDown,
    faUserDoctor,
    faCalendarDays,
);
</script>
<template>
<main>
    <div>
        <div class=" border my-3 py-3 text-center fw-bold fs-5 ">
            TỔNG QUAN
        </div>
        <div class="px-3">
            <div class=" row tong-hop mt-4 p-0">
                <!-- <div class="col-4">
                    <div class="card bg-white shadow-sm mx-auto">
                        <div class="row " style="background-color: #161650;">

                            <div class="col-9  text-light">
                                <p class="mt-3 ms-4">Total patients</p>
                                <p class="ms-5 fs-3">1000</p>
                            </div>
                            <div class="col-3 d-flex justify-content-center">

                                <font-awesome-icon icon="fa-solid fa-user-doctor" class="text-center pt-5 mr text-light  " style="font-size: 30px;" />
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="col-4">
                    <div class="card bg-white shadow-sm mx-auto">
                        <div class="row">

                            <div class="col-9 fw-bold">
                                <p class="mt-3 ms-4">Bác sĩ</p>
                                <p class="ms-5 fs-3">100</p>
                            </div>
                            <div class="col-3 d-flex justify-content-center">
                                <!-- <img src="https://cdn-icons-png.flaticon.com/512/4807/4807695.png"  alt="" style="width: 40%!importain;" > -->

                                <font-awesome-icon icon="a-solid fa-user-doctor" class="text-center pt-5 mx-2  " style="font-size: 30px;" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="card bg-white shadow-sm mx-auto">
                        <div class="row">

                            <div class="col-9 fw-bold">
                                <p class="mt-3 ms-4">Khách hàng</p>
                                <p class="ms-5 fs-3">100</p>
                            </div>
                            <div class="col-3 d-flex justify-content-center">

                                <font-awesome-icon icon="fa-solid fa-users" class="text-center pt-5 mx-2  " style="font-size: 30px;" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card bg-white shadow-sm mx-auto">
                        <div class="row">

                            <div class="col-9 fw-bold">
                                <p class="mt-3 ms-4">Sự kiện mới</p>
                                <p class="ms-5 fs-3">100</p>
                            </div>
                            <div class="col-3 d-flex justify-content-center">

                                <font-awesome-icon icon="fa-solid fa-calendar-days" class="text-center pt-5 mx-2  " style="font-size: 30px;" />
                            </div>
                        </div>
                    </div>
                </div>
          
                
            </div>
        </div>

        <div>

        </div>

    </div>
</main>
</template>

<style scoped>
</style>
