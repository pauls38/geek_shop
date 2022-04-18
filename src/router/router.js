import Vue from 'vue'
import Router from 'vue-router'
import Main from "@/pages/Instruments"
import { createRouter, createWebHistory } from "vue-router";

import vCatalog from '../components/catalog'
import vCart from '../components/cart'

Vue.useAttrs(Router);

let router = new Router( {
    routes: [
    {
        path: '/',
        name: 'catalog',
        component: vCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: vCart,
        props: true
    }
  ]  
})
// const routes = [
//    {
//        path: '/',
//      component: Instruments
//  }
//]


const router = createRouter( {
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;