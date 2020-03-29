<template>
  <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers"
  >
  </product-form>
</template>

<script>
import ProductForm from '@/components/products/ProductForm';
export default {
  data() {
    return {
      model: {
        manufacturer: {
          name: '',
        },
      },
    }
  },
  created() {
    if (this.manufacutrers.length === 0) {
      console.log('created');
      this.$store.dispatch('allManufacturers');
    }
  },
  computed: {
    manufacturers() {
      console.log('get manufacturers');
      return this.$store.getters.allManufacturers;
    },
  },
  methods: {
    addProduct(model) {
      this.$store.dispatch('addProduct', {
        product: model,
      })
    },
  },
  components: {
    'product-form': ProductForm
  }
}
</script>
