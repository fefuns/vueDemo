import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const state = {
  count: 1
}

const mutations = {
  add(state, n) {
    state.count += n;
  },
  reduce(state) {
    state.count --;
  }
}

// 声明getters属性
const getters = {
  count(state) {
    return state.count += 100;
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
