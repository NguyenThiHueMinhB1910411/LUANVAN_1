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
    <h1>CHECK</h1>
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
                      <th>Mã bác sĩ</th>
                      <th>Tên Bác sĩ</th>
                      <th>Ảnh</th>
                      <th>Tên dịch vụ</th>
                      <th>Loại vật nuôi</th>
                      <th>Chi tiết lịch khám</th>
                    </tr>
                  </thead>
                  <tbody class="text-left">
                    <tr>
                      <td>01</td>
                      <td>Nguyễn Văn An</td>
                      <td>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style="width: 40px !important;"
                          class="avatar"
                          alt=""
                        />
                      </td>
                      <td>Tiêm phòng</td>
                      <td>Mèo</td>
                      <td><button class="btn btn-primary text-light">Chi tiết lịch khám</button></td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Nguyễn Văn An</td>
                      <td>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style="width: 40px !important;"
                          class="avatar"
                          alt=""
                        />
                      </td>
                      <td>Tiêm phòng</td>
                      <td>Mèo</td>
                      <td><button class="btn btn-primary text-light">Chi tiết lịch khám</button></td>
                    </tr>
                    <tr>
                      <td>01</td>
                      <td>Nguyễn Văn An</td>
                      <td>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" style="width: 40px !important;"
                          class="avatar"
                          alt=""
                        />
                      </td>
                      <td>Tiêm phòng</td>
                      <td>Mèo</td>
                      <td><button class="btn btn-primary text-light">Chi tiết lịch khám</button></td>
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

<!-- <style scoped>
</style> -->
<!-- <style>
.avatar {
    width: 40px !important;
}
</style> -->
