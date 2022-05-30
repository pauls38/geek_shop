<template>
  <div class="page">
    <h2>Главная</h2>
    <div class="product-list">
    <ProductDescriptionDrawer
      :data = "item" 
      :active="active.data_drawer"
      v-on:close-data-drawer="closeDataDrawer()" />
      <ProductCard v-for="item of catalog" v-bind:key="item.id" v-bind:data="item" >        
        <button class="btn" v-on:click="addToCart(item)">В корзинку</button>
        <button class="btn_v" v-on:click="preView(item)">Подробнее</button>
      </ProductCard>
    </div>
  </div>
</template>

<script>
//import item from '../data/catalog.json'
import ProductCard from '../components/ProductCard.vue'
import ProductDescriptionDrawer from '../components/ProductDescriptionDrawer.vue'

export default {
  components: { ProductCard, ProductDescriptionDrawer},
  name: 'Home',
  data () {
    return {
      //items: items,
      //product: null,
      active: {
        data_drawer: false
      }
    }
  },
  computed: {
    catalog() {
      return this.$store.getters.getCatalog
    }
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('addToCart', item)
    },
    preView(item) {
      this.$store.dispatch('preView', item)
      this.active.data_drawer = true
      console.log(this.item)
    },
    closeDataDrawer() {
      this.active.data_drawer = false
    }
  }  
  }    
</script>

<style>
  .product-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    /*flex-wrap: wrap;*/
    width: 100%;
    height: 100%;
    /*margin: 30px 0 0 0;*/
    /*border: 1px solid black;*/
  }
  .page {
    position: relative;
    /*border: 4px solid yellow;*/
    /*background-color: rgba(0,0,0,1%);*/
    /*min-height: 2100px;*/
    /*max-width: 2000px;*/
  }

h2 {
  color: grey;
  width: 400px;
  align-self: center;
  margin-top: 10px;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  border-bottom: 5px solid grey;
}
  .btn {            
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
    border-radius: 15px 0 0 15px ;
    transition: 0.2s;
    border: none;        
  }
  .btn_v {            
    outline: none;
    background: #990f04;
    position: absolute;
    box-shadow: 1px 3px 4px 1px grey;
    bottom: 14px;
    color: white;
    right: 49px;
    width: 130px;
    padding: 7px;
    margin: 10px;
    border-radius: 0 15px 15px 0 ;
    transition: 0.2s;
    border: none;
        
  }
  .btn:hover {
    background: #d8380e;
    cursor: pointer;
  }
  
  .btn:active {
    background: #fc816c;
  }
  .btn_v:hover {
    background: #d8380e;
    cursor: pointer;
  }
  
  .btn_v:active {
    background: #fc816c;
  }
  @media (max-width: 400px) {
    .page {
      min-width: 360px;
    }
  }
</style>