import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue'),
		},
		{
			path: '/location',
			component: () => import('@/views/ShipLocationPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/info',
			component: () => import('@/views/ShipInfoPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/control',
			component: () => import('@/views/ShipControlPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/trend',
			component: () => import('@/views/ShipTrendPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/alarm',
			component: () => import('@/views/ShipAlarmPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/log',
			component: () => import('@/views/ShipEventLogPage.vue'),
			meta: { auth: true },
		},
		{
			path: '/maintenance',
			component: () => import('@/views/ShipMaintenance.vue'),
			meta: { auth: true },
		},
	],
});

export default router;
