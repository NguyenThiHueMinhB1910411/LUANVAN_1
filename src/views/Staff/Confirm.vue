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
    <div class="text-center">
      <p class="pt-3" style="font-size: 35px; font-weight: 400">
        Yêu cầu cần xác nhận
      </p>
    </div>
    <div class="row">
      <table
        class="table table-hover text-center table-bordered table table-bordered"
        style="font-size: 15px"
      >
        <thead class="">
          <tr class="text-danger">
           <th>STT</th>
           <th>Tên Khách hàng</th>
           <th>Email</th>
           <th>Thời gian gửi</th>
           <th>Thời gian đăng ký</th>
           <th>Xác nhận</th>
          </tr>
        </thead>
        <tbody class="text-left">
          <tr>
            <td>01</td>
            <td>Nguyễn Thị Huế Minh</td>
            <td>minh@gmail.com</td>
            <td>12:00 6/2/2023</td>
            <td>11h:00 10/4/2023</td>
            <td>
              <button class="btn btn-success text-light">
                Xác nhận
              </button>
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>Nguyễn Thị Huế Minh</td>
            <td>minh@gmail.com</td>
            <td>12:00 6/2/2023</td>
            <td>11h:00 10/4/2023</td>
            <td>
              <button class="btn btn-success text-light">
                Xác nhận
              </button>
            </td>
          </tr>
          <tr>
            <td>01</td>
            <td>Nguyễn Thị Huế Minh</td>
            <td>minh@gmail.com</td>
            <td>12:00 6/2/2023</td>
            <td>11h:00 10/4/2023</td>
            <td>
              <button class="btn btn-success text-light">
                Xác nhận
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    
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
