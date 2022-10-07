<template>
    <div class="card">
        v-for="item in products" :key="item.id">
  <h4 class="card-header">Products</h4>
  <div class="card-body">
    <p class="card-title">Money Bouquet</p>
    <p class="card-text">10 sheet money buoquet (Without Money)</p>
    <p class="card-cost">Rp 55.000</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
  <div class="card">
  <div class="card-body">
    <p class="card-title">Snack Bouquet</p>
    <p class="card-text">Some snacks in the bouquet</p>
    <p class="card-cost">Rp 45.000</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
  <div>
  <div class="card">
  <div class="card-body">
    <p class="card-title">Artificial Bouquet</p>
    <p class="card-text">4 artificial flowers in the bouquet</p>
    <p class="card-cost">Rp 55.000</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>
</div>
<div>
  <div class="card">
  <div class="card-body">
    <p class="card-title">Gift Box</p>
    <p class="card-text">Something what you want</p>
    <p class="card-cost">Rp 45.000</p>
    <a href="#" @click="addToCart(item)" class="btn btn-primary">Add to cart</a>
  </div>
</div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

    export default {
        name: "ListProducts",
        computed: {
            ...mapGetters (["products"]),
        },
        methods: {
            ...mapActions (["getProducts", "addToCart"]),
        },
        mounted() {
            this.getProducts();
        }
    };
</script>
<style scoped>
    .card {
        padding-inline-end: 0px;
    }
</style>