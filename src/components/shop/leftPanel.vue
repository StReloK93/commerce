<template>
	<section class="w-20 py-16 px-3 flex flex-col justify-between shadow-2xl text-center relative">
		<div>
			<router-link to="/" class="font-bold">
				<span class="text-indigo-500 text-2xl">FC</span>
			</router-link>
		</div>
		<div class="text-black">
         <main>
            <router-link to="/shop/list">
               <span class="material-icons py-4 text-gray-500">list</span>
            </router-link>
         </main>
         <main>
            <router-link to="/shop/settings">
               <span class="material-icons py-4 text-gray-500">settings</span>
            </router-link>
         </main>
         <main>
            <router-link to="/shop/orders">
               <span class="material-icons py-4 text-gray-500">payments</span>
            </router-link>
         </main>
		</div>
		<div>
			<span class="material-icons text-indigo-500 cursor-pointer" @click="$store.dispatch('logout')">logout</span>
		</div>
	</section>
</template>
<script>
export default {

};
</script>
<style>
   
</style>