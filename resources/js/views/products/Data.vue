<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <router-link
          :to="{ name: 'ProductAdd' }"
          class="btn btn-primary btn-sm btn-flat"
          >Add Outlet</router-link
        >
        <div class="float-right">
          <input
            type="text"
            name="search"
            id="search"
            class="form-control"
            placeholder="Search"
            v-model="search"
          />
        </div>
      </div>

      <div class="card-body">
        <b-table
          striped
          hover
          bordered
          responsive
          :items="products.data"
          :fields="fields"
          show-empty
        >
          <template #cell(laundry_type)="data">
            {{ data.item.laundry_type.name }}
          </template>
          <template #cell(user_id)="data">{{ data.item.user.name }} </template>
          <template #cell(actions)="data">
            <router-link
              :to="{ name: 'ProductEdit', params: { id: data.item.id } }"
              class="btn btn-warning btn-sm"
              >Edit</router-link
            >
            <button
              class="btn btn-danger btn-sm"
              @click="deleteProduct(data.item.id)"
            >
              Delete
            </button>
          </template>
        </b-table>

        <div class="row mt-2">
          <div class="col-md-6">
            <p v-if="products.data">
              {{ meta.from }} - {{ meta.to }} from {{ meta.total }} data
            </p>
          </div>
          <div class="col-md-6">
            <div class="float-right">
              <b-pagination
                v-model="page"
                :total-rows="totalRows"
                :per-page="perPage"
                aria-controls="products"
                v-if="products.data && products.data.length > 0"
              ></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      fields: [
        { key: "name", label: "Item Name" },
        { key: "unit_type", label: "Unit Type" },
        { key: "laundry_type", label: "Laundry Type" },
        { key: "price", label: "Price" },
        { key: "user_id", label: "Admin" },
        { key: "actions", label: "Actions" },
      ],
      search: "",
    };
  },
  created() {
    console.log("component data product");
    this.getProducts();
  },
  computed: {
    ...mapState("product", {
      products: (state) => state.products,
      totalRows: (state) => state.totalRows,
      perPage: (state) => state.perPage,
      meta: (state) => state.meta,
    }),
    page: {
      get() {
        return this.$store.state.product.page;
      },
      set(val) {
        this.$store.commit("product/SET_PAGE", val);
      },
    },
  },
  watch: {
    page() {
      this.getProducts();
    },
    search() {
      this.getProducts(this.search);
    },
  },
  methods: {
    ...mapActions("product", ["getProducts", "removeProduct"]),
    deleteProduct(id) {
      this.$swal({
        title: "Are you sure?",
        text: "this action will delete permanently",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "confirm",
      }).then((result) => {
        if (result.value) {
          this.removeProduct(id).then(() => {
            this.$swal({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Item has been successfully deleted",
              timer: 2000,
              timerProgressBar: true,
              showConfirmbutton: false,
            });
          });
        }
      });
    },
  },
};
</script>

<style>
</style>
