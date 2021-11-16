<template>
	<HeaderSite class="border-b" />
	<aside class="container px-10 mx-auto">
		<!-- image block search-->
		<section class="mainimage flex justify-center py-32 blur-sm bg-cover bg-center">
			<main class="w-2/4 flex items-center bg-white pr-3">
				<input type="text" id="searchiInp" class="p-3 bg-white w-full" placeholder="Nima buyurtma qilasiz?"/>
				<label for="searchiInp" class="material-icons">search</label>
			</main>
		</section>
		<!-- shop types -->
		<section class="flex p-8 justify-center">
			<main class="p-5 py-3 mx-5 text-center shadow-xl border border-gray-100" @click="getShops(null)">
				<div class="mb-1">
					<img v-if="cafeTypes" :src="cafeTypes[0].image" class="w-16 inline" />
				</div>
				<p>Hammasi</p>
			</main>
			<main v-for="type in cafeTypes" :key="type" class="p-5 py-3 mx-5 text-center shadow-xl border border-gray-100" @click="getShops(type.id)">
				<div class="mb-1">
					<img :src="type.image" class="w-16 inline" />
				</div>
				<p>{{type.name}}</p>
			</main>
		</section>
		<!-- shops -->
		<transition name="scale" mode="out-in">
			<section v-if="shops != 0 && shops" class="flex flex-wrap -mx-4">
				<Card v-for="shop in shops" :key="shop" v-bind:shop="shop" class="w-1/4" />
			</section>
			<section v-else class="text-3xl p-4 text-center">
				Hech nima yo'q!
			</section>
		</transition>
	</aside>
	<FooterSite />
</template>
<script>
import Card from "@/components/main/ShopCard.vue";
import HeaderSite from "@/components/main/Header.vue";
import FooterSite from "@/components/main/Footer.vue";
export default {
	components: {
		Card,
		HeaderSite,
		FooterSite,
	},
	data() {
		return {
			cafeTypes: null,
			shops: null,
		};
	},
	mounted() {
		this.shoptypes()
		this.getShops()
	},
	methods: {
		getShops(typeCafe = null) {
			this.shops = null
			if(typeCafe == null){
				window.axios.get("/shop/all").then((res) => {
					this.shops = res.data;
				});
			}
			else{
				window.axios.get(`/shops/${typeCafe}`).then((res) => {
					this.shops = res.data;
				});
			}
		},
		shoptypes(){
			window.axios.get("/shoptype").then((res) => {
				this.cafeTypes = res.data;
			});
		}
	},
};
</script>
<style>
.mainimage {
    background-image: url("/src/mainimage.jpg");
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease-in-out;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
