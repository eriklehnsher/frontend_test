<template>
	<div class="header d-flex justify-content-between align-items-center">
		<div>
			<img src="../assets/svg/left-header.svg" />
		</div>
		<div class="header__logo mr-300px">
			<router-link to="/" class="header__logo--text"> HaNoi Car </router-link>
		</div>
		<div class="d-flex justify-content-between align-items-center">
			<div class="header__info d-flex justify-content-between">
				<div class="header__info--phone mr-20px d-flex justify-content-between align-items-center">
					<i class="fa-solid fa-phone"></i>
					<p class="mb-0px">19001733</p>
				</div>
				<div class="header__info--email mr-20px d-flex justify-content-between align-items-center">
					<i class="fa-solid fa-envelope"></i>
					<p class="">hanoicar247@gmail.com</p>
				</div>
			</div>

			<div
				class="
					header__tutorials
					d-flex
					justify-content-between
					align-items-center
				"
			>
				<div class="">
					<i class="fa-solid fa-circle-exclamation"></i>
					<router-link to="/tutorials" class=""> Hướng Dẫn </router-link>
				</div>
			</div>
			<div
				class="
					header__tutorials
					d-flex
					justify-content-between
					align-items-center
				"
			>
				<div class="">
					<i class="fa-solid fa-steering-wheel"></i>
					<router-link to="/vendor" class=""> Trở thành chủ xe </router-link>
				</div>
			</div>

			<div
				class="d-flex justify-content-between align-items-center ml-40px"
				v-if="!isLogin"
			>
				<Login :isLogin="isLogin" class="mr-40px" @login="loggedIn()"></Login>
				<Register
					class=""
					:isLogin="isLogin"
					@login="loggedIn()"
				></Register>
			</div>
			<div class="header__portfolio d-flex align-items-center" v-else>
				<i class="fa-solid fa-user"></i>
				<p class="mb-0">{{ role }}</p>
				<b-dropdown id="dropdown-user" text="" class=" header__portfolio--dropdown m-md-2">
					
					<b-dropdown-item>
						<router-link to="/portfolio"  tag="a" class="portfolio--dropdow__router"> Thông tin tài khoản </router-link>
					</b-dropdown-item>
					<b-dropdown-item @click="logout()">Logout</b-dropdown-item>
				</b-dropdown>
			</div>

			<div class="img-logo-right">
				<img src="../assets/svg/right-header.svg" />
			</div>
		</div>
	</div>
</template>

<script>
	import { AUTH_LOGOUT } from "../store/constants";

	import Login from "../views/user-auth/Login.vue";
	import Register from "../views/user-auth/Register.vue";

	export default {
		components: {
			Login,
			Register,
		},
		data() {
			return {
				isLogin: false,
			};
		},
		methods: {
			loggedIn() {
				this.isLogin = true;
			},
			logout() {
				this.isLogin = false;
				this.$store
					.dispatch(AUTH_LOGOUT)
					.then((res) => {})
					.catch((err) => {
						console.log(err);
					});
			},
		},
		created() {
			let token = localStorage.getItem("token");
			if (token != null) {
				this.isLogin = true;
			}
		},
		computed: {
			username () {
				return this.$store.state.username;
			},
			role () {
				return this.$store.state.role;
			}
		}
	};
</script>

<style lang="scss" scoped>
</style>
