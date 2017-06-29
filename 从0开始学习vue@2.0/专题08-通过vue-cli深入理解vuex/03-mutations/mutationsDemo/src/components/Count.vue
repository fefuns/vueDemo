<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr>
    <h3>{{ $store.state.count }}</h3>
    <p>通过mapState的数组来赋值 {{ count }}</p>
    <p>
      <!-- 3. 对应的修改调用方式-->
      <button @click="add(10)">+</button>
      <button @click="reduce">-</button>
    </p>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  // 1. 引入mapState 和 mapMutations
  import { mapState,mapMutations } from 'vuex';
  export default {
    data() {
      return {
        msg: 'Hello Vuex'
      }
    },
    // 2. 添加methods属性，并加入mapMutations
    methods: mapMutations([
      'add', 'reduce'
    ]),
    computed: mapState([
      'count'
    ]),
    store
  }
</script>
