<template>
	<nav class="flex py-4 border-b">
		<section class="container mx-auto flex justify-between">
			<div>FoodCome</div>
			<button @click="$store.dispatch('logout')">Chiqish</button>
		</section>
	</nav>
	<section class="container mx-auto">
		<!-- image block -->
		<div class="mainimage flex justify-center py-32 blur-sm bg-cover bg-center">
			<main class="w-2/4 flex items-center bg-white pr-3">
				<input type="text" id="searchiInp" class="p-3 bg-white w-full" placeholder="Nima buyurtma qilasiz?" />
				<label for="searchiInp" class="material-icons">search</label>
			</main>
		</div>

		<!-- shop types -->

	</section>
</template>
<script>
export default {};
</script>
<style>
	.mainimage{
		background-image: url('/src/mainimage.jpg');
	}
</style>
