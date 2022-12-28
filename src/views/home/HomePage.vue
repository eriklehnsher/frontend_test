<template>
  <div class="homepage">
    <div class="homepage__booking">
      <h1 class="homepage__booking__slogan mt-80px">
        HaNoi CAR - CÙNG BẠN TRÊN MỌI NẺO ĐƯỜNG
      </h1>
      <Form class="homepage__booking--form"></Form>
    </div>

    <div class="container">
      <div class="homepage__features">
        <h3
          style="color: #6e6e6e"
          class="homepage__features__title d-flex mt-80px mb-0px"
        >
          <h1 class="">TÍNH NĂNG NỔI BẬT</h1>
        </h3>

        <carousel-3d
          :autoplay="true"
          :autoplay-timeout="3000"
          :controls-visible="true"
          :controls-prev-html="'&#x2039;'"
          :controls-next-html="'&#x203A;'"
          :controls-width="10"
          :controls-height="30"
          :clickable="false"
        >
          <slide :index="0">
            <img src="../../assets/jpg/thu-tuc/step-1.jpg" class="img" />
          </slide>
          <slide :index="1">
            <img src="../../assets/jpg/thu-tuc/step-2.jpg" class="img" />
          </slide>
          <slide :index="2">
            <img src="../../assets/jpg/thu-tuc/step-3.jpg" class="img" />
          </slide>
          <slide :index="3">
            <img src="../../assets/jpg/thu-tuc/step-4.jpg" class="img" />
          </slide>
          <slide :index="4">
            <img src="../../assets/jpg/thu-tuc/step-5.jpg" class="img" />
          </slide>
          <slide :index="5">
            <img src="../../assets/jpg/thu-tuc/step-6.jpg" class="img" />
          </slide>
        </carousel-3d>
      </div>

      <h1
        
        class="homepage__tutorials--title d-flex mt-80px mb-10px"
      >
        HƯỚNG DẪN THUÊ XE
      </h1>
      <div class="homepage__tutorials__body d-flex justify-content-around">
        <div class="homepage__tutorials__body--img text-center">
          <img src="../../assets/huong-dan/step-1.svg" />
          <p>Đặt xe với Hanoi Car</p>
        </div>
        <div class="homepage__tutorials__body--img text-center">
          <img src="../../assets/huong-dan/step-2.svg" />
          <p>Nhận hoặc giao xe tận nơi</p>
        </div>
        <div class="homepage__tutorials__body--img text-center">
          <img src="../../assets/huong-dan/step-3.svg" />
          <p>Trải nghiệm chuyến đi</p>
        </div>
        <div class="homepage__tutorials__body--img text-center">
          <img src="../../assets/huong-dan/step-4.svg" />
          <p>Kết thúc giao dịch</p>
        </div>
      </div>
      <div class="tutorials_link">
        <router-link
          tag="a"
          to="/tutorials"
          class="text-header"
          style="text-decoration: none; color: green; font-weight: 800"
        >
          <p class="text-end mb-5">Xem thêm ></p>
        </router-link>
      </div>
    </div>

    <listSpecCar></listSpecCar>
    <vendor></vendor>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import vendor from "./Vendor.vue";
import Form from "./Form.vue";
import ListSpecCar from "@/views/home/ListSpecCar";
export default {
  components: {
    Carousel3d,
    Slide,
    vendor,
    Form,
    ListSpecCar,
  },
};
</script>


