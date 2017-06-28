<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link> 丨
      <router-link to="/hi">Hi页面</router-link>
    </div>
    <router-view></router-view>
    <router-view name="left" style="float: left;width: 50%;background-color: #cccccc;height: 300px;">首页</router-view>
    <router-view name="right" style="float: left;width: 50%;background-color: #cc00cc;height: 300px;">Hi页面</router-view>
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
