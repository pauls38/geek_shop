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
import ProductCard from '../components/ProductCard.vue'

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
.btn-cart {
  outline: none;
    background: #990f04;
    position: absolute;
    box-shadow: 1px 3px 4px 1px grey;
    bottom: 14px;
    color: white;
    right: 180px;
    width: 130px;
    padding: 7px;
    margin: 10px;
    border-radius: 15px;
    transition: 0.2s;
    border: none;
}
</style>