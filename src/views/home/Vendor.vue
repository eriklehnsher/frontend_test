<template>
  <div class="vendor">
    <div class="vendor-text ">
      <h1 class="text-white text__header mb-20px">Bạn muốn cho thuê xe</h1>
      <p class="text-white text__title mb-20px">
        Trở thành đối tác của chúng tôi để có cơ hội <br />kiếm thêm thu nhập hàng
        tháng.
      </p>
      <div class="two-button">
        <b-button class="button1">
          <p>TÌM HIỂU NGAY</p>
        </b-button>
        <div class="car__register">
          <router-link tag="a" to="/vendor" class="">
            <b-button class="button2" variant="success">
              <p>ĐĂNG KÝ XE</p>
            </b-button>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.vendor {
  background-image: url("../../assets/jpg/coverCarRegister1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 500px;
  position: relative;
  display: flex;

  .vendor-text {
    margin-top: 160px;
    margin-left: 50px;
    

    .two-button {
      display: flex;

      p {
        font-size: 15px;
        font-weight: 700;
        text-align: center;
        line-height: 27px;

      }

      .button1 {
        background-color: rgba(0, 0, 0, 0);
        height: 40px;
        width: 38%;
        border: 2px solid white;
        border-radius: 4px;
        margin-right: 5px;
      }

      .button2 {
        height: 40px;
        border-radius: 4px;
        margin-left: 5px;
      }
    }
  }
}

.text__header {
  font-size: 35px;
  font-weight: 700;
  font-family: inherit;

}

.text__title {
  font-weight: 500;
  font-family: inherit;
 
}
</style>
