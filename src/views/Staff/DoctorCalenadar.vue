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
        <div class="pt-5">
          <button class="bg bg-primary px-3 py-1 "   style="text-decoration: none; border: 1px solid  white ; border-radius: 10px;">
            <router-link :to="{ name: 'ListDoctors' }" class="text-light"  style="text-decoration: none;">
            Thêm lịch</router-link
          ></button>
          

          <!-- <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Thêm lịch
          </button> -->

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
           
          </div>

          <div class="pt-2">
            <div class="row">
              <table
                class="table table-hover text-center table-bordered table table-bordered"
                style="font-size: 15px"
              >
                <thead class="">
                  <tr class="text-danger">
                    <th>Mã bác sĩ</th>
                    <th>Tên Bác sĩ</th>
                    <th>Ảnh</th>
                 
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
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        style="width: 40px !important"
                        class="avatar"
                        alt=""
                      />
                    </td>
                    <td>Tiêm phòng</td>
                    <td>Mèo</td>
                    <td>
                      <button class="btn btn-primary text-light">
                        Chi tiết lịch khám
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
  </main>
</template>

<!-- 
<style scoped>
</style>
<style>
 < !-- .avatar {
     width: 40px !important;
 }
</style> -->
