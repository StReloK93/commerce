<template>
    <nav class="flex py-4 border-b">
        <section class="container mx-auto px-10 flex justify-between">
            <router-link to="/">
                <img src="/logo.png" class="logoimage" />
            </router-link>
            <button v-if="$store.state.user" @click="$store.dispatch('logout')" class="flex">
                Chiqish
                <span class="pl-2 text-green-600 material-icons">logout</span>
            </button>
            <router-link to="/login" v-else>Kirish</router-link>
        </section>
    </nav>
</template>
<script>
export default {};
</script>
<style>
.logoimage{
    height: 25px;
    width: 125px;
    object-fit: cover;
}
</style>