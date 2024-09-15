<template>
  <div id="app">
    <HeaderApp />
    <router-view />
    <ClearBooth />
    <Footer />
  </div>
</template>

<script>
import HeaderApp from './components/HeaderApp.vue'
import Footer from './components/FooterApp'
import ClearBooth from './components/ClearBooth'
export default {
  name: 'app',
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('loadCatalog')
    this.$store.dispatch('loadCatalogCategory')
    this.$store.dispatch('loadCart')
  },
  components: {
    HeaderApp,
    Footer,
    ClearBooth
  },
  methods: {
  }
}
</script>

<style lang="scss">

* {
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
}
html {
  background: #E5E5E5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  position: relative;
  background: rgba(255, 254, 251, 60%);
}
a {
  font-weight: bold;
  color: darkgray;
  text-decoration: none;
  margin: 0 5px 0 5px;
  font-size: 1.25rem;

  &.active {
    color: #2c3e50;
  }
}

</style>
