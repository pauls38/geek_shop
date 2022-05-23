import { createStore } from 'vuex'

export default createStore({

  state: {
    catalog: [{}],
    cart: [],
    category: [],
    preView: [],        
    imageUrl: 'http://svalka-back.im56.ru/'
  },
  getters: {
    getCatalog: (state) => [...state.catalog],
    getCategory: (state) => [...state.category],
    getCart: (state) => [...state.cart],
    //getPreView: (state) = [...state.catalog],    
    getCartCount: (state) => state.cart.reduce((acc, item) => acc + item.quantity, 0)
  },
  mutations: {
    setCatalog: (state, catalog) => { state.catalog = catalog },
    // setCatalog: (state, catalog) => {console.log(state)},
    setCart: (state, cart) => { state.cart = cart },
    setCategory: (state, category) => {state.category = category },
    preView: (state, catalog) => { state.preView = catalog;
    //alert('test') 
    },

    addToCart: (state, product) => { 
      const existProduct = state.cart.find(item => item.id === product.id)
      // console.log(product);
      if(existProduct) {
        existProduct.quantity++
      } else {
        state.cart.push(Object.assign({quantity: 1}, product))
      }
    },    
    removeFromCart: (state, id) => {
      const idx = state.cart.findIndex((item) => item.id === id)

      state.cart.splice(idx, 1);
    },
    setQuantity: (state, {id, quantity}) => {
      const product = state.cart.find(item => item.id === id)
      product.quantity = quantity
    }
  },
  actions: {
    loadCatalog({ commit }) {
      // return fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
     return fetch('http://svalka-back.im56.ru/api/products')
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          commit('setCatalog', data);
        })
    },
    loadCatalogCategory({ commit }) {
      return fetch('http://svalka-back.im56.ru/api/categories')
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            commit('setCategory', data);
          })
    },
    loadCart({ commit }) {
      return fetch(`/api/v1/cart`)
        .then((response) => response.json())
        .then((data) => {
          commit('setCart', data);
        })
    },    
    addToCart({ commit }, product) {
      return fetch(`/api/v1/cart`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(() => {
          commit('addToCart', product);
        })
    },
    preView({ commit }, product) {
      return fetch(`/api/v1/preView`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(() => {
          commit('preView', product);
        })
    },
    setQuantity({ commit }, {id, quantity}) {
      return fetch(`/api/v1/cart/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({quantity: quantity})
      })
        .then(() => {
          commit('setQuantity', {id, quantity});
        })
    },
    removeFromCart({ commit }, id) {
      return fetch(`/api/v1/cart/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      })
        .then(() => {
          commit('removeFromCart', id);
        })
    },
  }
})
