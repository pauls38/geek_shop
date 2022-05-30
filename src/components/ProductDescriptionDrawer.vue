<template>
  <div
    class="drawer-background"
    :class="{ show: active }"
    @click="$emit('close-data-drawer')"
  />

  <div class="drawer" :class="{ show: active }">
    <div class="drawer-close" @click="$emit('close-data-drawer')">X</div>
    <div v-if="preview.id" class="data-details">
      <img
        :src="this.$store.state.imageUrl + preview.image"
        alt="jpeg"
        class="div-product-img"
        width="332"
        height="200"
      />

      <h3 class="text-center">{{ preview.title }}</h3>
      <p class="description">{{ preview.description }}</p>
      <h3 class="text-center">${{ Number(preview.price).toFixed(2) }}</h3>

      <div class="cart-total" v-if="preview.quantity">
        <h3>In Cart</h3>
        <h4>{{ preview.quantity }}</h4>
      </div>
      <div class="button-container">
        <button class="remove" v-on:click="remove(preview.id)">Remove</button>
        <button class="add" v-on:click="addToCart(preview)">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "active"],
  computed: {
    preview() {
      const preview = this.$store.getters.getPreView;
      const itemFromCart = (this.$store.state.cart || []).find(
        ({ id }) => preview?.id === id
      );

      if (itemFromCart) {
        return { ...preview, quantity: itemFromCart.quantity };
      } else {
        return preview;
      }
    },
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch("addToCart", item);
    },
    remove(id) {
      this.$store.dispatch("removeFromCart", id);
    },
  },
};
</script>

<style lang="scss">
.drawer-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  display: none;
  transition: display 0.5s;

  &.show {
    display: block;
  }
}

.drawer {
  width: 95vw;
  height: 100vw;
  background-color: white;
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 15px;
  transition: left 0.5s;
  z-index: 101;
  overflow: scroll;

  &.show {
    left: 0;
  }
}

.drawer-close {
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid gray;
  color: gray;
  width: 15px;
  float: right;
  cursor: pointer;

  &.hover {
    background-color: lightgray;
  }
}

.data-details {
  display: flex;
  justify-content: center;
  flex-direction: column;

  p.description {
    padding: 20px;
    line-height: 1.5rem;
  }

  .button-container {
    button {
      width: 150px;
      border: none;
      padding: 10px;
      border-radius: 5px;
      margin: 0 5px 50px 5px;
      cursor: pointer;
    }
  }
}

@media (min-width: 500px) {
  .drawer {
    width: 33%;
  }
}
</style>
