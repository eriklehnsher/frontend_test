<template>
	<div class="car-detail">
		<div>
			<Carousel :car="car"></Carousel>
		</div>
		<div>
			<CarInfo :car="car"></CarInfo>
			<CarBooking></CarBooking>
		</div>
	</div>
</template>

<script>
	import axiosIns from "@/libs/axiosConfig";
	import Carousel from "./Carousel.vue";
	import CarInfo from "./CarInfo.vue";
	import CarBooking from "./CarBooking.vue";
	export default {
		components: {
			Carousel,
			CarInfo,
			CarBooking,
		},
		data() {
			return {
				car: {},
				id: this.$route.params.car_id,
			};
		},
		mounted() {
			axiosIns
				.get("/car/" + this.id)
				.then((response) => {
					this.car = response.data;
				})
				.catch((error) => {
					console.log("Error", error);
				});
		},
	};
</script>

<style>

</style>