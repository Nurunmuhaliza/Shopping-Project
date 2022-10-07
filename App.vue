<template>
  <div>
  <TopTitle />
  <div class="container">
    <div class="row">
      <div class="col-4">
        <ListProducts />
        <div class="col-8">
          <CartList />
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import TopTitle from './components/TopTitle.vue'
import ListProducts from './components/ListProducts.vue'
import CartList from './components/CartList.vue'


export default {
  name: 'App',
  components: {
    TopTitle,
    ListProducts,
    CartList
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c4763;
}
</style>
