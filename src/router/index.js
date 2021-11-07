import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import routes from './routes.js'
const router = createRouter({
  history: createWebHistory(),
  routes
})

function nextlinkGuard(to,guard){
	return to.matched.some(route => route.meta.guard === guard)
}

router.beforeEach((to, from, next) => {
	if (store.state.user) {
		if (nextlinkGuard(to,'guest')) next({ name: 'home' })
		if((nextlinkGuard(to,'admin') || nextlinkGuard(to,'shop')) && store.state.user.role == 0) next({ name: 'home' });
		if(nextlinkGuard(to,'admin') && store.state.user.role == 1) next({ name: 'shop' });
		else next();
	} else {
		if (nextlinkGuard(to,'auth') || nextlinkGuard(to,'admin') || nextlinkGuard(to,'shop')) next({ name: 'login' })
		else next();
	}
})
export default router;