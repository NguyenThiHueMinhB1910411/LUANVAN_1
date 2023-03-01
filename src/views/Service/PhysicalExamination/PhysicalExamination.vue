<script>

</script>
<template>

<main>
    <div class="d-flex justify-content-center container">
        <div class="m-1 p-2 ">
            <h2 class="title-right text-center fw-bold" style="font-size:40px;">Chuẩn đoán và điều trị</h2>
            <div class="d-flex justify-content-center pb-3">
                <img src="../../../assets/images/logo-cat-dog.png" alt="">
            </div>
            <div class="row">

                <div class="col-6 p-3">
                    <p class="attention">Lưu ý:</p>
                    <div>Lịch hẹn có hiệu lực sau khi được xác nhận chính thức từ VETERINARY CLINIC.</div>
                    <div>Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất. Trong trường hợp cung cấp sai thông tin họ tên, điện thoại, việc xác nhận cuộc hẹn sẽ không có hiệu lực.</div>
                    <div>Quý khách sử dụng dịch vụ Đặt hẹn trực tuyến, xin vui lòng đặt trước ít nhất là 24 giờ trước khi đến khám.</div>
                    <div>Trong những trường hợp khẩn cấp hoặc nghi ngờ có các triệu chứng nguy hiểm, quý khách nên hoặc <span class="text-danger fw-bold"> ĐẾN TRỰC TIẾP</span> hoặc <span class="text-danger fw-bold"> 0909 326 482 </span>để kịp thời xử lý.</div>

                    <div class="pt-4">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary text-light" style="font-size: 20px;" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Đăng ký khám bệnh
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content ">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-uppercase mt-4" id="exampleModalLabel">
                                            Đăng ký khám bệnh
                                        </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <table>
                                            <tr class="">
                                                <td class="title-info">
                                                    Tên vật nuôi :
                                                    <span class="text-danger fw-bold">*</span>
                                                </td>
                                                <td colspan="2">
                                                    <input type="text" class="form-control w-100" id="formGroupExampleInput" required placeholder="Nhập vào tên vật nuôi" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="d-flex justify-content-start">
                                                    Vật nuôi là:
                                                    <span class="text-danger fw-bold">*</span>
                                                </td>
                                                <td>
                                                    <div class="form-check">
                                                        <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                        <p class="form-check-label col" for="flexRadioDefault2">
                                                            Chó
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="form-check">
                                                        <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                        <p class="form-check-label col" for="flexRadioDefault2">
                                                            Mèo
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="d-flex justify-content-start">
                                                    Giới tính:
                                                    <span class="text-danger fw-bold">*</span>
                                                </td>
                                                <td>
                                                    <div class="form-check">
                                                        <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                        <p class="form-check-label col" for="flexRadioDefault2">
                                                            Male
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="form-check">
                                                        <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                        <p class="form-check-label col" for="flexRadioDefault2">
                                                            Female
                                                        </p>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr class="create-space">
                                                <td>
                                                    Chọn Bác Sĩ:
                                                    <span class="text-danger fw-bold">*</span>
                                                </td>
                                                <td>
                                                    <select id="" name="">
                                                        <option value=""> Ngô Ngọc Hân</option>
                                                        <option value=""> Huỳnh Đức Chiến</option>
                                                        <option value=""> Võ Thị Hai</option>
                                                        <option value=""> Nguyễn Trọng Nguyên</option>
                                                        <option value=""> Lê Văn Nhân</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="d-flex justify-content-start">Mô tả tình trạng:</td>
                                                <td>
                                                    <textarea id="story" name="story" rows="5" cols="50">
Nói sơ về tình trạng bệnh...
</textarea>

                                                </td>

                                            </tr>
                                            <tr class="create-space">
                                                <td>
                                                    Thời gian đặt hẹn:
                                                    <span class="text-danger fw-bold">*</span>
                                                </td>
                                                <td>
                                                    <input type="date" />
                                                </td>
                                            </tr>

                                        </table>
                                        <div class="form-group">
                                            <div class="box-timeslot" style="margin-top: 20px; margin-bottom: 15px"></div>
                                            <hr />
                                            <h5 class="text-center modal-title text-uppercase mb-2">
                                                Thông tin của bạn
                                            </h5>
                                            <div>
                                                <form action="">
                                                    <div class="form-group">
                                                        <p class="">
                                                            Họ và tên của bạn :
                                                            <span class="text-danger fw-bold">*</span>
                                                        </p>
                                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nhập vào họ tên của bạn" required />
                                                    </div>
                                                    <div class="form-group">
                                                        <p class="">
                                                            Số điện thoại :
                                                            <span class="text-danger fw-bold">*</span>
                                                        </p>
                                                        <!-- <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required> -->
                                                        <input type="tel" class="form-control" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="formGroupExampleInput" placeholder="Nhập vào số điện thoại" required />
                                                    </div>
                                                    <div class="form-group">
                                                        <p class="">
                                                            Địa chỉ : <span class="text-danger fw-bold">*</span>
                                                        </p>
                                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nhập vào địa chỉ của bạn" required />
                                                    </div>
                                                    <div class="form-group">
                                                        <p class="">
                                                            Email : <span class="text-danger fw-bold">*</span>
                                                        </p>
                                                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nhập vào email của bạn" required />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary text-light" data-bs-dismiss="modal">
                                            Hủy
                                        </button>
                                        <button type="button" class="btn btn-primary text-light">
                                            Đặt lịch ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-6 p-3">
                    <img src="../../../assets/images/physicalExamination-img.webp" alt="" class="img-fluid">
                </div>

            </div>

            <!-- <table class="table table-hover text-center border border-primary col-9">
                <thead>
                    <tr class="text-light bg-form">
                        <th colspan="6 ">Bảng giá cả dịch vụ</th>
                    </tr>
                    <tr class="text-dark use-color">
                        <th colspan="2" rowspan="2">Dịch vụ</th>
                        <th colspan="4">Giá</th>
                    </tr>
                    <tr class="text-dark use-color">
                        <td scope="col " colspan="2">Mèo</td>
                        <td scope="col" colspan="2">Chó</td>
                    </tr>
                    <tr>
                        <td colspan="2">Tắm</td>
                        <td colspan="2">180.000</td>
                        <td colspan="2">230.000</td>
                    </tr>
                    <tr>
                        <td colspan="2">Cắt móng</td>
                        <td colspan="2">180.000</td>
                        <td colspan="2">230.000</td>
                    </tr>
                    <tr>
                        <td colspan="2">Tạo kiểu</td>
                        <td colspan="2">180.000</td>
                        <td colspan="2">230.000</td>
                    </tr>
                    <tr>
                        <td colspan="2">Tỉa lông</td>
                        <td colspan="2">180.000</td>
                        <td colspan="2">230.000</td>
                    </tr>
                    <tr>
                        <td colspan="2">Nhuộm 2 tai</td>
                        <td colspan="2">180.000</td>
                        <td colspan="2">230.000</td>
                    </tr>
                    <tr>
                        <td colspan="2">Nhuộm đuôi</td>
                        <td colspan="2">180.000</td>
                        <td colspan="2">230.000</td>
                    </tr>
                    <tr>
                        <td colspan="2">Nhuộm 4 chân</td>
                        <td colspan="2">180.000</td>
                        <td colspan="2">230.000</td>
                    </tr>
                </thead>
            </table> -->

        </div>
    </div>
</main>

</template>

<style scoped>
@import "./PhysicalExamination.module.css";
</style>
