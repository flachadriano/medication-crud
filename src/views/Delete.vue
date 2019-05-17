<template>
	<div class="container" id="app">
    	
    </div>

</template>

<script>
	import { mapActions } from 'vuex';
	import { serverBus } from '../main.js';

	export default {
		name: 'Delete',
		methods: {
			...mapActions(["delMedication"])
		},
		mounted: function () {
			this.delMedication(this.$route.params.id);
			serverBus.$emit('setMedic', null);
			this.$router.push('/');
		}
	}

</script>

<style>


</style>