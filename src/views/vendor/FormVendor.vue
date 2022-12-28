<template>
  <div class="vendor__owner-form">
    <h2>ĐĂNG KÝ XE CHO THUÊ</h2>
    <P
      >Bạn vui lòng điền đầy đủ thông tin, Mioto sẽ liên hệ với bạn trong vòng 1
      ngày làm việc.</P
    >
    <div class="vendor__owner-formReg">
      <div class="d-flex flex-wrap">
        <b-input
          type="text"
          class="register-form__input register-form__input-loca"
          placeholder="Khu vực cho thuê*"
          v-model="formVendor.location"
        />
        <b-input
          type="text"
          class="register-form__input register-form__input-name"
          placeholder="Tên chủ xe*"
          v-model="formVendor.username"
        />
        <b-input
          type="number"
          class="register-form__input register-form__input-phone"
          placeholder="Số di động*"
          v-model="formVendor.phone"
        />
        <b-input
          type="text"
          class="register-form__input register-form__input-car"
          placeholder="Xe cho thuê"
          v-model="formVendor.carName"
        />
      </div>
      <b-button
        class="btn btn--m btn-success vendor__button"
        @click="submitVendor()"
        >GỬI THÔNG TIN ĐẾN HANOI-CAR</b-button
      >
    </div>
  </div>
</template>

<script>
import axiosIns from "@/libs/axiosConfig";

export default {
  //   props: ["isLogin"],
  data() {
    return {
      formVendor: {
        username: "",
        email: "",
        password: "",
        password_confirm: "",
        location: "",
        phone: "",
        carName: "",
        role: "",
        vendor_state: "",
      },
    };
  },
  methods: {
    submitVendor() {
      const data = {
        username: this.formVendor.username,
        location: this.formVendor.location,
        phone: this.formVendor.phone,
        carName: this.formVendor.carName,
        email: "",
        password: "",
        password_confirm: "",
        role: "",
        vendor_state: "",
      };
      axiosIns
        .post("/vendor/register", this.formVendor)
        .then((response) => {
          console.log(this.formVendor);
        })
        .catch(() => {
          console.log("error");
        });
    },
  },
};
</script>

<style>
</style>