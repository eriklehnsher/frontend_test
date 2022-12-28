<template>
	<div>
		<carousel :navigationEnabled="true" :perPage="2">
			<slide v-for="(image, index) in car.images" :key="index">
				<img :src="car.images[index].src" class="w-100 h-100" />
			</slide>
		</carousel>
	</div>
</template>

<script>
	import { Carousel, Slide } from "vue-carousel";

	export default {
		components: {
			Carousel,
			Slide,
		},
		props: {
			car: Object,
		},
		data() {
			return {
				slide: 0,
				sliding: null,
			};
		},
		methods: {
			onSlideStart(slide) {
				this.sliding = true;
			},
			onSlideEnd(slide) {
				this.sliding = false;
			},
		},
	};
</script>
<style lang="scss" scoped>
	.carousel-3d-container {
		margin-top: 0px;
		background-color: white;
		border-color: white;
		.carousel-3d-slide {
			background-color: white;
			border: 2px solid white;
			border-top: 0px;
		}
		.carousel-3d-controls {
			background-color: white;
		}
	}
	.img {
		height: 300px;
	}
	.next {
		color: white;
	}
</style>