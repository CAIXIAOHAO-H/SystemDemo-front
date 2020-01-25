<template>
  <div id="app" class="app-main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
    background: #f0f0f0;
    overflow: hidden;
  }
  .app-main{
    width: 100%;
    height: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top:0px;
}
</style>
