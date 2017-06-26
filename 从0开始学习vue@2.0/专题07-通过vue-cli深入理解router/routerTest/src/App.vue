<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link> 丨
      <router-link to="/hi">Hi页面</router-link> 丨
      <router-link :to="{name: 'hi1', params: {username: 'fefuns', id: '888'}}">Hi页面1</router-link> 丨
      <router-link :to="{name: 'hi2'}">Hi页面2</router-link>
    </div>
    <p>{{ $route.name }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
