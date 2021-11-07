<template>
    <HeaderSite/>
    <aside class="container px-10 mx-auto">
        <!-- image block -->
        <section class="mainimage flex justify-center py-32 blur-sm bg-cover bg-center">
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
        <!-- shop types -->
        <section class="flex p-8 justify-center">
            <main  v-for="type in types" :key="type" class="p-5 py-3 mx-5 text-center shadow-xl border border-gray-200">
                <div class="mb-1">
                    <img :src="type.image" class="w-16 inline">
                </div>
                <p >{{type.name}}</p>
            </main>
        </section>
        <!-- shops -->
        <section class="flex flex-wrap -mx-4">
            <card class="w-1/4  mb-4"/>
            <card class="w-1/4  mb-4"/>
            <card class="w-1/4  mb-4"/>
            <card class="w-1/4  mb-4"/>
            <card class="w-1/4  mb-4"/>
        </section>
        <FooterSite/>
    </aside>
</template>
<script>
import card from "@/components/shop/Card.vue"
import HeaderSite from "@/components/Header.vue"
import FooterSite from "@/components/Footer.vue"
export default {
    components:{
        card,
        HeaderSite,
        FooterSite
    },
	data() {
		return {
			types: [
				{
					image: 'http://127.0.0.1:8000/cafetypes/burger.png',
					name: 'Fast Food'
				},
				{
					image: 'http://127.0.0.1:8000/cafetypes/desert.png',
					name: 'Shirinliklar'
				},
				{
					image: 'http://127.0.0.1:8000/cafetypes/evro.png',
					name: 'Evro'
				},
				{
					image: 'http://127.0.0.1:8000/cafetypes/pizza.png',
					name: 'Pizza'
				},
				{
					image: 'http://127.0.0.1:8000/cafetypes/shashlik.png',
					name: 'Shashlik'
				},
			]
		}
	},
};
</script>
<style>
.mainimage {
    background-image: url("/src/mainimage.jpg");
}
</style>
