<template>
	<div id="app">
		<template v-if="!isLocation">
			<side-bar></side-bar>
			<control-bar></control-bar>
			<header-bar></header-bar>
			<status-bar></status-bar>
		</template>
		<router-view></router-view>
	</div>
</template>

<script>
import SideBar from '@/components/common/SideBar.vue';
import ControlBar from '@/components/common/ControlBar.vue';
import HeaderBar from '@/components/common/HeaderBar.vue';
import StatusBar from '@/components/common/StatusBar.vue';

export default {
	components: {
		SideBar,
		ControlBar,
		HeaderBar,
		StatusBar,
	},
	computed: {
		isLocation() {
			return this.$route.path === '/location' ? true : false;
		},
	},
};
</script>

<style lang="scss">
@import '@/scss/styles.scss';
</style>
