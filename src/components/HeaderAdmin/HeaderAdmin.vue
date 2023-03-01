<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMoneyBill,
  faCreditCard,
  faPrint,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMoneyBill, faCreditCard, faPrint, faUser, faGear);
</script>
<template>
  <header>
    <div>
      <div
        class="pre-nav row text-center pre-nav m-0"
        style="padding-top: 15px"
      >
        <div class="col-3"></div>
        <p class="col-6 row"></p>
        <div class="row col-3 d-flex justify-content-end pe-5 pt-6">
          <div class="col">
            <!-- <div class=" justify-content-end">

                            <router-link class="nav-link text-dark fw-bold d-flex justify-content-end" :to="{ name: 'Login' }">Đăng nhập</router-link>

                        </div> -->
            <div class="col">
              <div class="dropdown">
                <a
                  class="text-danger fw-bolder dropdown-toggle"
                  style="text-decoration: none"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nguyễn Thị Huế Minh
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li class="py-0">
                    <a class="dropdown-item  " href="#">
                      <font-awesome-icon icon="fa-solid fa-user" /> Thông tin
                    </a>
                  </li>
                  <li class="py-0">
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon icon="fa-solid fa-user " /> Thông tin</a
                    >
                  </li>
                  <hr />
                  <li class="py-0">
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon icon="fa-solid fa-gear" />Cài đặt</a
                    >
                  </li>
                </ul>
              </div>
              <!-- <div class="dropdown">
                <p
                  class="text-danger dropdown-toggle fw-bolder"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nguyễn Thị Huế Minh
                </p>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon icon="fa-solid fa-user" /> Thông tin
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon icon="fa-solid fa-user" /> Thông tin</a
                    >
                  </li>

                  <hr />
                  <li>
                    <a class="dropdown-item" href="#">
                      <font-awesome-icon icon="fa-solid fa-gear" />Cài đặt</a
                    >
                  </li>
                </ul>
              </div> -->
            </div>
          </div>
          <div>
            <div class="row">
              <a class="user-icon"><i class="fas fa-user text-dark"></i></a>
              <span class=""
                ><a
                  ><i
                    class="fa-solid fa-right-from-bracket text-danger"
                    style="cursor: pointer"
                  ></i></a
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="navbar shadow navbar-expand-lg navbar-dark row"
      aria-label="Eighth navbar example"
    ></div>
  </header>
</template>
