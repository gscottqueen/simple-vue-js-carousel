<!-- our template-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Simple Vue.js Carousel</h1>
  </div>
</template>

<!-- our script -->
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- our styles -->
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  img {
    float: left;
    max-width: 100px;
    margin: 0 40px 40px 40px;
  }

  h1 {
    float: left;
    font-weight: normal;
  }

}
</style>
