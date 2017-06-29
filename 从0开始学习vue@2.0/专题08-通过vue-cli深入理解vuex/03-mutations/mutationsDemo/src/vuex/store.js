// 1.引入并使用 vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 2.增加一个 state 常量对象
const state = {
  count: 1
}

// 3. 加入两个改变state 的方法
const mutations = {
  add(state, n) {
    state.count += n;
  },
  reduce(state) {
    state.count --;
  }
}

// 4. 封装代码，让外部可以引用
export  default new Vuex.Store({
  state,
  mutations
})
