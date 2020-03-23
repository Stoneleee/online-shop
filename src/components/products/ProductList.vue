<template>
  <div>
    <div class="products">
      <div class="container">This is Product list</div>
      <template v-for="product in products">
        <product-item :key="product._id" :product="product"></product-item>
      </template>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem';
export default {
  name: 'product-list',
  created() {
    console.log(11111)
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },

  computed: {
    // a computed getter
    products() {
      return this.$store.getters.allProducts;
    }
  },

  components: {
    'product-item': ProductItem
  },
}
</script>
