<template>
  <div class="page">
    <h2>Каталог</h2>       
    <CatalogList v-for="item of catalogCategory" v-bind:key="item.id" v-bind:data="item" />
    
    <router-view />
  </div>
</template>
<script>
import CatalogList from '../components/UI/CatalogList'

export default {
  name: 'Catalog',

  components: { CatalogList },
  computed: {
    catalogCategory() {
      // console.log(this.$store.getters.getCategory)
      return this.$store.getters.getCategory
    }
  },
}
</script>
<style lang="scss" scoped>
.page {
  h2 {
    margin-bottom: 30px;
  }
}
</style>