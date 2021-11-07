export default [
	{
		path: '/',
		component: () => import('@/views/all/Homepage.vue'),
		name: 'home',
	},
	{
		path: '/login',
		component: () => import('@/views/guest/Loginpage.vue'),
		name: 'login',
		meta: {
			guard: 'guest'
		}
	},
	{
		path: '/register',
		component: () => import('@/views/guest/Registerpage.vue'),
		name: 'register',
		meta: {
			guard: 'guest'
		}
	},
	{
		path: '/shop',
		component: () => import('@/views/shop/Shopmainpage.vue'),
		name: 'shop',
		meta: {
			guard: 'shop'
		}
	},
	{
		path: '/admin',
		component: () => import('@/views/admin/Adminmainpage.vue'),
		name: 'admin',
		meta: {
			guard: 'admin'
		}
	},
];