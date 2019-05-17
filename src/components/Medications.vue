<template>
	<table>
		<tr>
			<th>
				
			</th>
			<th v-for="column in allColumns">
		    	{{ column.label }}
		    </th>
		</tr>
		<tr v-for="medication in allMedications">
			<td>
				<input type="radio" name="medicationId" :id="medication.id" v-on:change="setMedic(medication.id)">
		    </td>
		    <td>
		    	{{ medication.name }}
		    </td>
		    <td>
		    	{{ medication.dosage }}
		    </td>
		    <td>
		    	{{ medication.due_date }}
		    </td>
		</tr>
	</table>

</template>

<script>
	import { serverBus } from '../main.js';
	import { mapGetters } from 'vuex';

	export default {
		name: 'Medications',
		computed: mapGetters(['allMedications', 'allColumns']),
		components: {
    	
    },
    methods: {
    	setMedic(id) {
    		serverBus.$emit('setMedic', id);
    	}
    },
    props: ['medications', 'columns']
	}

</script>

<style scoped>
	table, th, td {
		border: 1px solid grey;
		background: #f4f4f4;
	  	padding: 8px;
	}

	table {
		width: 100%;
	}

</style>
