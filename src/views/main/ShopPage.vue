<template>
	<HeaderSite class="border-b" />
	<aside class="container px-10 mx-auto" v-if="shop">
		<!-- shop presentation-->
		<section class="bg-cover bg-center relative h-72 md:w-2/3 w-full" :style="{backgroundImage: `url(${shop.image})`}">
			<main class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 p-8 items-start justify-end flex flex-col">
				<h3 class="text-4xl font-bold text-white tracking-wider">{{shop.name}}</h3>
				<div class="p-2 bg-white flex mt-4">
					<aside class="mr-4 flex items-center">
						<span class="material-icons mr-2">
							watch_later
						</span>
						10:00 dan 23:00
					</aside>
					<aside class="flex items-center">
						<span class="material-icons mr-2">
							local_shipping
						</span>
						Bepul
					</aside>
				</div>
			</main>
		</section>
		<!-- shop categories -->
		<section class="flex bg-gray-200 md:w-2/3 w-full shadow-xl sticky top-0">
			<main class="px-5 py-2 border-b-2 border-green-500">Pizza</main>
			<main class="px-5 py-2 ">Salat</main>
			<main class="px-5 py-2">Hotdog</main>
			<main class="px-5 py-2">Ichimliklar</main>
		</section>
		<!-- shop products -->
		<section class="-mx-4 mt-8 flex flex-wrap">
			<ProductCard :image="'http://127.0.0.1:8000/images/product.jpg'" class="md:w-1/4 w-full"/>
			<ProductCard :image="'http://127.0.0.1:8000/images/product1.jpg'" class="md:w-1/4 w-full"/>
			<ProductCard :image="'http://127.0.0.1:8000/images/product2.jpg'" class="md:w-1/4 w-full"/>
			<ProductCard :image="'http://127.0.0.1:8000/images/product3.jpg'" class="md:w-1/4 w-full"/>
			<ProductCard :image="'http://127.0.0.1:8000/images/product1.jpg'" class="md:w-1/4 w-full"/>
			<ProductCard :image="'http://127.0.0.1:8000/images/product3.jpg'" class="md:w-1/4 w-full"/>
			<ProductCard :image="'http://127.0.0.1:8000/images/product2.jpg'" class="md:w-1/4 w-full"/>
			<ProductCard :image="'http://127.0.0.1:8000/images/product.jpg'" class="md:w-1/4 w-full"/>
		</section>
	</aside>
	<FooterSite />
</template>
<script>
import HeaderSite from "@/components/main/Header.vue";
import ProductCard from "@/components/main/ProductCard.vue";
import FooterSite from "@/components/main/Footer.vue";
export default {
	props: ["id"],
	components: {
		HeaderSite,
		FooterSite,
		ProductCard
	},
	data() {
		return {
			shop: null,
		};
	},
	mounted() {
		window.axios.get(`/getshop/${this.id}`).then((res) => {
			this.shop = res.data;
			this.shop.image = `http://127.0.0.1:8000${res.data.image}`;
		});
	},
};
</script>
