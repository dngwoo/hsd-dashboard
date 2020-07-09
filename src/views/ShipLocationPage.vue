<template>
	<div class="location">
		<google-map class="location__map"></google-map>
		<location-table></location-table>
	</div>
</template>

<script>
import GoogleMap from '@/components/map/GoogleMap';
import LocationTable from '@/components/table/LocationTable.vue';
export default {
	components: {
		GoogleMap,
		LocationTable,
	},
};
</script>

<style></style>
