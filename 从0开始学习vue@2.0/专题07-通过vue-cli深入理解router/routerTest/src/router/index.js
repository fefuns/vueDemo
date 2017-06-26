// 引入 Vue
import Vue from 'vue'
// 引入 vue-router
import Router from 'vue-router'
// 引入根目录下的 Hello.vue 组件
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'

// Vue全局使用Router
Vue.use(Router)

export default new Router({
  // 配置路由，这里是个数组,每一个链接都是一个对象
  routes: [
    {
      // 链接路径
      path: '/',
      // 路由名称
      name: 'Hello',
      // 对应的组件模板
      component: Hello
    },
    {
      path: '/Hi',
      name: 'Hi',
      component: Hi

    }
  ]
})
