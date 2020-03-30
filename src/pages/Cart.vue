<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <product-item :products="cart"></product-item>
  </div>
</template>

<style>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>

<script>
import ProductItem from '@/components/products/ProductItem';

export default {
  name: 'cart',
  data() {
    return {
      msg: 'cart page.',
    };
  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },

  components: {
    'product-item': ProductItem,
  },
};
</script>
