import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      idioma: 'pt-BR',
      framwwork: 'vue'
    }
  },
  mutations: {
    setIdioma(state, param){
      state.idioma = param
    },
    setFramework(state, param){
      state.framwwork = param
    }
  },
  getters: {
    getIdioma(state){
      return state.idioma
    },
    getFramework(state){
      return state.framwwork
    }
  },
  actions: {
    setarIdioma(state, param){
      state.commit('setIdioma', param);
    },
    setarFramework(state, param){
      state.commit('setFramework', param);
    }
  }
})

export default store