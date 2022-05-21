<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <div class="card-title">Add New Products</div>
      </div>
      <div class="card-body">
        <form-product ref="formProduct"></form-product>
      </div>
      <div class="card-footer">
        <div class="form-group">
          <button
            class="btn btn-primary btn-sm btn-flat"
            @click.prevent="submitForm"
          >
            <i class="fas fa-save fa-fw mr-1"></i> Save
          </button>
          <router-link
            :to="{ name: 'ProductData' }"
            class="btn btn-warning btn-sm btn-flat"
            >Cancel</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import FormProduct from "./components/ProductForm";
export default {
  components: {
    FormProduct,
  },
  data() {
    return {};
  },
  methods: {
    submitForm() {
      console.log("submit new produk");
      this.$refs.formProduct.submit();
    },
  },
};
</script>

<style>
</style>
