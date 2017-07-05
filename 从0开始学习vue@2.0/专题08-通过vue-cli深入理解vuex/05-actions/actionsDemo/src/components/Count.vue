<template>
  <div>
    <h2>{{ msg }}</h2>
    <hr>
    <h3>{{ $store.state.count }}</h3>
    <p>通过mapState的数组来赋值 {{ count }}</p>
    <p>
      <button @click="add(10)">+</button>
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>
<script>
  import store from '@/vuex/store'
  import { mapState,mapMutations, mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {
        msg: 'Hello Vuex'
      }
    },
    computed: {
      ...mapState(['count']),
      ...mapGetters(['count'])
    },
//    methods: mapMutations([
//      'add', 'reduce'
//    ]),
    methods: {
      ...mapMutations([
      	'add', 'reduce'
      ]),
      ...mapActions([
      	'addAction', 'reduceAction'
      ])
    },
    store
  }
</script>
