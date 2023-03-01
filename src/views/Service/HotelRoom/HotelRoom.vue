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
  <main class="" style="padding-top: 40px;">
    <div class="pt-4 price-list ">
      <h3 class="text-uppercase text-center mb-4 title-hotel">Hotel</h3>

      <div class="d-flex justify-content-center">
        <img
          src="../../../assets/images/status-hotel.png"
          class="img-fluid status-hotel"
          alt=""
        />
      </div>
      <div class="m-5 pb-5">
        <table class="table table-bordered border-light">
          <tr class="text-lightablet set-bg text-ceter fw-normal">
                        <th colspan="6 ">Bảng giá cả dịch vụ</th>
                    </tr>
          <tr class="set-bg text-light">
            <td colspan="1"><br /></td>
            <td colspan="3">Cân nặng</td>
          </tr>
          <tr class="set-bg text-light">
            <td>Thời gian</td>
            <td>0-5 kg</td>
            <td>5-10 kg</td>
            <td>Trên 10kg</td>
          </tr>
          <tr>
            <td>Thời gian</td>
            <td>12k/Giờ</td>
            <td>20k/Giờ</td>
            <td>25k/Giờ</td>
          </tr>
          <tr>
            <td>Nguyên ngày( 24h/ day)</td>
            <td>288k</td>
            <td>480k</td>
            <td>600k</td>
          </tr>
          <tr>
            <td>Nửa buổi( 7h - 12h)</td>
            <td>60k</td>
            <td>100k</td>
            <td>125k</td>
          </tr>
          <tr>
            <td>Nửa buổi( 12h - 22h)</td>
            <td>120k</td>
            <td>200k</td>
            <td>250k</td>
          </tr>
        </table>
        <div class="d-flex-justify-content-center">
          <div>
            <button type="button" class="btn btn-danger text-light  border border-light mt-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Đăng ký dịch vụ
            </button>

          </div>
          

        </div>
        
      </div>
      <!-- <div class="d-flex justify-content-center">
        <div class="m-1 py-2">
            <button type="button" class="btn btn-danger text-light  border border-light d-flex-justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Đăng ký dịch vụ
            </button>
        </div>
      </div> -->
    </div>

    <!-- table -->
    <div class="d-flex justify-content-center">
      <div class="m-1 p-2">
        <!-- <table class="table table-hover text-center border border-primary">
                <thead>
                    <tr class="text-light bg-form">
                        <th colspan="6 ">Bảng giá dịch vụ khách sạn</th>
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
            </table>
            <div class="">
                <h6 class=""><b> Ghi chú:</b></h6>
                <textarea rows="3" cols="90" class="px-2"></textarea>
            </div> -->

        <!-- Button trigger modal -->
        <!-- <button
          type="button"
          class="btn btn-danger text-light py-2 px-3 border border-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Đăng ký dịch vụ
        </button> -->

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title text-uppercase" id="exampleModalLabel">
                  Đăng ký dịch vụ
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <table>
                  <tr class="">
                    <td class="title-info">
                      Tên vật nuôi :
                      <span class="text-danger fw-bold">*</span>
                    </td>
                    <td colspan="2">
                      <input
                        type="text"
                        class="form-control w-100"
                        id="formGroupExampleInput"
                        required
                        placeholder="Nhập vào tên vật nuôi"
                      />
                    </td>
                  </tr>

                  <tr>
                    <td class="title-info">
                      Vật nuôi là:
                      <span class="text-danger fw-bold">*</span>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Chó
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Mèo
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr class="create-space">
                    <td>
                      <span class="fw-bold">Cân nặng: </span>

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
                    <td class="title-info">
                      Giới tính:
                      <span class="text-danger fw-bold">*</span>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Male
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Female
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr class="title-info">
                    <td class="d-flex justify-content-start">
                      Dịch vụ đã chọn :
                      <span class="text-danger fw-bold">*</span>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Physical examination
                        </p>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Spa-Grooming
                        </p>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Hotel- service
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td class="title-info">
                      Size chuồng cho vật nuôi:
                      <span class="text-danger fw-bold">*</span>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Gói hotel cho bé mèo
                        </p>
                      </div>
                    </td>
                    <td>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <p class="form-check-label col" for="flexRadioDefault2">
                          Gói hotel cho bé chó
                        </p>
                      </div>
                    </td>
                  </tr>
                  <div>
                    <tr>
                    <td color="2">Số ngày gửi:</td>
                    <td>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        max="7"
                      />
                    </td>
                  </tr>

                  </div>
                  
                  <tr class="">
                    <td>
                      Thời gian đặt hẹn
                      <span class="text-danger fw-bold">*</span>:
                    </td>
                    <td>
                      <input type="date" />
                    </td>
                  </tr>
                </table>
                <div class="form-group">
                  <div
                    class="box-timeslot"
                    style="margin-top: 20px; margin-bottom: 15px"
                  ></div>
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
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Nhập vào tên vật nuôi"
                        />
                      </div>
                      <div class="form-group">
                        <p class="">
                          Số điện thoại :
                          <span class="text-danger fw-bold">*</span>
                        </p>
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Nhập vào tên vật nuôi"
                        />
                      </div>
                      <div class="form-group">
                        <p class="">
                          Địa chỉ : <span class="text-danger fw-bold">*</span>
                        </p>
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Nhập vào tên vật nuôi"
                        />
                      </div>
                      <div class="form-group">
                        <p class="">
                          Email : <span class="text-danger fw-bold">*</span>
                        </p>
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Nhập vào tên vật nuôi"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Hủy
                </button>
                <button type="button" class="btn btn-primary">
                  Đặt lịch ngay
                </button>
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
@import "./HotelRoom.module.css";
</style>
