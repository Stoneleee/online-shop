<template>
  <div>
    <div class="title">
      <h1>商城首页</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue';
export default {
  name: 'home',
  data() {
    return {
      msg: 'welcome to vue.js app',
    }
  },

  components: {
    "product-list": ProductList,
  },
}
</script>
