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
  <HeaderPublic />
  <div class="container">
    <div>
      <div class="row">
        <div class="col-6 p-5 frame-image">
          <img
            src="../../assets/images/service-health.jpg"
            class="img-fluid"
            alt=""
          />
        </div>

        <div class="col-6">
          <div class="row justify-content-center border-dark">
            <div class="rounded frame-login col-9">
              <h2 class="text-center login-title">Đăng ký</h2>
              <div class="justify-content-center">
                <div class="form-group">
                  <label for="mssv " class="">Tên Tài khoản:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="mssv "
                    placeholder="Nhập vào tên tài khoản "
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email " class="">Địa chỉ email:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="mssv "
                    placeholder="Nhập vào địa chỉ email "
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="pwd">Mật khẩu:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    placeholder="Nhập vào mật khẩu!"
                  />
                </div>
                <p class="text-danger">
                  Tên tài khoản hoặc mật khẩu không đúng
                </p>
                <div class="checkbox">
                  <label
                    ><input type="checkbox" class="fw-bolder remember" /> Nhớ
                    tài khoản này</label
                  >
                </div>
                <div>
                  <button
                    class="btn btn-primary text-light btn-submit border border-white"
                  >
                    Đăng ký
                  </button>
                </div>

                <div>
                  <router-link
                    class="nav-link text-dark pb-2"
                    :to="{ name: 'Login' }"
                  >
                    <span class="account text-dark fw-bold">
                      Đã có tài khoản?
                    </span>
                  </router-link>
                </div>
                <!--                    
                        <button @click="login(this.taikhoan)"
                        class="btn btn-primary text-light  btn-submit border border-white ">Đăng
                        nhập</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PublicFooters/>
</template>

<style scoped>
body {
  font-family: "Poppings", sans-serif !important;
}

label {
  font-weight: 700;
  font-size: larger;
  font-family: serif;
}

h2 {
  font-weight: 700;
  font-family: serif;
}

.btn-submit {
  margin: 5% 10%;
}

.btn-submit:hover {
  background-color: rgb(116, 171, 235);
}

.btn-submit:active {
  background-color: rgb(47, 125, 214);
}

.container-form {
  padding: 3% 5% 3% 5%;
  background-color: #f2f2f2;
}

.container {
  padding-top: 5%;
  padding-bottom: 3%;
}

.login-title {
  padding-top: 5%;
}

.form-group {
  margin-top: 20px;
}
.account {
  text-decoration: underline;
}
.remember {
  margin-top: 20px;
}
</style>
