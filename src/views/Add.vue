<template>
	<div class="container" id="app">
		<FormMedication v-on:add-medication="addMedication" />
    </div>

</template>

<script>
	import FormMedication from '../components/FormMedication';
	import { mapActions } from 'vuex';

	export default {
		name: 'Add',
		components: {
			FormMedication
		},
	    methods: {
			...mapActions(['addMedication'])
	    }
	}

</script>

<style>


</style>