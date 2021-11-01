export default [
	{
		path: '/',
		component: () => import('../views/Homepage.vue'),
		name: 'home',
		meta: {
			guard: 'auth'
		}
	},
	{
		path: '/login',
		component: () => import('../views/Loginpage.vue'),
		name: 'login',
		meta: {
			guard: 'guest'
		}
	},
	{
		path: '/register',
		component: () => import('../views/Registerpage.vue'),
		name: 'register',
		meta: {
			guard: 'guest'
		}
	},
];