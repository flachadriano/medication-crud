<template>
	<div class="container" id="app">
		<FormMedication v-on:upd-medication="updMedication" />
    </div>

</template>

<script>
		import FormMedication from '../components/FormMedication';
		import { mapGetters, mapActions } from 'vuex';

		export default {
				name: 'View',
				components: {
						FormMedication
				},
				methods: {
						...mapActions(['updMedication'])
				}
		}

</script>

<style>


</style>