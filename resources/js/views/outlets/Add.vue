<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Add New Outlet</h3>
      </div>
      <div class="card-body">
        <outlet-form></outlet-form>
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
            :to="{ name: 'OutletData' }"
            class="btn btn-warning btn-sm btn-flat"
            >Cancel</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import OutletForm from "./components/OutletForm.vue";
export default {
  components: {
    OutletForm,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("outlet", ["submitOutlet"]),
    submitForm() {
      this.submitOutlet()
        .then(() => {
          this.$router.push({ name: "OutletData" });
          //   console.log("berhasil nih");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
</style>
