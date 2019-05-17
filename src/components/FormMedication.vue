<template>
    <div>
    	<fieldset class="container">
    		<form>
		    	<label for="name">Name:</label>
		        <input id="name" v-model="name" type="text" placeholder="Name">

		        <label for="dosage">Dosage:</label>
				<select id="dosage" v-model="dosage">
					<option value="">Dosage</option>
					<option value="ml">ML</option>
					<option value="pill">PILL</option>
					<option value="tablet">TABLET</option>
				</select>

		        <label for="due_date">Due Date:</label>
		        <input id="due_date" v-mask="'##/##/####'" v-model="due_date" type="text" placeholder="Due Date">
	        </form>
        </fieldset>
        <button class="btn" v-on:click="toHome">Cancel</button>
        <button class="btn" v-on:click="saveMedication">Save</button>
    </div>

</template>

<script>
	import uuid from 'uuid';
	import { mapGetters } from 'vuex';
	import { mask } from 'vue-the-mask';

    export default {
		name: "FormMedication",
		data() {
			return {
				id: '',
				name: '',
				dosage: '',
				due_date: ''
			};

		},
		directives: {
			mask
		},
		computed: mapGetters(['allMedications']),
		methods: {
			saveMedication(e) {
				e.preventDefault();
				
				const objMedication = {
						name: this.name,
						dosage: this.dosage,
						due_date: this.due_date
					};

				if (this.$route.params.id) {
					objMedication.id = this.$route.params.id;
					this.$emit('upd-medication', objMedication);
					
				} else {
					objMedication.id = uuid.v4();
					this.$emit('add-medication', objMedication);
					
				}

				this.$router.push('/');

            },
			toHome() {
				this.$router.push('/');

			}
		},
		created: function() {
			if (this.$route.params.id) {
				var objMed = this.allMedications.find(medication => medication.id === this.$route.params.id)

				this.id = objMed.id;
				this.name = objMed.name;
				this.dosage = objMed.dosage;
				this.due_date = objMed.due_date;
			}
			
		}
    }

</script>

<style scoped>
    input[type="text"], select {
        width: 100%;
		padding: 6px 10px;
		margin: 8px 0;
		box-sizing: border-box;
    }
    
</style>
