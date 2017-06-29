<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr>
    <h3>{{ $store.state.count }}</h3>
    <p>通过mapState的数组来赋值 {{ count }}</p>
    <p>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  // 1. 引入mapState
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        msg: 'Hello Vuex'
      }
    },
    computed: mapState([
      // 映射 this.count 为 store.state.count
      'count'
    ]),
    store
  }
</script>
