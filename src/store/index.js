import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    primaryData:'',//primary数据
  },
  mutations: {
    setPrimaryData(state,data){
      state.primaryData=data
    }
  },
  actions: {
    SETPRIMARYDATA({commit},data){
      commit('setPrimaryData',data)
    }
  },
  modules: {
  }
})
