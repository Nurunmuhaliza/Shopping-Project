<template>
    <div>
    <ul class="list-group">
  <li class="list-group-item" v-for="item in cart" :key="item.id">
    <button 
    @click="removeItem(item.id)"
    type="button" 
    class="btn-close" 
    data-bs-dismiss="modal" 
    aria-label="Close"></button>
    <div class="media">
    <div class="media-body">
        <p class="mt-0">Judul</p>
        <button @click="reduceQty(item.id)" class ="btn-qty btn btn-sm btn-secondary">-</button>
        <p>x {{ item.qty }}</p>
        <button @click="addQty(item.id)" class ="btn-qty btn btn-sm btn-secondary">+</button>
    </div>
</div>
</li>
</ul>
<button class="btn-checkout btn btn-lg btn-block btn-success" v-if="cart.length">
    Checkout (Rp {{ totalPrice }})</button>
</div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data () {
            return {
                isProcessing: false,
                orderPlaced: false,
            }
        },
        computed: {
        ...mapGetters (["cart"]),
        totalPrice() {
            return this.cart.reduce((a,b) => a+b.qty*b.price,0)
        }
        },
      methods: {
        ...mapActions (["addQty", "reduceQty", "removeItem", "emptyCart"]),
        placeOrder() {
            this.isProcessing = true;
            setTimeout (() => {
                this.orderPlaced = true;
                this.isProcessing = false;
                this.emptyCart();
            }, 1000)
        },
      },
    }

</script>

<style scoped>
    .btn-qty {
        border-radius: 50%;
        width: 30px;
    }
    .media {
        padding-top: 20px;
    }
    .media-body {
        text-align: left;
    }
    .btn-checkout {
        margin-top: 20px;
    }
</style>