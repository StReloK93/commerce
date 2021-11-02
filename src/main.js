import { createApp } from 'vue'
import App from './components/App.vue'
import store from '@/store'
import router from '@/router'
window.router = router


store.dispatch('getUser').then(() => {
	createApp(App)
	.use(store)
	.use(router)
	.mount('#app')
}).catch(() => {
	console.clear();
	localStorage.removeItem('token')
	router.push({ path: '/login' })
})
