<template>
  <div class="page">
    <h2>Корзина покупок</h2>
    <div class="product-list">
      <ProductCard v-for="item of cart" v-bind:key="item.id" v-bind:data="item" >
        <button class="btn btn-cart" v-on:click="remove(item.id)">Удалить</button>
      </ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard'

export default {
  name: 'Cart',
  components: { ProductCard },
  computed: {
    cart() {
      return this.$store.getters.getCart
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('removeFromCart', id)
    }
  }
}
</script>

<style>

</style>