<template>
    <div class="inline-block p-4 fixed mt-4 mr-4 right-0 flex items-start bg-red-600 text-white shadow-2xl">
        <span class="material-icons pr-3">notifications_active</span> 
        <div>
            <p v-for="error in $store.state.error" :key="error.id">{{error[0]}}</p>
        </div>
    </div>
</template>