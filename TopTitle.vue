<template>
    <nav class="navbar bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">SHOP</span>
    <span class="navbar-brand mb-0 h1">Cart ({{ totalQty }})</span>
  </div>
</nav>

</template>

<script>
import { mapActions } from 'vuex';

    export default {
        name: 'TopTitle',
        computed: {
            ...mapActions(["cart"]),
            totalQty() {
                return this.cart.reduce((a,b) => a+b.qty, 0);
            }
        }

    }
</script>

<style scoped>
    nav {
        margin-bottom: 30px;
    }
    
</style>