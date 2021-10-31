<template>
	<nav class="flex py-3 bg-red-500">
		<section class="container mx-auto flex justify-between">
			<div>
				FoodCome
			</div>
			<button @click="logout" class="text-white">Logout</button>
		</section>
	</nav>
	<section class="container mx-auto">
		<h1>Home Page</h1>
	</section>
</template>
<script>
export default {
	methods: {
		logout() {
			this.$store.dispatch("logout");
			this.$router.push({ name: "login" });
		},
	},
};
</script>

<style scoped>

</style>