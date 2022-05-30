<template>
  <div class="card">
    <div class="product-container">
      <img
        :src="this.$store.state.imageUrl + data.image"
        alt="jpeg"
        class="div-product-img"
        width="332"
        height="200"
      />
      <h3 class="h3-product">{{ data.title }}</h3>
      <p class="p-body-product">
        {{ data.short_description }}
      </p>

      <span class="span-group-price">{{ data.price }} руб</span>
      <span v-if="quantity" class="quantity">Количество {{ quantity }} шт.</span>
      <slot class="slot_btn"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  computed: {
    quantity: {
      get() {
        const itemFromCart = (this.$store.state.cart || []).find(
          ({ id }) => this.data?.id === id
        );

        if (itemFromCart) {
          return itemFromCart.quantity;
        } else {
          return null;
        }
      },
      set(value) {
        this.$store.dispatch("setQuantity", {
          id: this.data.id,
          quantity: value,
        });
      },
    },
  },
  props: ["data"],
};
</script>

<style>
.card {
  margin: 0 auto;
}

.product-container {
  transition: 0.3s;
  list-style: none;
  position: relative;
  /*overflow: hidden;*/
  margin: 10px 5px;
  padding: 5px;
  min-width: 660px;
  height: 300px;
  cursor: pointer;
  background: #fffefb;
  /*box-shadow: 0 10px 14px rgba(0, 0, 0, 0.8), 0 1px 5px rgba(0, 0, 0, 0.5);*/
  border-radius: 15px;
}

.product-container:hover {
  box-shadow: 0 10px 14px rgba(0, 0, 0, 18%), 0 5px 7px rgba(0, 0, 0, 15%);
}

.div-product-img {
  min-width: 300px;
  float: left;
  /*position: absolute;*/
  left: -50px;
  overflow: hidden;
  top: 10px;
  height: 100%;
  /*outline: 1px solid black;*/
}

.h3-product {
  position: absolute;
  width: 300px;
  min-height: 25px;
  right: 20px;
  top: 5px;
  text-align: left;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #3f3f3f;
  padding: 5px;
  letter-spacing: 0.01em;
  /*border: 1px solid black;*/
}
.quantity {
  position: absolute;
  width: 155px;
  /* border: 1px solid black; */
  height: 30px;
  right: 162px;
  padding: 5px;
  bottom: 100px;
  letter-spacing: 0.02em;
  text-align: left;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 30px;
  color: rgba(0, 0, 0, 70%);
  /*border: 1px solid black;*/
}
.div_quantity {
  position: relative;
  top: 200px;
  left: 290px;
  width: 60px;
  height: 35px;
  /*border: 1px solid rgba(0,0,0,20%);*/
  border-radius: 10px;
  /*border-radius: 5px;*/
  /*outline: none;*/
}
.div_quantity .input_num {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  width: 50px;
  height: 25px;
  outline: none;
  border: none;
  border-radius: 10px;
}
.input_num:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 48%);
}

.p-body-product {
  position: absolute;
  width: 300px;
  height: 125px;
  /*overflow: hidden;*/
  padding: 5px;
  overflow-y: auto;
  right: 20px;
  top: 60px;
  text-align: left;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 20px;
  color: #3f3f3f;
  /*outline: 1px solid rgba(0, 0, 0, 10% );*/
}
.p-body-product::-webkit-scrollbar {
  width: 10px;
  background-color: rgba(0, 0, 0, 4%);
}
.span-group-price {
  position: absolute;
  width: 200px;
  /*border: 1px solid black;*/
  height: 30px;
  right: 120px;
  padding: 5px;
  bottom: 70px;
  letter-spacing: 0.02em;
  text-align: left;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: rgba(0, 0, 0, 70%);
  /*border: 1px solid black;*/
}
</style>
