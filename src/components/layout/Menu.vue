<template>
    <div>
      <router-link v-bind:to="{ name: 'add' }" class="btn">Add</router-link>
      <router-link v-bind:to="{ name: 'view', params: { id: medicationId } }" class="btn">View</router-link>
      <router-link v-bind:to="{ name: 'delete', params: { id: medicationId } }" class="btn">Delete</router-link>
    </div>

</template>

<script>
	  import { serverBus } from '../../main';

    export default {
        name: "Menu",
        data() {
			      return {
				        medicationId: null
			      }
		    },
        created() {
			      serverBus.$on('setMedic', (id) => {
				        this.medicationId = id;
			      });
		    }
    }

</script>

<style scoped>

</style>
