<template>
    <HeaderSite class="border-b"/>
    <aside class="container px-10 mx-auto">
        <!-- image block search-->
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
            <main  v-for="type in cafeTypes" :key="type" class="p-5 py-3 mx-5 text-center shadow-xl border border-gray-100">
                <div class="mb-1">
                    <img :src="type.image" class="w-16 inline">
                </div>
                <p >{{type.name}}</p>
            </main>
        </section>
        <!-- shops -->
        <section class="flex flex-wrap -mx-4">
            <Card class="w-1/4"/>
            <Card class="w-1/4"/>
            <Card class="w-1/4"/>
            <Card class="w-1/4"/>
            <Card class="w-1/4"/>
        </section>
    </aside>
    <FooterSite/>
</template>
<script>
import Card from "@/components/main/Card.vue"
import HeaderSite from "@/components/main/Header.vue"
import FooterSite from "@/components/main/Footer.vue"
export default {
    components:{
        Card,
        HeaderSite,
        FooterSite
    },
	data() {
		return {
			cafeTypes: null
		}
	},
    mounted() {
        window.axios.get('/shop/type').then(res => {
            this.cafeTypes = res.data
        })
    },
};
</script>
<style>
.mainimage {
    background-image: url("/src/mainimage.jpg");
}
</style>
