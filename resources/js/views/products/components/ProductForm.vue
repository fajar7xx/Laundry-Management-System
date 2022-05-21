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
      <label for="name">Product Name</label>
      <input
        type="text"
        class="form-control"
        name="name"
        id="name"
        placeholder="Product Name"
        v-model="product.name"
        :class="{ 'is-invalid': $v.product.name.$error }"
        @blur="$v.product.name.$touch()"
      />
      <span class="error invalid-feedback" v-if="$v.product.name.$error">
        <span v-if="!$v.product.name.required">Field is required.</span>
      </span>
    </div>

    <div class="form-group">
      <label for="type">Type</label>
      <select
        name="type"
        id="type"
        class="form-control"
        v-model="product.unit_type"
        :class="{ 'is-invalid': $v.product.unit_type.$error }"
        @blur="$v.product.unit_type.$touch()"
      >
        <option value="">Select type</option>
        <option
          v-for="(type, index) in unitTypes"
          :key="index"
          :value="type.value"
        >
          {{ type.option }}
        </option>
      </select>
      <span class="error invalid-feedback" v-if="$v.product.unit_type.$error">
        <span v-if="!$v.product.unit_type.required">Field is required.</span>
      </span>
    </div>

    <div class="form-row">
      <div class="col">
        <div class="form-group">
          <label for="jenis"
            >Jenis Jasa
            <a
              href="javascript:void(0)"
              @click="showForm = true"
              v-if="!showForm"
              class="btn btn-sm btn-primary"
              >Add New</a
            ></label
          >
          <select
            name="laundry_type"
            id="laundry_type"
            class="form-control"
            v-model="product.laundry_type"
            :class="{ 'is-invalid': $v.product.laundry_type.$error }"
            @blur="$v.product.laundry_type.$touch()"
          >
            <option value="">select laundry type</option>
            <option
              v-for="(row, index) in laundry_types"
              :key="index"
              :value="row.id"
            >
              {{ row.name }}
            </option>
          </select>
          <span
            class="error invalid-feedback"
            v-if="$v.product.laundry_type.$error"
          >
            <span v-if="!$v.product.laundry_type.required"
              >Field is required.</span
            >
          </span>
        </div>
      </div>

      <div class="col">
        <div class="form-group" v-if="showForm">
          <label for="input_laundry_type">&nbsp;</label>
          <div class="input-group">
            <input
              type="text"
              name="input_laundry_type"
              id="input_laundry_type"
              class="form-control"
              v-model="laundry_type"
            />
            <div class="input-group-append">
              <button class="btn btn-warning btn-sm" @click="showForm = false">
                Cancel
              </button>
              <button class="btn btn-primary btn-sm" @click="addNewLaundryType">
                Save
              </button>
            </div>
            <span class="error invalid-feedback" v-if="errors.code">{{
              errors.code[0]
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <label for="price">Price</label>
      <input
        type="number"
        name="price"
        id="price"
        class="form-control"
        v-model="product.price"
        min="0"
        :class="{ 'is-invalid': $v.product.price.$error }"
        @blur="$v.product.price.$touch()"
      />
      <span class="error invalid-feedback" v-if="$v.product.price.$error">
        <span v-if="!$v.product.price.required">Field is required.</span>
        <span v-if="!$v.product.price.numeric">Field must numeric.</span>
        <span v-if="!$v.product.price.minValue"
          >Minimal price is {{ minValue.min }}</span
        >
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { required, minValue, numeric } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      product: {
        name: "",
        unit_type: "",
        price: 0,
        laundry_type: "",
      },
      unitTypes: [
        {
          value: "kilogram",
          option: "Kilogram",
        },
        {
          value: "satuan",
          option: "Satuan",
        },
      ],
      laundry_type: "",
      showForm: false,
    };
  },

  validations() {
    return {
      product: {
        name: {
          required,
        },
        unit_type: {
          required,
        },
        price: {
          required,
          numeric,
          minValue: minValue(0),
        },
        laundry_type: {
          required,
        },
      },
    };
  },

  created() {
    this.getLaundryType();

    if (this.routeName == "ProductEdit") {
      this.editProduct(this.$router.params.id).then((res) => {
        this.product = {
          name: res.data.name,
          unit_type: res.data.unit_type,
          price: res.data.price,
          laundry_type: res.data.laundry_type_id,
        };
      });
    }
  },

  computed: {
    ...mapState(["errors"]),
    ...mapState("laundryType", {
      laundry_types: (state) => state.laundryTypes,
    }),
    routeName() {
      return this.$route.name;
    },
  },

  methods: {
    ...mapActions("product", [
      "AddProductLaundry",
      "editProduct",
      "updateProduct",
    ]),
    ...mapActions("laundryType", ["getLaundryType", "addLaundryType"]),

    addNewLaundryType() {
      this.addLaundryType({ name: this.laundry_type }).then(() => {
        this.getLaundryType().then(() => {
          this.showForm = false;
          this.laundry_type = "";
        });
      });
    },

    submit() {
      // set all fields to touched
      this.$v.$touch(); //untuk memulai melakukan validasi pada field
      // stop here if form is invalid
      if (this.$v.$invalid) return;

      switch (this.routeName) {
        case "ProductAdd":
          this.AddProductLaundry(this.product).then(() => {
            this.clearForm();
            this.$router.push({ name: "ProductData" });
            setTimeout(() => {
              this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: "success",
                title: "Product has been successfully added",
              });
            }, 1000);
          });
          break;
        case "ProductEdit":
          // tambahkan object id kedalam object product
          Object.assign(shit.product, { id: this.$router.params.id });
          this.updateProduct(this.product).then(() => {
            this.clearForm();
            this.$router.push({ name: "ProductData" });
            setTimeout(() => {
              this.$swal({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                icon: "success",
                title: "Product has been successfully updated",
              });
            }, 1000);
          });
          break;
        default:
          console.log("error on switch expression");
      }
    },

    clearForm() {
      this.product = {
        name: "",
        unit_type: "",
        price: 0,
        laundry_type: "",
      };
    },
  },
};
</script>

<style>
</style>
