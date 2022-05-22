<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Edit Product</h3>
      </div>
      <div class="card-body">
        <form-product ref="formProduct"></form-product>
      </div>
      <div class="card-footer">
        <div class="form-group">
          <button class="btn btn-sm btn-primary" @click.prevent="submit">
            <i class="fa fa-save fa-fw mr-1" aria-hidden="true"></i>
            Update
          </button>
          <router-link
            :to="{ name: 'ProductData' }"
            class="btn btn-sm btn-warning"
            >Cancel</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormProduct from "./components/ProductForm";
export default {
  components: {
    FormProduct,
  },
  methods: {
    submit() {
      this.$refs.formProduct.submit();
    },
  },
};
</script>

<style>
</style>
