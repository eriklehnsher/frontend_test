<template>
  <div class="carspec container">
    <h1
      style="color: #6e6e6e"
      class="homepage__tutorials--title d-flex mt-80px mb-10px"
    >
      MỘT SỐ XE NỔI BẬT
    </h1>
    <carousel-3d
      :disable3d="true"
      :space="310"
      :clickable="true"
      :controls-visible="true"
      :autoplay="false"
      :autoplay-timeout="3000"
      :height="370"
      :width="300"
    >
      <slide :index="0">
        <div class="carspec--car">
          <img src="../../assets/jpg/SpecCar/car1.jpg" class="img" />
          <p class="carspec__price">900k</p>
          <h1 class="carspec__name">VinFast Lux A2.0</h1>
          <div class="d-flex justify-content-start">
            <p class="carspec__engines">Động Cơ Xăng</p>
            <p class="carspec__engines">Xe Tự lái</p>
          </div>

          <div class="d-flex">
            <i class="fa-solid fa-location-dot"></i>
            <p class="carspec__loca">Hai Bà Trưng, Hà Nội.</p>
          </div>

          <input
            type="button"
            class="listcar__input--button"
            @click="CarDetail()"
            value="Xem Chi Tiết"
          />
        </div>
      </slide>
      <slide :index="1">
       <div class="carspec--car">
          <img src="../../assets/jpg/SpecCar/car2.jpg" class="img" />
          <p class="carspec__price">900k</p>
          <h1 class="carspec__name">VinFast Lux A2.0</h1>
          <div class="d-flex justify-content-start">
            <p class="carspec__engines">Động Cơ Xăng</p>
            <p class="carspec__engines">Xe Tự lái</p>
          </div>

          <div class="d-flex">
            <i class="fa-solid fa-location-dot"></i>
            <p class="carspec__loca">Tây Hồ, Hà Nội.</p>
          </div>

          <input
            type="button"
            class="listcar__input--button"
            @click="CarDetail()"
            value="Xem Chi Tiết"
          />
        </div>
      </slide>
      <slide :index="2">
       <div class="carspec--car">
          <img src="../../assets/jpg/SpecCar/car3.jpg" class="img" />
          <p class="carspec__price">900k</p>
          <h1 class="carspec__name">VinFast Lux A2.0</h1>
          <div class="d-flex justify-content-start">
            <p class="carspec__engines">Động Cơ Xăng</p>
            <p class="carspec__engines">Xe Tự lái</p>
          </div>

          <div class="d-flex">
            <i class="fa-solid fa-location-dot"></i>
            <p class="carspec__loca">Ba Đình, Hà Nội.</p>
          </div>

          <input
            type="button"
            class="listcar__input--button"
            @click="CarDetail()"
            value="Xem Chi Tiết"
          />
        </div>
      </slide>
      <slide :index="3">
        <div class="carspec--car">
          <img src="../../assets/jpg/SpecCar/car4.jpg" class="img" />
          <p class="carspec__price">900k</p>
          <h1 class="carspec__name">VinFast Lux A2.0</h1>
          <div class="d-flex justify-content-start">
            <p class="carspec__engines">Động Cơ Xăng</p>
            <p class="carspec__engines">Xe Tự lái</p>
          </div>

          <div class="d-flex">
            <i class="fa-solid fa-location-dot"></i>
            <p class="carspec__loca">Hoàn Kiếm, Hà Nội.</p>
          </div>

          <input
            type="button"
            class="listcar__input--button"
            @click="CarDetail()"
            value="Xem Chi Tiết"
          />
        </div>
      </slide>
      <slide :index="4">
        <div class="carspec--car">
          <img src="../../assets/jpg/SpecCar/car5.jpg" class="img" />
          <p class="carspec__price">900k</p>
          <h1 class="carspec__name">VinFast Lux A2.0</h1>
          <div class="d-flex justify-content-start">
            <p class="carspec__engines">Động Cơ Xăng</p>
            <p class="carspec__engines">Xe Tự lái</p>
          </div>

          <div class="d-flex">
            <i class="fa-solid fa-location-dot"></i>
            <p class="carspec__loca">Hà Đông, Hà Nội.</p>
          </div>

          <input
            type="button"
            class="listcar__input--button"
            @click="CarDetail()"
            value="Xem Chi Tiết"
          />
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide,
  },
};
</script>
<style lang="scss" scoped>
.carousel-3d-container {
  background-color: white;
  .carousel-3d-slide {
    background-color: white;
    height: 330px;
    padding: 5px;
  }
}
.next {
  font-size: 40px;
  span {
    font-size: 40px;
  }
}
.img {
  width: 100%;
  height: 200px;
}
.carspec--car {
  .carspec__price {
    color: white;
    background-color:rgb(29, 158, 29);
    border-radius: 2px;
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    width: 30%;
    position: relative;
    bottom: 24px;
    left: 202px;
  }
  .carspec__name{
    margin-left: 5px;
  }
  .carspec__loca {
    color: #584e4e;
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0px 0px 5px;
  }
  .carspec__engines {
    color: #6e6e6e;
    background-color: #e8eaef;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 700;
    text-align: center;
    width: 45%;
    margin: 5px 6px 5px 0px;
  }

  p {
    margin-bottom: 0px;
  }
}
i {
  margin-top: 3px;
  line-height: 1;
  margin-right: 3px;
  margin-left: 0px;
}
.listcar__input--button{
    width: 100%;
}
</style>