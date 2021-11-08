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
        <h3 class="text-2xl" v-if="shop">
            {{shop.name}}
        </h3>
    </aside>
    <FooterSite/>
</template>
<script>
import HeaderSite from "@/components/main/Header.vue"
import FooterSite from "@/components/main/Footer.vue"
export default {
    props: ['id'],
    components:{
        HeaderSite,
        FooterSite
    },
	data() {
		return {
            shop: null
		}
	},
    mounted() {
        window.axios.get(`/getshop/${this.id}`).then(res => {
            this.shop = res.data
        })
    },
};
</script>
<style>
.mainimage {
    background-image: url("/src/mainimage.jpg");
}
</style>
