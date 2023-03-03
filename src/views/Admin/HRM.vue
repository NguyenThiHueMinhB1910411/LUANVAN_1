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
    faUserPen,
    faTrash,
    faPen,
    faPlus,
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
    faUserPen,
    faTrash,
    faPen,
    faPlus,
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

                        <div class="">
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <font-awesome-icon icon="fa-solid fa-plus" />
                                Thêm bác sĩ
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content ">
                                        <div class="modal-header">
                                            <h5 class="modal-title text-center" id="exampleModalLabel">
                                                <font-awesome-icon icon="fa-solid fa-user-doctor" /> Thêm bác sĩ</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body" style="font-size: 16px !important;">
                                            <table>
                                                <tr class="row">
                                                    <td class="col-4" >
                                                        <p>Họ và tên: </p>
                                                        <input class="col form-control" type="text" placeholder="Nhập vào họ tên" />

                                                    </td>
                                                    <td class="col-4">
                                                        <p>Số điện thoại: </p>
                                                        <input class="col form-control" type="text" placeholder="Nhập vào họ tên" />

                                                    </td>
                                                    <td class="col-4">
                                                        <p>Địa chỉ email: </p>
                                                        <input class="col form-control" type="text" placeholder="Nhập vào họ tên" />

                                                    </td>

                                                </tr>
                                                <tr class="row py-4">
                                                    <td class="col-4">
                                                        <p>Địa chỉ: </p>
                                                        <input class="col form-control" type="text" placeholder="Nhập vào họ tên" />

                                                    </td>
                                                    <td class="col-4">
                                                        <p>Giới tính: </p>
                                                        <input class="col form-control" type="text" placeholder="Nhập vào họ tên" />

                                                    </td>
                                                    <td class="col-4">
                                                        <p>Ảnh: </p>
                                                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
                                                       

                                                    </td>

                                                </tr>
                                                <tr class="row py-4">
                                                    <td class="col-4">
                                                        <p>Tài khoản: </p>
                                                        <input class="col form-control" type="text" placeholder="Nhập vào họ tên" />

                                                    </td>
                                                    <td class="col-4">
                                                        <p>Chuyên môn: </p>
                                                        <input class="col form-control" type="text" placeholder="Nhập vào họ tên" />

                                                    </td>
                                                    <td class="col-4">
                                                        <p>Dịch vụ: </p>
                                                        <input class="col form-control" type="text" placeholder="Nhập vào họ tên" />

                                                    </td>

                                                </tr>
                                            </table>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                                            <button type="button" class="btn btn-primary">Lưu</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row  mt-4">

                            <table class="table table-hover text-center table-bordered table table-bordered" style="font-size: 16px;">
                                <thead class="">
                                    <tr class="text-danger ">
                                        <th scope="col ">Stt</th>
                                        <th scope="col">Mã</th>
                                        <th scope="col">Họ và tên</th>
                                        <th>Số điện thoại</th>
                                        <th>Địa chỉ</th>
                                        <th scope="col">Chức vụ</th>
                                        <th>Quản lý</th>
                                        <!-- <TH scope="col">TRẠNG THÁI</TH> -->
                                    </tr>
                                </thead>
                                <tbody class="text-left">
                                    <tr>
                                        <td>1</td>
                                        <td>BS01</td>
                                        <td>Trần Văn An</td>
                                        <td>033445566778</td>
                                        <td>Cần Thơ</td>
                                        <td>Bác sĩ</td>
                                        <td>
                                            <font-awesome-icon icon="fa-solid fa-pen" class=" text-warning " />
                                            <font-awesome-icon icon="fa-solid fa-trash" class=" text-danger px-4" />
                                            <!-- <div class="row">

                                                <div class="col-6"><font-awesome-icon icon="fa-solid fa-pen"  class=" text-warning" /></div>
                                                <div class="col-6"><font-awesome-icon icon="fa-solid fa-trash" class=" text-danger " /></div>
                                            </div> -->

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>BS01</td>
                                        <td>Trần Văn An</td>
                                        <td>033445566778</td>
                                        <td>Cần Thơ</td>
                                        <td>Bác sĩ</td>
                                        <td>
                                            <font-awesome-icon icon="fa-solid fa-pen" class=" text-warning " />
                                            <font-awesome-icon icon="fa-solid fa-trash" class=" text-danger px-4" />
                                            <!-- <div class="row">

                                                <div class="col-6"><font-awesome-icon icon="fa-solid fa-pen"  class=" text-warning" /></div>
                                                <div class="col-6"><font-awesome-icon icon="fa-solid fa-trash" class=" text-danger " /></div>
                                            </div> -->

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>BS01</td>
                                        <td>Trần Văn An</td>
                                        <td>033445566778</td>
                                        <td>Cần Thơ</td>
                                        <td>Bác sĩ</td>
                                        <td>
                                            <font-awesome-icon icon="fa-solid fa-pen" class=" text-warning " />
                                            <font-awesome-icon icon="fa-solid fa-trash" class=" text-danger px-4" />
                                            <!-- <div class="row">

                                                <div class="col-6"><font-awesome-icon icon="fa-solid fa-pen"  class=" text-warning" /></div>
                                                <div class="col-6"><font-awesome-icon icon="fa-solid fa-trash" class=" text-danger " /></div>
                                            </div> -->

                                        </td>
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
