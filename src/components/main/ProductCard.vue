<template>
	<section class="px-4 mb-4">
		<router-link to="#" class="shadow-xl block">
			<img :src="image" class="object-cover w-full h-48" />
			<div class="p-3">
				<h2 class="font-bold mb-2 text-lg">PEPE</h2>
				<main class="flex justify-between">
					<span class="text-gray-400">LOLO</span>
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
    props: ['image']
};
</script>
<style>
    
</style>