<template>
  <div>
    <b-alert
      show
      variant="danger"
      dismissible
      v-if="errors != '' || $v.$anyError"
      >Warning the given data was invalid. Please fill out the required
      filed</b-alert
    >
    <div class="form-group">
      <label for="name">Nama Lengkap</label>
      <!-- <input
        type="text"
        name="name"
        id="name"
        class="form-control"
        :class="{ 'is-invalid': errors.name }"
        v-model="courier.name"
        :readonly="$route.name === 'CourierEdit'"
      /> -->
      <input
        type="text"
        name="name"
        id="name"
        class="form-control"
        v-model="courier.name"
        :class="{ 'is-invalid': $v.courier.name.$error }"
        @blur="$v.courier.name.$touch()"
        :readonly="$route.name === 'CourierEdit'"
      />
      <!-- <span class="error invalid-feedback" v-if="errors.name">{{
        errors.name[0]
      }}</span> -->
      <span class="error invalid-feedback" v-if="$v.courier.name.$error">
        <span v-if="!$v.courier.name.required">Field is required.</span>
        <span v-if="!$v.courier.name.minLength">
          Field must have at least
          {{ $v.courier.name.$params.minLength.min }} characters.
        </span>
      </span>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="form-control"
        :class="{ 'is-invalid': $v.courier.email.$error || errors.email }"
        v-model="courier.email"
        @blur="$v.courier.email.$touch()"
      />
      <span
        class="error invalid-feedback"
        v-if="$v.courier.email.$error || errors.email"
      >
        <span v-if="!$v.courier.email.email">Field must valid email.</span>
        <span v-if="!$v.courier.email.required">Field is required.</span>
        <span v-if="errors.email">{{ errors.email[0] }}</span>
      </span>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <div class="input-group mb-3">
        <input
          :type="pwd.type"
          class="form-control"
          id="password"
          name="password"
          v-model="courier.password"
          :class="{
            'is-invalid': $v.courier.password.$error || errors.password,
          }"
          @blur="$v.courier.password.$touch()"
        />
        <span class="input-group-append">
          <span type="button" class="input-group-text" @click="togglePassword">
            {{ pwd.btnText }}
          </span>
        </span>
        <div
          class="error invalid-feedback"
          v-if="$v.courier.password.$error || errors.password"
        >
          <span v-if="!$v.courier.password.required">Field is required</span>
          <span v-if="!$v.courier.password.minLength"
            >Field must have at least
            {{ $v.courier.password.$params.minLength.min }} characters.</span
          >
          <span v-if="errors.password"> {{ errors.password }}</span>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="outlet">Outlet</label>
      <select
        name="outlet"
        id="outlet"
        class="form-control"
        :class="{ 'is-invalid': $v.courier.outlet_id.$error }"
        v-model="courier.outlet_id"
        @blur="$v.courier.outlet_id.$touch()"
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
      <span class="error invalid-feedback" v-if="!$v.courier.outlet_id.required"
        >Filed is required.</span
      >
    </div>
    <div class="form-group">
      <b-img v-if="imgPreview" :src="imgPreview" v-bind="imgProps"></b-img>
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
        <div class="error invalid-feedback" v-if="errors.photo">
          <span v-if="errors.photo">{{ errors.photo[0] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
// import validation from vuelidate
// ref terkait vuelidate https://vuelidate-next.netlify.app/custom_validators.html
// https://stackoverflow.com/questions/66688532/password-validate-with-vuelidate-in-vuejs
import { required, minLength, email } from "vuelidate/lib/validators";
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
      imgPreview: "https://plchldr.co/i/80x50?text=preview&fc=000",
      //   imgPreview: "",
      imgProps: {
        center: false,
        fluid: true,
        thumbnail: true,
        fluidGrow: false,
        blank: false,
        blankColor: "#323232",
        width: 100,
        height: 100,
        class: "my-2",
      },
      pwd: {
        type: "password",
        btnText: "Show",
      },
    };
  },
  //   validasi based on courier data
  //   validations: {
  //     courier: {
  //       name: {
  //         required,
  //         minLength: minLength(6),
  //       },
  //       email: {
  //         required,
  //         email,
  //       },
  //       password: {
  //         required: requiredIf(() => {
  //           console.log(`required if ${this.routeName}`);
  //           return this.routeName == "CourierAdd";
  //         }),
  //         minLength: minLength(8),
  //       },
  //       outlet_id: {
  //         required,
  //       },
  //       photo: { imageRule, maxImageFileSize },
  //     },
  //   },

  //   dynamic validation karena komponen ini dipakai lebih satu component/route
  //   https://vuelidate.js.org/#sub-dynamic-validation-schema
  validations() {
    if (this.routeName === "CourierAdd") {
      return {
        courier: {
          name: {
            required,
            minLength: minLength(6),
          },
          email: {
            required,
            email,
          },
          password: {
            required,
            minLength: minLength(8),
          },
          outlet_id: {
            required,
          },
        },
      };
    } else {
      return {
        courier: {
          name: {
            required,
            minLength: minLength(6),
          },
          email: {
            required,
            email,
          },
          password: {
            minLength: minLength(8),
          },
          outlet_id: {
            required,
          },
        },
      };
    }
  },
  created() {
    this.getOutletOptions();

    //fungsi untuk mengambil data yang akan diedit dijalankan berdasarkan parameter id yang ada di query url
    if (this.routeName === "CourierEdit") {
      console.log("ini halaman edit");
      this.getCourier(this.$route.params.id)
        .then((response) => {
          this.courier = {
            name: response.data.name,
            email: response.data.email,
            password: "",
            photo: "",
            outlet_id: response.data.outlet_id,
          };
        })
        .catch((error) => {
          console.group("error get courier from component");
          console.log(error);
          console.groupEnd();
        });
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
      this.imgPreview = URL.createObjectURL(event.target.files[0]);
      console.log(this.imgPreview);
    },

    submit() {
      // set all fields to touched
      this.$v.$touch(); //untuk memulai melakukan validasi pada field
      // stop here if form is invalid
      if (this.$v.$invalid) return;

      console.log("jalankan form submit berdasarkan routing");
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

          courierForm.append("_method", "PUT");
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

    togglePassword() {
      if (this.pwd.type === "password") {
        this.pwd.type = "text";
        this.pwd.btnText = "Hide";
      } else {
        this.pwd.type = "password";
        this.pwd.btnText = "Show";
      }
    },
  },
};
</script>

<style scoped>
</style>
