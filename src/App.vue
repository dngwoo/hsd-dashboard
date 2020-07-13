<template>
	<div id="app">
		<template v-if="!isLocation">
			<control-bar></control-bar>
			<header-bar></header-bar>
			<status-bar></status-bar>
			<bottom-bar></bottom-bar>
		</template>
		<router-view></router-view>
	</div>
</template>

<script>
import BottomBar from '@/components/common/BottomBar.vue';
import ControlBar from '@/components/common/ControlBar.vue';
import HeaderBar from '@/components/common/HeaderBar.vue';
import StatusBar from '@/components/common/StatusBar.vue';

export default {
	components: {
		BottomBar,
		ControlBar,
		HeaderBar,
		StatusBar,
	},
	computed: {
		isLocation() {
			return this.$route.path === '/home' ? true : false;
		},
	},
};
</script>

<style lang="scss">
@import '@/scss/styles.scss';
</style>
