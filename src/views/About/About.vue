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
<main >
    <!-- 
    <div class="w-100">
          <img  
          class="w-100 d-block"
            alt='Logo' 
            src="https://www.vippetcare.com/wp-content/uploads/2020/10/VIP_Homepage_Hero_1500w-tinypanda.jpg">
            <p class="carousel-caption caption-img">Some text here.. </p>
        </div> -->

    <!-- <div class="w-100">
          <img  
          class="w-100 d-block"
            alt='Logo' 
            src="https://www.vippetcare.com/wp-content/uploads/2020/10/VIP_Homepage_Hero_1500w-tinypanda.jpg">
            <p class="carousel-caption caption-img">Some text here.. </p>
        </div> -->

    <div class="banner">
        <div class="banner__information ">
            <h4 class="pt-5 fw-bold" style="font-size: 60px;">Dog & Cat Articles</h4>
            <h5 class="mb-4">
                Whether you have a dog, cat or both, our experts are here with all the
                information and tips you need. We use our Purina experts to cover topics
                like dog and cat health, nutrition, behavior, training and more.
            </h5>
            <button class="border bg-danger text-white  fw-600 rounded-2  w-75 py-2 px-5 text-center mt-2" style="font-size: 17px;">Read tips from our experts</button>
        </div>
    </div>

    <!--  ABOUT US -->

    <!-- <div class="container">
      <div class="row py-5">
        <div class="col-6 title">ABOUT US</div>
        <div class="col-6">
          <img
            src="../../assets/images/cat-about.webp "
            class="img-fluid w-100"
            alt=""
          />
        </div>
      </div>
    </div> -->

    <!-- about info -->

    <!-- img pet -->
    <div class=" ">
        <h4 class="fw-700 text-center pt-3" style="font-size: 40px;">Library</h4>
        <div class="pt-4 ">
            <div class="row">

                <div class="col-3 card-1 ">
                    <img src="../../assets/images/about-pet1.jpg" class="pet img-fluid image" width="100%" alt="">
                    <!-- <div class="middle">
                        <div class="text">See more</div>
                    </div> -->
                </div>
                <div class="col-3 ">
                    <img src="../../assets/images/about-pet2.jpg" class="pet img-fluid" alt="">
                </div>
                <div class="col-3 ">
                    <img src="../../assets/images/about-pet3.jpg" class="pet img-fluid" alt="">
                </div>
                <div class="col-3 ">
                    <img src="../../assets/images/about-pet2.jpg" class="pet img-fluid" alt="">
                </div>
            </div>

            <div class="row pt-4">

                <div class="col-3 ">
                    <img src="../../assets/images/about-pet1.jpg" class="pet img-fluid" alt="">
                </div>
                <div class="col-3 ">
                    <img src="../../assets/images/about-pet2.jpg" class="pet img-fluid" alt="">
                </div>
                <div class="col-3 ">
                    <img src="../../assets/images/about-pet1.jpg" class="pet img-fluid" alt="">
                </div>
                <div class="col-3 ">
                    <img src="../../assets/images/about-pet2.jpg" class="pet img-fluid" alt="">
                </div>
            </div>
        </div>

        <div class="mt-5">
            <div class="row">
                <div class="col-4 about-detail pt-4 pl-2">
                    <ul>
                        <li class="btn btn-light text-danger button-style fs-5 fw-bold">
                            V??? ch??ng t??i
                        </li>
                        <li class="detail">S??? kh??c bi???t</li>
                        <li class="detail">?????i ng??</li>
                        <li class="detail">C??c ch????ng tr??nh</li>
                    </ul>
                </div>
                <div class="col-4">
                    <h2 class="aboutus text-center pt-4 pb-2">V??? CH??NG T??I</h2>
                    <p class="text-center fw-bold mt-2" style="font-size: 22px; font-weight: bold">
                        B??C S?? ?????NG V???T QU???C T???
                    </p>
                    <div class="px-2">
                        <p class="text-dark aboutus-detail">
                            N???m ??? c??? trung t??m c???a Th??nh ph??? H??? Ch?? Minh v?? Vi??ng Ch??n,
                            VETERINARY CLINIC c??? g???ng cung c???p c??c lo???i thu???c th?? y v?? ph???u
                            thu???t t??? bi, c?? n??ng l???c v?? chuy??n nghi???p cao nh???t cho t???t c??? th??
                            c??ng ??? Vi???t Nam v?? L??o.
                        </p>
                        <p class="text-dark aboutus-detail">
                            T??? vi???c ?????m b???o t??nh nh???t qu??n trong c??c ti??u chu???n qu???c t???, t??m
                            ngu???n cung ???ng c??c ????n thu???c c???a b??c s?? chuy??n khoa t??? kh???p n??i
                            tr??n th??? gi???i v?? ??i kh???p ?????t n?????c, Nh??m c???a ch??ng t??i l??m vi???c
                            kh??ng m???t m???i ????? h??? tr??? kh??ch h??ng c???a m??nh b???ng m???i c??ch c?? th???.
                        </p>
                        <p class="text-dark aboutus-detail">
                            Ch??ng t??i t??? h??o c?? c?? h???i l??m vi???c c??ng v???i nh???ng kh??ch h??ng
                            tuy???t v???i c???a ch??ng t??i (v?? ch??? s??? h???u c???a h???!) ????? ti???p t???c h??? tr???
                            cu???c s???ng l??u d??i, n??ng ?????ng v?? kh???e m???nh!
                        </p>
                    </div>
                </div>
                <div class="col-4 m-0">
                    <img src="../../assets/images/dog-showing.jpg" class="w-100 d-block" alt="Cho" />
                </div>
            </div>
        </div>

    </div>

    <hr />

    <!-- ss -->
    <div class="col">
        <div class="ss1">
            <div class="my-5">
                <!-- <h3 class="text-center w-25 bg-dark text-white py-2 fw-bold mx-auto">
                    LI??N QUAN
                </h3> -->
                <h3 class=" relate text-center w-25 text-dark py-2 fw-bold mx-auto">
                    LI??N QUAN
                </h3>
            </div>

            <div class="d-flex justify-content-around px-5 pb-5">
                <div class="col-4">
                    <div class="card m-auto border" style="width: 19rem">
                        <!-- <img src="../../assets/images/dog-fever.jpg" width="100%" class="img-fluid w-100 d-block align-item-center" alt="" /> -->
                        <img src="../../assets/images/card-2.jpg" width="100%" class="img-fluid w-100 d-block align-item-center" alt="" />
                        <div class="card-body bg-white" style="height: 200px">
                            <div class="card-text">
                                <router-link :to="{ name: 'FeverInDog' }" class="sick-title">
                                    B???NH S???T ??? CH?? ?
                                </router-link>
                                <p class="sick-content">
                                    S???t ??? ch?? l?? t??nh tr???ng m?? r???t nhi???u ng?????i g???p khi nu??i ch??.
                                    C?? r???t nhi???u nguy??n nh??n [...]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4" style="height: 200px">
                    <div class="card m-auto" style="width: 19rem">
                        <img src="../../assets/images/card-1.jpg" width="100%" class="img-fluid w-100 d-block align-item-center" alt="" />
                        <div class="card-body bg-white" style="height: 200px">
                            <div class="card-text">
                                <router-link :to="{ name: 'StressCat' }" class="sick-title">GI???M C??NG TH???NG CHO M??O ?</router-link>
                                <p class="sick-content">
                                    M???t s??? l???i khuy??n h???u ??ch gi??p l??m gi???m c??ng th???ng khi ?????n
                                    [...]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-4" style="height: 200px">
                    <div class="card m-auto" style="width: 19rem">
                        <img src="../../assets/images/card-3.jpg" width="100%" class="img-fluid w-100 d-block align-item-center" alt="" />
                        <div class="card-body bg-white" style="height: 200px">
                            <div class="card-text">
                                <router-link :to="{ name: 'StressCat' }" class="sick-title">GI???M C??NG TH???NG CHO M??O ?</router-link>
                                <p class="sick-content">
                                    M???t s??? l???i khuy??n h???u ??ch gi??p l??m gi???m c??ng th???ng khi ?????n
                                    [...]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    </div>
    <hr />
    
</main>
<PublicFooters/>

</template>

<style>
@import "./About.module.css";
</style>
