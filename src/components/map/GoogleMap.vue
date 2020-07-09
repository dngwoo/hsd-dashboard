<template>
	<GmapMap :center="{ lat: 10, lng: 10 }" :zoom="7" map-type-id="terrain">
		<GmapMarker
			:key="index"
			v-for="(m, index) in markers"
			:position="m.position"
			:clickable="true"
			:draggable="true"
			@click="clickMarker"
		/>
	</GmapMap>
</template>

<script>
export default {
	data() {
		return {
			markers: [
				{
					position: {
						lat: 10.0,
						lng: 10.0,
					},
				},
				{
					position: {
						lat: 11.0,
						lng: 11.0,
					},
				},
			],
		};
	},
	methods: {
		clickMarker: function() {
			this.$dialog.confirm({
				text:
					"What's your name? <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Natgeologo.svg/1200px-Natgeologo.svg.png' height=100/><input value='input'></input>",
				title: 'Warning',
			});
		},
	},
};
</script>
