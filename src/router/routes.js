export default [
	{
		path: '/',
		component: () => import('../views/guest/Homepage.vue'),
		name: 'home',
		meta: {
			guard: 'auth'
		}
	},
	{
		path: '/login',
		component: () => import('../views/guest/Loginpage.vue'),
		name: 'login',
		meta: {
			guard: 'guest'
		}
	},
	{
		path: '/register',
		component: () => import('../views/guest/Registerpage.vue'),
		name: 'register',
		meta: {
			guard: 'guest'
		}
	},
];