<template>
  <div class="register">
    <b-button
      class="mb-0 btn register__modal-title"
      @click="$bvModal.show('modal-register')"
    >
      Đăng ký
    </b-button>
    <b-modal
      id="modal-register"
      class="register__modal-body"
      hide-footer
      hide-header
      size="lg"
    >
      <h1 class="text-center">Đăng ký</h1>
      <!-- Form -->
      <div class="register__form mt-4">
        <div class="d-flex-8px justify-content-center mb-4">
          <span class="register__form--title-input"> Email </span>
          <b-input
            type="text"
            class="register-form__input"
            placeholder="Nhập địa Email"
            v-model="formRegister.email"
          />
        </div>
        <div class="d-flex-8px justify-content-center mb-4">
          <span class="register__form--title-input"> Name </span>
          <b-input
            type="text"
            class="register-form__input"
            placeholder="Nhập tên"
            v-model="formRegister.name"
          />
        </div>

        <div class="d-flex-8px justify-content-center mb-4">
          <span class="register__form--title-input"> Password </span>
          <b-input
            type="password"
            class="register-form__input"
            placeholder="Mật khẩu"
            v-model="formRegister.password"
          />
        </div>

        <div class="d-flex-8px justify-content-center mb-4">
          <span class="register__form--title-input"> Password Confirm </span>
          <b-input
            type="password"
            class="register-form__input"
            placeholder="Nhập lại mật khẩu"
            v-model="formRegister.password_confirm"
          />
        </div>
      </div>
      <div class="text-center">
        <b-button variant="success" @click="submitRegister()"
          >Register</b-button
        >
      </div>
    </b-modal>
  </div>
</template>
<script>
import axiosConfig from "../../libs/axiosConfig";
import { AUTH_REQUEST } from "../../store/constants";

export default {
  props: ["isLogin"],
  data() {
    return {
      formRegister: {
        email: "",
        name: "",
        password: "",
        password_confirm: "",
        location: "",
        phone: "",
        carName: "",
      },
    };
  },
  methods: {
    async submitRegister() {
      const data = {
        username: this.formRegister.name,
        email: this.formRegister.email,
        password: this.formRegister.password,
        password_confirm: this.formRegister.password_confirm,
        location: "",
        phone: "",
        carName: "",
        role: "",
        vendor_state: "",
      };
      await axiosConfig
        .post("/user/register", data)
        .then((response) => {
          let dataLogin = {
            email: this.formRegister.email,
            password: this.formRegister.password,

          };
          this.$store
            .dispatch(AUTH_REQUEST, { data: dataLogin })
            .then((res) => {
              console.log(res);
              this.$emit("login", this.isLogin);
            })
            .catch((err) => {
              console.log(err);
            });
          this.$bvModal.hide("modal-register");
        })
        .catch((err) => {
          console.log("err:::::::", err);
        });
    },
  },
};
</script>
<style>
</style>
