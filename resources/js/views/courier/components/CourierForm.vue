<template>
  <div>
    <b-alert show variant="danger" dismissible v-if="errors != ''"
      >Warning the given data was invalid</b-alert
    >
    <div class="form-group">
      <label for="name">Nama Lengkap</label>
      <input
        type="text"
        name="name"
        id="name"
        class="form-control"
        :class="{ 'is-invalid': errors.name }"
        v-model="courier.name"
        :readonly="$route.name === 'CourierEdit'"
      />
      <span class="error invalid-feedback" v-if="errors.name">{{
        errors.name[0]
      }}</span>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        :class="{ 'is-invalid': errors.email }"
        v-model="courier.email"
      />
      <span class="error invalid-feedback" v-if="errors.email">{{
        errors.email[0]
      }}</span>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        class="form-control"
        :class="{ 'is-invalid': errors.password }"
        v-model="courier.password"
      />
      <span class="error invalid-feedback" v-if="errors.password">{{
        errors.password[0]
      }}</span>
    </div>
    <div class="form-group">
      <label for="outlet">Outlet</label>
      <select
        name="outlet"
        id="outlet"
        class="form-control"
        :class="{ 'is-invalid': errors.outlet_id }"
        v-model="courier.outlet_id"
      >
        <option value="">Silahkan Pilih Outlet</option>
        <option
          v-for="(row, index) in outlets.data"
          :value="row.id"
          :key="index"
        >
          {{ row.name }}
        </option>
      </select>
      <span class="error invalid-feedback" v-if="errors.outlet_id">{{
        errors.outlet_id[0]
      }}</span>
    </div>
    <div class="form-group">
      <div class="custom-file">
        <input
          type="file"
          class="custom-file-input"
          id="photo"
          name="photo"
          :class="{ 'is-invalid': errors.photo }"
          accept="image/*"
          @change="uploadImage($event)"
        />
        <label class="custom-file-label" for="photo">Choose file</label>
        <span class="error invalid-feedback" v-if="errors.photo">{{
          errors.photo[0]
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      courier: {
        name: "",
        email: "",
        password: "",
        outlet_id: "",
        photo: "",
      },
    };
  },
  created() {
    this.getOutletOptions();
    if (this.routeName === "CourierEdit") {
      console.log("ini halaman edit");
      //fungsi untuk mengambil data yang akan diedit dijalankan berdasarkan parameter id yang ada di query url
    }
  },
  destroyed() {
    this.clearForm();
  },
  computed: {
    ...mapState(["errors"]),
    ...mapState("outlet", {
      outlets: (state) => state.outletOptions,
    }),
    routeName() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions("outlet", ["getOutletOptions"]),
    ...mapActions("courier", ["submitCourier", "updateCourier", "getCourier"]),
    ...mapMutations("courier", ["SET_ID_UPDATE"]),

    // ambil file ketika file diupload di form input file
    uploadImage(event) {
      this.courier.photo = event.target.files[0];
    },

    submit() {
      // buat dlu formdata untuk menampung nilai pada field input termasuk input file
      const courierForm = new FormData();
      courierForm.append("name", this.courier.name);
      courierForm.append("email", this.courier.email);
      courierForm.append("password", this.courier.password);
      courierForm.append("outlet_id", this.courier.outlet_id);
      courierForm.append("photo", this.courier.photo);

      switch (this.routeName) {
        case "CourierAdd":
          console.log("this and example for add a courier");
          //   kirim data ke vuex action dengan membawa payload
          this.submitCourier(courierForm).then(() => {
            this.clearForm();
            this.$router.push({ name: "CourierData" });
            setTimeout(() => {
              this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: "success",
                title: "Courier has been successfully added",
              });
            }, 1000);
          });
          break;
        case "CourierEdit":
          console.log("this is an example for edit a courier");
          this.SET_ID_UPDATE(this.$route.params.id);
          this.updateCourier(courierForm).then(() => {
            this.clearForm();
            this.$router.push({ name: "CourierData" });
            setTimeout(() => {
              this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: "success",
                title: "Courier has been successfully updated",
              });
            }, 1000);
          });
          break;
        default:
          console.log("error on switch expression");
      }
    },

    clearForm() {
      this.courier = {
        name: "",
        email: "",
        password: "",
        outlet_id: "",
        photo: "",
      };
    },
  },
};
</script>

<style scoped>
</style>
