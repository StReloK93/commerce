<template>
	<section class="flex h-full">
		<leftPanel/>
		<main class="flex-grow bg-gray-100 p-16">
			<shopHeader/>
		</main>
	</section>
</template>
<script>
import leftPanel from "@/components/shop/Leftpanel"
import shopHeader from "@/components/shop/Shopheader"
export default {
	components: {
		leftPanel,
		shopHeader
	},
};
</script>
<style>
   
</style>