<template>
	<section class="px-4 mb-4">
		<router-link :to="{ name: 'shoppage', params: { id: shop.id }}" class="shadow-xl block">
			<img :src="`http://127.0.0.1:8000${shop.image}`" class="object-cover w-full h-48" />
			<div class="p-3">
				<h2 class="font-bold mb-2 text-lg">{{shop.name}}</h2>
				<main class="flex justify-between">
					<span class="text-gray-400">{{shop.shoptype}}</span>
					<span class="text-green-600 flex">
						<i class="material-icons pr-2">local_shipping</i>
						Bepul
					</span>
				</main>
			</div>
		</router-link>
	</section>
</template>
<script>
export default {
	props: ["shop"],
};
</script>
<style>
    
</style>