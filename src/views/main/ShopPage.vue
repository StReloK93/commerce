<template>
	<HeaderSite class="border-b" />
	<aside class="container px-10 mx-auto" v-if="shop">
		<!-- image block search-->
		<section
			class="mainimage flex justify-center py-32 blur-sm bg-cover bg-center"
			:style="{backgroundImage: `url(${shop.image})`}"
		>
			<main class="w-2/4 flex items-center bg-white pr-3">
				<input
					type="text"
					id="searchiInp"
					class="p-3 bg-white w-full"
					placeholder="Nima buyurtma qilasiz?"
				/>
				<label for="searchiInp" class="material-icons">search</label>
			</main>
		</section>
		<h3 class="text-2xl">{{shop.name}}</h3>
	</aside>
	<FooterSite />
</template>
<script>
import HeaderSite from "@/components/main/Header.vue";
import FooterSite from "@/components/main/Footer.vue";
export default {
	props: ["id"],
	components: {
		HeaderSite,
		FooterSite,
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
<style>
.mainimage {
    background-image: url("/src/mainimage.jpg");
}
</style>
