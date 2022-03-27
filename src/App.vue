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
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      dataArray: []
    }
  },
  mounted() {
    // this.$store.dispatch('loadCatalog')
    // this.$store.dispatch('loadCart')
    this.fetchData()

  },
  components: {
    HeaderApp,
    Footer,
    ClearBooth
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response)
        this.dataArray = response
        console.log(this.dataArray)
      } catch (e) {
        alert("ошибка")
      }
    }
  }
}
</script>

<style lang="scss">
@import  url('../public/fontello-icons/css/font-icons.css');
* {
  margin: 0 auto;
  padding: 0;
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
  background: rgba(255, 254, 251, 0.8);
}

</style>
