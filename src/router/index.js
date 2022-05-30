import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Form from '../views/FormApp.vue'
import Catalog from '../views/Catalog.vue'
import ProductDescriptionDrawer from '../components/ProductDescriptionDrawer.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
  { path: '/form', component: Form },
  { path: '/Catalog', component: Catalog },
  { path: '/productdescriptiondrawer', component: ProductDescriptionDrawer },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
