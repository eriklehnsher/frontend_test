<template>
  <div>
    <p class="mb-0 pointer login__title" @click="$bvModal.show('modal-login')">
      Đăng Nhập
    </p>
    <b-modal id="modal-login" class="modal" hide-footer hide-header>
      <p class="modal__title text-center">Đăng nhập</p>
      <!-- Form -->
      <div class="text-center login__form d-flex flex-column justify">
        <div
          class="login__form--email d-flex-8px flex-column align-items-start mb-3"
        >
          <div class="label d-flex">
            <i class="fa-solid fa-envelope"></i>
            <p class="">Email</p>
          </div>
          <b-input
            class="login-form__input"
            placeholder="Nhập địa Email"
            v-model="formLogin.email"
          />
        </div>

        <div class="d-flex-8px flex-column align-items-start">
          <div class="label d-flex">
            <i class="fa-solid fa-lock"></i>
            <p>Mật Khẩu</p>
          </div>
          <b-input
            type="password"
            class="login-form__input"
            placeholder="   Mật khẩu"
            v-model="formLogin.password"
          />
        </div>
      </div>
      <div class="login-form__aside">
        <p class="login-form__policy-text">
          Bạn chưa là thành viên?
          <a href="" class="login-form__policy-link">Hãy đăng ký ngay!</a>
        </p>
      </div>
      <input type="button" class="login-form__input--button" @click="submitLogin()" value="Đăng Nhập" />
      <!-- <p class="login-form-text__socials">Hoặc đăng nhập bằng tài khoản</p>
      <div class="login-form__socials">
        <a href="" class="btn btn--with-icon-fb">
          <i class="fa-brands fa-facebook-square"></i>
          Facebook
        </a>
        <a href="" class="btn btn--with-icon-gg">
          <i class="fa-brands fa-google"></i>
          Google
        </a>
      </div> -->
    </b-modal>
  </div>
</template>
<script>
import { AUTH_REQUEST } from "../../store/constants";

export default {
  props: ["isLogin"],
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submitLogin() {
      const data = {
        email: this.formLogin.email,
        password: this.formLogin.password,
    
      };
      this.$store
        .dispatch(AUTH_REQUEST, { data: data })
        .then((res) => {
          this.$emit("login", this.isLogin);
          this.$bvModal.hide("modal-login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
</style>
