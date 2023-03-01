<script>
import {
    library
} from "@fortawesome/fontawesome-svg-core";
import {
    FontAwesomeIcon
} from "@fortawesome/vue-fontawesome";
import {
    faMoneyBill,faCreditCard,faPrint,faUser,
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faMoneyBill,faCreditCard,faPrint,faUser,
);
</script>
<template>
<main>
    <div>
        <div class="row">
            <div class="">
                <div class="">

                    <div class="pt-5">
                        <div class="row">
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

                            <table class="table table-hover text-center table-bordered table table-bordered" style="font-size: 15px;">
                                <thead class="">
                                    <tr class="text-danger ">
                                        <th>Mã KH</th>
                                        <th>Tên KH</th>
                                        <th>SĐT</th>
                                        <th>Tên NV/BS</th>
                                        <th>Ngày khám</th>
                                        <th>Trạng thái</th>
                                        <th>Trạng thái thanh toán</th>
                                        <th>Tổng thanh toán</th>
                                        <th>Thanh toán</th>
                    
                                    </tr>
                                </thead>
                                <tbody class="text-left">
                                    <tr>
                                        <td>01</td>
                                        <td>Phạm Văn An</td>
                                        <td>0389943552</td>
                                        <td>Trần Cao</td>
                                        <td>29-1-2023</td>
                                        <td>Đã khám</td>
                                        <td>Chưa thanh toán</td>
                                        <td>250000 VND</td>
                                        <td><button class="btn btn-success " style="font-size: 14px;">
                                            <font-awesome-icon icon="fa-solid fa-credit-card" />
                                            Thanh toán
                                        </button></td>
                                    </tr>
                                    <tr>
                                        <td>01</td>
                                        <td>Phạm Văn An</td>
                                        <td>0389943552</td>
                                        <td>Trần Cao</td>
                                        <td>29-1-2023</td>
                                        <td>Đã khám</td>
                                        <td>Đã thanh toán</td>
                                        <td>250000 VND</td>
                                        <td><button class="btn btn-danger px-5" style="font-size: 14px;">
                                            <font-awesome-icon icon="fa-solid fa-print" />
                                            In</button></td>
                                    </tr>
                                    <tr>
                                        <td>01</td>
                                        <td>Phạm Văn An</td>
                                        <td>0389943552</td>
                                        <td>Trần Cao</td>
                                        <td>29-1-2023</td>
                                        <td>Đã khám</td>
                                        <td>Đã thanh toán</td>
                                        <td>250000 VND</td>
                                        <td><button class="btn btn-danger px-5" style="font-size: 14px;">
                                            <font-awesome-icon icon="fa-solid fa-print" /> In</button></td>
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
