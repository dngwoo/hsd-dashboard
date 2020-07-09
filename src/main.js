import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router/index.js';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyD6Q3mbAa7o1l3MoBTnIzv7n6W3dAXJfks',
		libraries: 'places',
	},
});

Vue.config.productionTip = false;

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app');
