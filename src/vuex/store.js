import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  officials: [],
  targets: []
}

const mutations = {
  setOfficials (state, { officials }) {
    state.officials = officials
  },
  setTargets (state, { targets }) { 
    state.targets = targets
  },
}

export default new Vuex.Store({
  state,
  mutations
})
