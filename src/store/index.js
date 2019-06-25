import Vue from 'vue'
import Vuex from 'vuex'
import state from './states'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
 state,//解构赋值 
 mutations,
 getters
})
 