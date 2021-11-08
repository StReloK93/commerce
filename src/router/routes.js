export default [
	{
		path: '/',
		component: () => import('@/views/main/HomePage.vue'),
		name: 'home',
	},
	{
		path: '/shop/:id',
		component: () => import('@/views/main/ShopPage.vue'),
		name: 'shoppage',
		props: true
	},
	{
		path: '/login',
		component: () => import('@/views/main/LoginPage.vue'),
		name: 'login',
		meta: {
			guard: 'guest'
		}
	},
	{
		path: '/register',
		component: () => import('@/views/main/RegisterPage.vue'),
		name: 'register',
		meta: {
			guard: 'guest'
		}
	},
	{
		path: '/panel-shop',
		component: () => import('@/views/shop/ShopMainPage.vue'),
		name: 'shop',
		meta: {
			guard: 'shop'
		}
	},
	{
		path: '/admin',
		component: () => import('@/views/admin/AdminMainPage.vue'),
		name: 'admin',
		meta: {
			guard: 'admin'
		}
	},
];