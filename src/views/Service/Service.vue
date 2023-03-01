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

<main class="" style="padding-bottom: 100px;">
    <p class="title text-center mt-0 w-100" style="background-color: black; font-size: 40px">
        Dịch vụ
    </p>
    <div>
        <div class="hotel-room row px-5 " style="padding-top:100px;">
            <!-- <div class="col-6  pt-5 px- pb-5">
                <h4 class="text-uppercase " style="font-size: 35px;">Nội trú</h4>
                <div class="pb-4">
                    Trong khi thú cưng của bạn ở với chúng tôi, chúng tôi sẽ làm mọi thứ
                    có thể để mang đến cho chúng một chuyến thăm thú vị. Nếu bạn lo lắng
                    về việc để lại thú cưng của mình, vui lòng sắp xếp thời gian đến
                    bệnh viện của chúng tôi và xem xét cơ sở nội trú của chúng tôi.
                    Chúng tôi sẽ sẵn lòng thảo luận về các chính sách nội trú của chúng
                    tôi và trả lời bất kỳ câu hỏi nào mà bạn có thể có.
                </div>
                <router-link :to="{name: 'HotelRoom'}" class="text-dark bg-ligh border px-5 py-2 border border-dark bg-light " style="text-decoration: none; font-size: 22px; font-weight: 600;">Xem chi tiết</router-link>
            </div> -->
            <div class="col-6  pt-5 px-5">
                <h4 class="text-uppercase " style="font-size: 35px;">Nội trú</h4>
                <div class="pb-4">
                    Trong khi thú cưng của bạn ở với chúng tôi, chúng tôi sẽ làm mọi thứ
                    có thể để mang đến cho chúng một chuyến thăm thú vị. Nếu bạn lo lắng
                    về việc để lại thú cưng của mình, vui lòng sắp xếp thời gian đến
                    bệnh viện của chúng tôi và xem xét cơ sở nội trú của chúng tôi.
                    Chúng tôi sẽ sẵn lòng thảo luận về các chính sách nội trú của chúng
                    tôi và trả lời bất kỳ câu hỏi nào mà bạn có thể có.
                </div>
                <!-- <div class="text-dark bg-light px-2 border border-dark"> Xem thêm</div> -->
                <router-link :to="{name: 'HotelRoom'}" class="text-dark bg-ligh border px-5 py-2 border border-dark bg-light " style="text-decoration: none; font-size: 22px; font-weight: 600;">Xem chi tiết</router-link>
            </div>
            <div class="col-6 p-2 border border-dark">
                <img src="../../assets/images/service-hotelroom.jpg" class="img-fluid" alt="">
            </div>
        </div>
    </div>

    <div>
        <div class="hotel-room row px-5 pb-4" style="padding-top:100px; background-color: #eeeeee;">

            <div class="col-6 p-2 border border-dark">
                <img src="../../assets/images/service-sparoom.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-6  pt-5 px-5">
                <h4 class="text-uppercase " style="font-size: 35px;">Làm đẹp</h4>
                <div class="pb-4">
                    Những người chăm sóc lông được chứng nhận của chúng tôi đã quen với việc làm việc với nhiều giống và loài khác nhau. Trong khi chải lông cho thú cưng của bạn, chúng tôi luôn nỗ lực hết mình. Chúng tôi có thể đảm bảo rằng người bạn lông lá của bạn sẽ cực kỳ sạch sẽ!
                </div>
                <!-- <div class="text-dark bg-light px-2 border border-dark"> Xem thêm</div> -->
                <router-link :to="{name: 'SpaRoom'}" class="text-dark bg-ligh border px-5 py-2 border border-dark bg-light " style="text-decoration: none; font-size: 22px; font-weight: 600;">Xem chi tiết</router-link>
            </div>
        </div>
    </div>
    <div>
        <div class="hotel-room row px-5 " style="padding-top:100px;">
            <div class="col-6  pt-5 px-5">
                <h4 class="text-uppercase " style="font-size: 35px;">Khám bệnh</h4>
                <div class="pb-4">
                    Chúng tôi có các công cụ chẩn đoán hiện đại cho phép nhân viên của chúng tôi chẩn đoán tình trạng hoặc bệnh tật của thú cưng của bạn tốt hơn. Chúng tôi cam kết luôn đi đầu trong công nghệ chẩn đoán.

Việc có các công cụ chẩn đoán tiên tiến này cho phép chúng tôi kiểm tra các khu vực cụ thể cẩn thận hơn và đưa ra chẩn đoán nhanh hơn và chính xác hơn. Chúng tôi sử dụng nhiều công cụ như chụp X-quang, xét nghiệm trong phòng thí nghiệm, cùng nhiều thiết bị và xét nghiệm khác.
                </div>
                <!-- <div class="text-dark bg-light px-2 border border-dark"> Xem thêm</div> -->
                <router-link :to="{name: 'PhysicalExamination'}" class="text-dark bg-ligh border px-5 py-2 border border-dark bg-light " style="text-decoration: none; font-size: 22px; font-weight: 600;">Xem chi tiết</router-link>
            </div>


            <div class="col-6 p-2 border border-dark">
                <img src="../../assets/images/service-physicalExamination.jpg" class="img-fluid" alt="">
            </div>
        </div>
    </div>


    <!-- <div class="">
        <div class="row text-center all-services">
            <div class="col rounded border border-dark container-icon col bg-cat_health_service kind-service">
                <p class="icon-highligh">
                    <i class="fa-solid fa-syringe icon-click"></i>
                </p>

                <h4><b>Physical examination</b></h4>
                <router-link class="" :to="{ name: 'PhysicalExamination' }"><img class="col-5 d-flex justify-content-center offset-4" src="../../assets/images/cat_health_service1.jpg" width="100px" alt="" /></router-link>

                <p>Click to see more details!</p>
            </div>
            <div class="col rounded border border-dark container-icon col bg-cat_shower_service kind-service">
                <p class="icon-highligh">
                    <i class="fa-solid fa-shower icon-click"></i>
                </p>

                <h4><b>Spa- grooming</b></h4>
                <router-link class="" :to="{ name: 'SpaRoom' }"><img class="col-5 d-flex justify-content-center offset-4" src="../../assets/images/cat_shower_service.jpg" width="100px" alt="" /></router-link>
                <p>Click to see more details!</p>
            </div>
            <div class="col rounded border border-dark container-icon col bg-cat-service-hotel kind-service">
                <p class="icon-highligh">
                    <i class="fa-solid fa-hotel icon-click"></i>
                </p>

                <h4><b>Hotel- service</b></h4>

                <router-link class="" :to="{ name: 'HotelRoom' }"><img class="col-5 d-flex justify-content-center offset-4 cat-service-hotel" src="../../assets/images/cat_hotel_service.jpg" width="" alt="" /></router-link>

                <p>Click to see more details!</p>
            </div>
        </div>
    </div> -->
</main>
<PublicFooters />
</template>

<style>
@import "./Service.module.css";
</style>
