<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <router-link :to="{ name: 'CourierAdd' }" class="btn btn-primary btn-sm"
          >Add Courier</router-link
        >
        <div class="float-right">
          <input
            type="text"
            class="form-control"
            name="search"
            placeholder="Search..."
            v-model="search"
          />
        </div>
      </div>
      <div class="card-body">
        <b-table
          responsive
          striped
          hover
          bordered
          :items="couriers.data"
          :fields="fields"
          show-empty
        >
          <template #cell(photo)="data">
            <b-img-lazy
              v-bind="imgProps"
              :src="getImage(data.item.photo)"
              :alt="data.item.name"
            ></b-img-lazy>
          </template>
          <template #cell(outlet_id)="data">
            {{ data.item.outlet.name }}
          </template>
          <template #cell(actions)="data">
            <router-link
              :to="{ name: 'CourierEdit', params: { id: data.item.id } }"
              class="btn btn-warning btn-sm"
            >
              Edit
            </router-link>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteCourier(data.item.id)"
            >
              Delete
            </button>
          </template>
        </b-table>

        <!-- pagination -->
        <div class="row mt-2">
          <div class="col md-6">
            <p v-if="couriers.data">
              <!-- <i class="fas fa-bars" aria-hidden="true"></i> -->
              <!-- {{ couriers.data.length }} of {{ totalRows }} total data -->
              {{ meta.from }} - {{ meta.to }} dari {{ meta.total }} data
            </p>
          </div>
          <div class="col md-6">
            <div class="float-right">
              <b-pagination
                v-model="page"
                :total-rows="totalRows"
                :per-page="perPage"
                aria-controls="couriers"
                v-if="couriers.data && couriers.data.length > 0"
              >
              </b-pagination>
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
      // data pada table btable
      fields: [
        { key: "photo", label: "Photo" },
        { key: "name", label: "Name" },
        { key: "email", label: "email" },
        { key: "outlet_id", label: "Outlet" },
        { key: "actions", label: "Actions" },
      ],
      imgProps: {
        center: true,
        fluid: true,
        thumbnail: true,
        fluidGrow: false,
        blank: true,
        blankColor: "#bbb",
        width: 80,
        height: 50,
        // class: "my-5",
      },
      search: "",
    };
  },
  created() {
    console.log("component created");
    this.getCouriers();
    // console.log(this.couriers);
  },
  computed: {
    //   modules nya dlu baru state nya
    ...mapState("courier", {
      couriers: (state) => state.couriers,
      totalRows: (state) => state.totalRows,
      perPage: (state) => state.perPage,
      meta: (state) => state.meta,
    }),
    page: {
      get() {
        return this.$store.state.courier.page;
      },
      set(val) {
        this.$store.commit("courier/SET_PAGE", val);
      },
    },
  },
  //   untuk melihat perubahan pada aksi
  watch: {
    page() {
      this.getCouriers();
    },
    search() {
      this.getCouriers(this.search);
    },
  },
  methods: {
    ...mapActions("courier", ["getCouriers", "removeCourier"]),
    deleteCourier(id) {
      this.$swal({
        title: "Are you sure?",
        text: "this action will delete permanently",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "confirm",
      }).then((result) => {
        if (result.value) {
          this.removeCourier(id).then(() => {
            this.$swal({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Item has been successfully deleleted",
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            });
          });
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
