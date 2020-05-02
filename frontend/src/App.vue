<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Header
  },
  created () {
    console.log('app is loaded')
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #e8e8e8;
  min-height: 100vh;
}
.container {
  margin: auto;
  width: 100%;

  @media (min-width: 1200px) {
    max-width: 1000px;
  }
}
a {
  text-decoration: none;
}
</style>
