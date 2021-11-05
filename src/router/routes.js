export default [
	{
		path: '/',
		component: () => import('../views/guest/homepage.vue'),
		name: 'home',
		meta: {
			guard: 'auth'
		}
	},
	{
		path: '/login',
		component: () => import('../views/guest/loginpage.vue'),
		name: 'login',
		meta: {
			guard: 'guest'
		}
	},
	{
		path: '/register',
		component: () => import('../views/guest/registerpage.vue'),
		name: 'register',
		meta: {
			guard: 'guest'
		}
	},
	{
		path: '/shop',
		component: () => import('../views/shop/shopmainpage.vue'),
		name: 'shop',
		meta: {
			guard: 'shop'
		}
	},
	{
		path: '/admin',
		component: () => import('../views/admin/adminmainpage.vue'),
		name: 'admin',
		meta: {
			guard: 'admin'
		}
	},
];