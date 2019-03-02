import Vue from 'vue'
import Vuex from 'vuex'
// import

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },

  getters: {

  },

  mutations: {

  },

  actions: {
    login({commit}, userPayload) {
      //make request to server
    },

    openNav({commit}) {
      $('.app-nav').removeClass('close-nav')
                    .addClass('open-nav');
    },

    closeNav({commit}) {
      $('.app-nav').removeClass('open-nav')
    }
  }
})
