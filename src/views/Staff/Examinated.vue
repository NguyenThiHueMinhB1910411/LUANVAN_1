<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
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
        <div class="">
          <div class="">
            <div class="pt-5">
              <div class="row">
                <div>
                  <div class="dropdown col">
                    <a
                      class="btn btn-primary dropdown-toggle px-4 border border-light"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Xem
                    </a>

                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li><a class="dropdown-item" href="#">Bác sĩ</a></li>
                      <li><a class="dropdown-item" href="#">Nhân viên</a></li>
                      <li><a class="dropdown-item" href="#">Khách hàng</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="row mt-4">
                <table
                  class="table table-hover text-center table-bordered table table-bordered"
                  style="font-size: 15px"
                >
                  <thead class="">
                    <tr class="text-danger">
                      <th>Mã KH</th>
                      <th>Tên KH</th>
                      <!-- <th>Tên dịch vụ</th> -->
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
                      <!-- <td>Khám bệnh</td> -->
                      <td>0389943552</td>
                      <td>Trần Cao</td>
                      <td>29-1-2023</td>
                      <td>Đã khám</td>
                      <td>Chưa thanh toán</td>
                      <td>250000 VND</td>
                      <td>
                        <button class="btn btn-success w-100"  type="button"
                        
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal">
                          <font-awesome-icon icon="fa-solid fa-credit-card" />
                          Thanh toán
                        </button>

                       
                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title " id="exampleModalLabel">
                                    <font-awesome-icon icon="fa-solid fa-credit-card" class="px-4" /> 
                                    <span>Thanh toán</span>
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <!-- modal thanh toán -->
                              <div class="modal-body">
                                <table>
                                    <tr>
                                        <td class=""><span class="px-2">Số tiền cần thanh toán</span></td>
                                        <td><input type="text"  class="form-control justify-content-center" placeholder="430.000 đồng"></td>
                                    </tr>
                                    <tr>
                                        <td class="d-flex justify-content-start"><span class="px-2">Tiền nhận được</span></td>
                                        <td><input type="text"  class="form-control"></td>
                                    </tr>
                                </table>
                             
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
                                  Thanh toán
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Phạm Văn An</td>
                      <!-- <td>Làm đẹp</td> -->
                      <td>0389943552</td>
                      <td>Trần Cao</td>
                      <td>29-1-2023</td>
                      <td>Đã khám</td>
                      <td>Đã thanh toán</td>
                      <td>250000 VND</td>
                      <td>
                        <button
                          class="btn btn-danger  w-100"
                          style="font-size: 13x"
                        >
                          <font-awesome-icon icon="fa-solid fa-print" />
                          In
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Phạm Văn An</td>
                      <!-- <td>Nội trú</td> -->
                      <td>0389943552</td>
                      <td>Trần Cao</td>
                      <td>29-1-2023</td>
                      <td>Đã khám</td>
                      <td>Đã thanh toán</td>
                      <td>250000 VND</td>
                      <td>
                        <button
                          class="btn btn-danger w-100"
                          style="font-size: 13x"
                        >
                          <font-awesome-icon icon="fa-solid fa-print" /> In
                        </button>
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
