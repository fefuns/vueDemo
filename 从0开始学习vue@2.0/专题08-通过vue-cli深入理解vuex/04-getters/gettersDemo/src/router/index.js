import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// 引入 Count
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/count',
      component: Count
    }
  ]
})
