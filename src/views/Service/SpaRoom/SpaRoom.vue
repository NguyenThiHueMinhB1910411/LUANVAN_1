<script>
import PublicFooters from "@/components/Footer/PublicFooter.vue";
import HeaderPublic from "@/components/Header/PublicHeader.vue"
export default {
  components: {
    PublicFooters,
    HeaderPublic
  },
};
</script>
<template>
<HeaderPublic/>
<main>
    <div class="d-flex justify-content-center container">
        <div>
            <div class="m-1 row container">
            <!-- spa room -->
            <!-- <table class="table table-hover text-center border border-primary col-9">
                <thead>
                    <tr class="text-light set-bg">
                        <th colspan="6 ">Bảng giá cả dịch vụ</th>
                    </tr>
                    <tr class="text-dark set-bg">
                        <th colspan="2" rowspan="2">Dịch vụ</th>
                        <th colspan="4">Giá</th>
                    </tr>
                    <tr class="text-dark set-bg">
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
            <div class="col-6">
                <table class="table table-bordered border-light">
                    <tr class="text-lightablet set-bg text-center text-light fw-normal">
                        <th colspan="6 ">Bảng giá cả dịch vụ</th>
                    </tr>
                    <tr class="set-bg text-light">
                        <td colspan="" class=""></td>
                        <td colspan="" class="">0 -5 kg</td>
                        <td colspan="" class="">Trên 5kg</td>
                    </tr>
                 
                    <tr class=" ">
                        <td colspan="">Cắt móng- mài móng</td>
                        <td colspan="">50k</td>
                        <td colspan="">70kg</td>
                    </tr>

                    <tr class=" ">
                        <td colspan="">Cạo vệ sinh: bụng, lông bàn chân</td>
                        <td colspan="">60k</td>
                        <td colspan="">80kg</td>
                    </tr>
                    <tr class=" ">
                        <td colspan="">Cắt tỉa mặt( dựa theo tình trạng lông)</td>
                        <td colspan="2" class="text-center">50k</td>
                    </tr>
                    <tr class=" ">
                        <td colspan="">Cắt tỉa mông( trái tim) và 4 chân</td>
                        <td colspan="2" class="text-center">70k</td>
                    </tr>

                </table>
            </div>

            <div class="col-6">
                <table class="table table-bordered border-light">
                    <tr class="set-bg text-light">
                        <td colspan="" class="">Dịch vụ</td>
                        <td colspan="2" class="">Giá</td>
                    </tr>
                    <tr class="set-bg text-light">
                        <td colspan="" class=""></td>
                        <td colspan="" class="">0 -5 kg</td>
                        <td colspan="" class="">Trên 5kg</td>
                    </tr>

                    <tr class=" ">
                        <td colspan="">Nhuộm 2 tai</td>
                        <td colspan="">250k</td>
                        <td colspan="">350k</td>
                    </tr>
                    <tr class=" ">
                        <td colspan="">Nhuộm đuôi</td>
                        <td colspan="">100k</td>
                        <td colspan="">150k</td>
                    </tr>

                    <tr class=" ">
                        <td colspan="">Nhuộm 2 tai- đuôi</td>
                        <td colspan="">300k</td>
                        <td colspan="">450k</td>
                    </tr>

                    <tr class=" ">
                        <td colspan="">Combo 2 tai- đuôi- chân</td>
                        <td colspan="">650k</td>
                        <td colspan="">750k</td>
                    </tr>


                   
                </table>

            </div>
         
        <!-- button submit -->
           
        </div>
        <div>
            <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-primary text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Đăng ký dịch vụ
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-uppercase" id="exampleModalLabel">
                                Đăng ký dịch vụ
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
                                    <!-- <td class="d-flex justify-content-start">
                                        
                                        <span class="text-danger fw-bold">*</span>
                                    </td> -->
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <p class="form-check-label col" for="flexRadioDefault2">
                                                Lông ngắn
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <p class="form-check-label col" for="flexRadioDefault2">
                                                Lông dài
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                <tr class="create-space">
                                    <td>
                                        Cân nặng:
                                        <span class="text-danger fw-bold">*</span>
                                    </td>
                                    <td>
                                        <select id="" name="">
                                            <option value="">0-2 kg</option>
                                            <option>2-4 kg</option>
                                            <option value="">4-6 kg</option>
                                            <option value="">6-8 kg</option>
                                            <option value="">8-10 kg</option>
                                            <option value="">Trên 10 kg</option>
                                        </select>
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

                                <tr class="title-info ">
                                    <td class="d-flex justify-content-start">
                                        Gói dịch vụ đã chọn :
                                        <!-- <span class="text-danger fw-bold">*</span> -->
                                    </td>
                                    <td>
                                        <div class="form-check">
                                            <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <p class="form-check-label col" for="flexRadioDefault2">
                                                Physical examination
                                            </p>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <p class="form-check-label col" for="flexRadioDefault2">
                                                Spa-Grooming
                                            </p>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <p class="form-check-label col" for="flexRadioDefault2">
                                                Hotel- service
                                            </p>
                                        </div>
                                    </td>
                                </tr>

                                <tr class="create-space">
                                    <td>
                                        Dịch vụ:
                                        <span class="text-danger fw-bold">*</span>
                                    </td>
                                    <td>
                                        <select id="cars" name="cars">
                                            <option value="">Tắm</option>
                                            <option value="">Cắt móng</option>
                                            <option value="">Tạo kiểu</option>
                                            <option value="">Tỉa lông</option>
                                            <option value="">Nhuộm 2 tai</option>
                                            <option value="">Nhuộm đuôi</option>
                                            <option value="">Nhuộm 4 chân</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr class="create-space">
                                    <td class="d-flex justify-content-start">
                                        Chọn màu:
                                    <td colspan="2">
                                        <input type="color" id="" name="" value="#e66465">
                                    </td>
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
                        <div class="">
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

        </div>
        

        </div>
        

        
    </div>

    
</main>

<PublicFooters/>
</template>

<style scoped>
@import "./SpaRoom.module.css";
</style>
