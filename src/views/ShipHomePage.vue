<template>
	<div class="location">
		<google-map class="location__map"></google-map>
		<location-table></location-table>
	</div>
</template>

<script>
import LocationTable from '@/components/table/LocationTable.vue';
import GoogleMap from '@/components/map/GoogleMap.vue';
export default {
	components: {
		LocationTable,
		GoogleMap,
	},
};
</script>
