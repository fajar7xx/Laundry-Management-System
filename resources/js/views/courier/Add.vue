<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Add New Courier</h3>
      </div>
      <div class="card-body">
        <courier-form ref="formCourier"></courier-form>
      </div>
      <div class="card-footer">
        <div class="form-group">
          <button class="btn btn-primary btn-sm" @click.prevent="submitForm">
            <i class="fa fa-save fa-fw mr-1" aria-hidden="true"></i>
            Save
          </button>
          <router-link
            :to="{ name: 'CourierData' }"
            class="btn btn-warning btn-sm"
            >Cancel</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import CourierForm from "./components/CourierForm";
export default {
  components: { CourierForm },
  methods: {
    submitForm() {
      //   console.log("submit form dlu");
      //mengirimkan submit pada ref formCourier dimana itu adalah komponen dari courier form
      // jadi membuat si komponen ini seolah2 mempunya submit
      // referensi https://v2.vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements
      this.$refs.formCourier.submit();
    },
  },
};
</script>

<style scoped>
</style>
