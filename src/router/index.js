import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/main',
		},
		{
			path: '/home',
			component: () => import('@/views/ShipHomePage.vue'),
		},
		{
			path: '/main',
			component: () => import('@/views/ShipMainPage.vue'),
		},
	],
});

export default router;
