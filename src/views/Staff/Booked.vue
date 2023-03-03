<script>
import {
    library
} from "@fortawesome/fontawesome-svg-core";
import {
    FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import {
    faMoneyBill,
    faCreditCard,
    faPrint,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMoneyBill, faCreditCard, faPrint, faUser);
</script>
<template>
<main>
    <div>
        <div class="row">
            <div class="py-3">
                <p class="text-center" style="font-size: 30px;">Dịch vụ đã đăng ký trực tuyến</p>

                <div>
                <div class="dropdown col">
                    <a class="btn btn-primary dropdown-toggle px-4 border border-light" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Xem
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Nội trú</a></li>
                        <li><a class="dropdown-item" href="#">Làm đẹp</a></li>
                        <li><a class="dropdown-item" href="#">Khám bệnh</a></li>
                    </ul>
                </div>
            </div>

                <div class="pt-2">
                    <div class="row">
                        <table class="table table-hover text-center table-bordered table table-bordered" style="font-size: 15px">
                            <thead class="">
                                <tr class="text-danger">
                                    <th>STT</th>
                                    <th>Tên khách hàng</th>
                                    <th>Tên dịch vụ</th>
                                    <th>Ngày đặt</th>
                                    <th>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody class="text-left">
                                <tr>
                                    <td>01</td>
                                    <td>Nguyễn Minh</td>
                                    <td>Nội trú</td>
                                    <td>14:00 23/1/2023</td>
                                    <td>
                                        <p class="text-primary fw-bolder text-center">Đã xác nhận</p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>02</td>
                                    <td>Nguyễn Minh</td>
                                    <td>Nội trú</td>
                                    <td>14:00 23/1/2023</td>
                                    <td>
                                        <p class="text-primary fw-bolder text-center">Đã xác nhận</p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>03</td>
                                    <td>Nguyễn Minh</td>
                                    <td>Nội trú</td>
                                    <td>14:00 23/1/2023</td>
                                    <td>
                                        <p class="text-primary fw-bolder text-center">Đã xác nhận</p>
                                    </td>

                                </tr>
                                <tr>
                                    <td>04</td>
                                    <td>Nguyễn Minh</td>
                                    <td>Nội trú</td>
                                    <td>14:00 23/1/2023</td>
                                    <td>
                                        <p class="text-primary fw-bolder text-center">Đã xác nhận</p>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<!-- 

<style scoped>
</style><style>
< !-- .avatar {
    width: 40px !important;
}
</style> -->
