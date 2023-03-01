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
        <div class="row">
            <div class="">
                <div class="">

                    <div class="">

                        <div class="text-center">
                            <h3 class=" text-dark text-center pt-4">DANH SÁCH NHÂN SỰ
                            </h3>
                        </div>
                        <div class="row">
                            <!-- <div class="col">
                                <button type="btn btn-primary text-light" class="">
                                    <i class="fa-solid fa-plus"></i>
                                    Nhân viên
                                </button>
                            </div> -->
                            <div>
                            <div class="dropdown col">
                                <a class="btn btn-primary dropdown-toggle px-4 border border-light" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    Xem
                                </a>

                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Bác sĩ</a></li>
                                    <li><a class="dropdown-item" href="#">Nhân viên</a></li>
                                    <li><a class="dropdown-item" href="#">Khách hàng</a></li>
                                </ul>
                            </div>
                        </div>

                        </div>

                        <div class="row  mt-4">

                            <table class="table table-hover text-center table-bordered table table-bordered">
                                <thead class="">
                                    <tr class="text-danger ">
                                        <th scope="col ">STT</th>
                                        <th scope="col">MÃ</th>
                                        <th scope="col">HỌ VÀ TÊN</th>
                                        <th scope="col">CHỨC VỤ</th>
                                        <!-- <TH scope="col">TRẠNG THÁI</TH> -->
                                    </tr>
                                </thead>
                                <tbody class="text-left">
                                    <tr>
                                        <td>1</td>
                                        <td>BS01</td>
                                        <td>Trần Văn An</td>
                                        <td>Bác sĩ</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>BS01</td>
                                        <td>Trần Văn An</td>
                                        <td>Bác sĩ</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>BS01</td>
                                        <td>Trần Văn An</td>
                                        <td>Bác sĩ</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</main>
</template>

<style scoped>
</style>
