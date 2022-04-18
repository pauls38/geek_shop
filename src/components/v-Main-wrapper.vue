<template>
    <div class="v-main-wrapper">
        <p> {{ title }}</p>
        <router-view></router-view>
        <v-Catalog />
        <v-Cart
            v-if="CART.length"
            :cart_data="CART"
        />
    </div>
</template>

<script>
import vCatalog from './v-Catalog'
import vCart from './v-Cart'
import {mapGetters}from 'vuex'

export default {
    name: 'v-Main-wrapper',
    components: {
        vCatalog,
        vCart
    },
    props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
    methods: {},
    watch: {},
    mounted() {
        console.log('Hylo i am alive!')
    }
    
}
</script>

<style scoped>
    .v-main-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>