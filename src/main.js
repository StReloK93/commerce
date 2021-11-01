import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
store.dispatch('getUser').then(() => {
	createApp(App)
	.use(store)
	.use(router)
	.mount('#app')
}).catch(err => {
	console.clear();
	localStorage.removeItem('token')
	router.push({ path: '/login' })
})
