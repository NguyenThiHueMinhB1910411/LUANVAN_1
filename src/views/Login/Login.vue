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
              <h2 class="text-center login-title">Đăng nhập</h2>
              <div class="justify-content-center">
                <div class="form-group mt-1 mb-3">
                  <label for="mssv " class="">Tên Tài khoản:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="mssv "
                    placeholder="Nhập vào tên tài khoản "
                    required
                  />
                </div>
                <div class="form-group mt-1 mb-3">
                  <label for="pwd">Mật khẩu:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="pwd"
                    placeholder="Nhập vào mật khẩu!"
                  />
                </div>
                <!-- <p v-if="error" class="text-danger">
                  Tên tài khoản hoặc mật khẩu không đúng
                </p> -->
                <div class="checkbox mt-3">
                  <label
                    ><input type="checkbox" class="fw-bolder" /> Nhớ tài khoản
                    này</label
                  >
                </div>
                <button
                  class="btn btn-primary text-light btn-submit border border-white"
                >
                  Đăng nhập
                </button>

                <div>
                  <router-link
                    class="nav-link text-dark mb-2 pb-2 highli"
                    :to="{ name: 'Register' }"
                  >
                    <span class="account text-dark fw-bold">
                      Chưa có tài khoản?
                    </span>
                  </router-link>
                </div>
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
</style>
