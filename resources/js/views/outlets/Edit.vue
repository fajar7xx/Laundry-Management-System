<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <div class="card-title">Edit Outlet</div>
      </div>
      <div class="card-body">
        <outlet-form></outlet-form>
      </div>
      <div class="card-footer">
        <div class="form-group">
          <button
            class="btn btn-primary btn-sm btn-flat"
            @click.prevent="updateForm"
          >
            Update
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
import OutletForm from "./components/OutletForm";
export default {
  components: { OutletForm },
  data() {
    return {};
  },
  created() {
    //   sebelum component di render kita melakukan request ke server
    //   berdasarkan id pada parameter
    this.editOutlet(this.$route.params.id);
  },
  methods: {
    ...mapActions("outlet", ["editOutlet", "updateOutlet"]),
    updateForm() {
      console.log("upadate the form");
      this.updateOutlet(this.$route.params.id)
        .then(() => {
          this.$router.push({ name: "OutletData" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
</style>
