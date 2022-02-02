<template>
  <div>
    <!-- <div class="alert alert-danger" role="alert" v-if="errors">
      Error. The given data was invalid
    </div> -->
    <b-alert show variant="danger" dismissible v-if="errors != ''">
      Warning, The given data was invalid
    </b-alert>
    <div class="form-group">
      <label for="kode">Kode Outlet</label>
      <input
        type="text"
        name="kode"
        id="kode"
        class="form-control"
        :class="{ 'is-invalid': errors.code }"
        v-model="outlet.code"
        :readonly="$route.name === 'OutletEdit'"
      />
      <span class="error invalid-feedback" v-if="errors.code">{{
        errors.code[0]
      }}</span>
    </div>
    <div class="form-group">
      <label for="name">Nama Outlet</label>
      <input
        type="text"
        name="name"
        id="name"
        class="form-control"
        :class="{ 'is-invalid': errors.name }"
        v-model="outlet.name"
      />
      <span class="error invalid-feedback" v-if="errors.name">{{
        errors.name[0]
      }}</span>
    </div>
    <div class="form-group">
      <label for="address">Alamat</label>
      <textarea
        name="address"
        id="address"
        rows="5"
        class="form-control"
        :class="{ 'is-invalid': errors.address }"
        v-model="outlet.address"
      ></textarea>
      <span class="error invalid-feedback" v-if="errors.address">{{
        errors.address[0]
      }}</span>
    </div>
    <div class="form-group">
      <label for="phone">Telepon</label>
      <input
        type="text"
        name="phone"
        id="phone"
        class="form-control"
        :class="{ 'is-invalid': errors.phone }"
        v-model="outlet.phone"
      />
      <span class="error invalid-feedback" v-if="errors.phone">{{
        errors.phone[0]
      }}</span>
    </div>
    <div class="form-check">
      <input
        type="checkbox"
        name="status"
        id="status"
        v-model="outlet.status"
        class="form-check-input"
      />
      <label for="status" class="form-check-label">Set Active</label>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["errors"]),
    ...mapState("outlet", {
      outlet: (state) => state.outlet, //mengambil state outle pada module outlet
    }),
  },
  methods: {
    // ...mapMutations("outlet", ["CLEAR_FORM"]), //panggil mutation ini untuk clear form
    // ...mapMutations("CLEAR_ERRORS"),
    // ...mapMutations(["outlet/CLEAR_FORM", "CLEAR_ERRORS"]),
    ...mapMutations("outlet", ["CLEAR_FORM"]),
  },
  created() {
    // this.CLEAR_ERRORS();
  },
  //ketika page ini di tinggalkan atau destroyed
  destroyed() {
    //berrsihkan formnya setelah di tinggalkan
    this.CLEAR_FORM();
  },
};
</script>

<style scoped>
</style>
