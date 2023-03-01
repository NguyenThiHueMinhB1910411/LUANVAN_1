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
<main class="container-fluid">
    <!--  ABOUT US -->
    <div class="container">
        <div class="row py-5">
            <div class="col-6 title">CONTACT</div>
            <div class="col-6">
                <img src="../../assets/images/cat-about.webp " class="img-fluid w-100" alt="" />
            </div>
        </div>
    </div>
    <div></div>
    <hr />

    <div class="p-2">
        <div class="row p-4">
            <div class="col-6 contact-content ">
                <h5 class="py-2 text-light">LIÊN HỆ CHÚNG TÔI</h5>
                <div class="text-light">
                    Chúng tôi tự hào có cơ hội làm việc cùng với những khách hàng tuyệt
                    vời của chúng tôi (và chủ sở hữu của họ!) để tiếp tục hỗ trợ cuộc
                    sống lâu dài, năng động và khỏe mạnh!
                </div>
            </div>
            <!-- form contact -->
            <div class="col-6 px-3">
                <div class="">
                    <form class=" p-5 border border-dark frame-contact">
                        <div class="mb-3">
                            <input type="email" class="form-control  bg-light" id="exampleInputEmail1" aria-describedby="" placeholder="NAME*" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control  bg-light" id="exampleInputEmail1" aria-describedby="" placeholder="EMAIL*" />
                        </div>
                        <div class="mb-3">
                            <input type="tel" id="phone" name="phone" placeholder="PHONE*" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
                            <!-- <input type="phone" class="form-controlbg-light" id="exampleInputEmail1" aria-describedby="" placeholder="PHONE*" /> -->
                        </div>

                        <div class="mb-3">
                            <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="MESSAGE...">
</textarea>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn text-light button-submit  px-4">Submit</button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
    <hr>
    <div class="py-4 px-5">
        <h4 class=" text-center pb-5" style="font-size: 2rem; ">Personalized Pet Health Care. Made for Real Life</h4>
        <div class="row">
            <div class="col-3 px-5 text-center">
                <div>
                    <img src="../../assets/images/health-icon-1.png" alt="" class="img-fluid">
                </div>
                <h4 class="py-2">Unlimited Exam</h4>
                <p>
                    Visit us for as many exams as you need to keep your pet happy and healthy.
                </p>
            </div>
            <div class="col-3 px-5 text-center">
                <div>
                    <img src="../../assets/images/health-icon-2.png" alt="" class="img-fluid">
                </div>
                <h4>Doctor Recommended Vaccine</h4>
                <p>Prevent contagious and
                    potentially deadly diseases
                    with the essential vaccines
                    your pet needs to thrive.</p>
            </div>
            <div class="col-3 px-5 text-center">
                <div>
                    <img src="../../assets/images/health-icon-3.png" alt="" class="img-fluid">
                </div>
                <h4>Microchipping and Annual Membership</h4>
                <p>Rest easy knowing you have
                    the best chance of finding
                    your pet if they ever get lost.</p>
            </div>
            <div class="col-3 px-5 text-center">
                <div>
                    <img src="../../assets/images/health-icon-4.png" alt="" class="img-fluid">
                </div>
                <h4>Early Disease Detection and Diagnostic Testing</h4>
                <p>Detect problems like diabetes
                    or intestinal worms sooner with
                    routine testing tailored to your
                    pet's age.</p>
            </div>
        </div>
    </div>

    <!-- <div class="py-2">
        <h3 class="text-center"><b>Chi nhánh</b></h3>
        <div class="row ml-4 mr-4 pb-4">
            <div class="col-4 text-right branch-position">Cần Thơ</div>
            <div class="col-4 text-center branch-position">Hồ Chí Minh</div>
            <div class="col-4 text-left branch-position">Vĩnh Long</div>
        </div>
        <hr />
    </div> -->
</main>
<PublicFooters/>

</template>

<style>
@import'./Contact.module.css';
</style>