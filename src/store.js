import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    allMedications: (state) => state.medications,
    allColumns: (state) => state.columns
  },
  state: {
    columns: [
      {field: 'name', label: 'Name'}, 
      {field: 'dosage', label: 'Dosage'}, 
      {field: 'due_date', label: 'Due date'}
    ],
    medications: [
      {
        id: 1,
        name: "Morfex",
        dosage: "pill",
        due_date: "06/02/2019"
      },
      {
        id: 2,
        name: "BZD's",
        dosage: "tablet",
        due_date: "06/02/2019"
      },
      {
        id: 3,
        name: "Schnaps",
        dosage: "ml",
        due_date: "15/05/2019"
      }
    ]

  },
  mutations: {
    newMedication: (state, medication) => state.medications.unshift(medication),
    
    removeMedication: (state, id) => state.medications = state.medications.filter(medication => medication.id !== id),
    
    updateMedication: (state, objMedication) => {
      const index = state.medications.findIndex(medication => medication.id === objMedication.id);
      
      if (index !== -1) {
        state.medications.splice(index, 1, objMedication);
      }
    }
    
  },
  actions: {
    async addMedication({ commit }, medication) {
      commit('newMedication', medication);

    },
    async delMedication({ commit }, id) {
      commit('removeMedication', id);

    },
    async updMedication({ commit }, objMedication) {
      commit('updateMedication', objMedication);
    }
    
  }
})
