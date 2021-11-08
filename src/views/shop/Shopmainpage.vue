<template>
	<section class="flex h-full">
		<LeftPanel/>
		<main class="flex-grow bg-gray-100 p-16">
			<ShopHeader/>
		</main>
	</section>
</template>
<script>
import LeftPanel from "@/components/shop/LeftPanel"
import ShopHeader from "@/components/shop/ShopHeader"
export default {
	components: {
		LeftPanel,
		ShopHeader
	},
};
</script>
<style>
   
</style>