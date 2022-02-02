<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <!-- <h3 class="card-title">Title</h3>

        <div class="card-tools">
          <button
            type="button"
            class="btn btn-tool"
            data-card-widget="collapse"
            title="Collapse"
          >
            <i class="fas fa-minus"></i>
          </button>
          <button
            type="button"
            class="btn btn-tool"
            data-card-widget="remove"
            title="Remove"
          >
            <i class="fas fa-times"></i>
          </button>
        </div> -->
        <router-link
          :to="{ name: 'OutletAdd' }"
          class="btn btn-primary btn-sm btn-flat"
          >Add Outlet</router-link
        >
        <div class="float-right">
          <input
            type="text"
            class="form-control"
            name="Search"
            placeholder="Search"
            v-model="search"
          />
        </div>
      </div>
      <div class="card-body">
        <!-- table -->
        <b-table
          striped
          hover
          bordered
          :items="outlets.data"
          :fields="fields"
          show-empty
        >
          <template #cell(status)="data">
            <span class="badge badge-success" v-if="data.item.status == 1"
              >Active</span
            >
            <span class="badge badge-secondary" v-else>Inactive</span>
          </template>
          <template #cell(actions)="data">
            <router-link
              :to="{ name: 'OutletEdit', params: { id: data.item.id } }"
              class="btn btn-warning btn-sm"
            >
              Edit
            </router-link>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteOutlet(data.item.id)"
            >
              Delete
            </button>
          </template>
        </b-table>

        <!-- pagination -->
        <div class="row mt-2">
          <div class="col-md-6">
            <p v-if="outlets.data">
              <i class="fas fa-bars" aria-hidden="true"></i>
              {{ outlets.data.length }} of {{ outlets.meta.total }} total data
            </p>
          </div>
          <div class="col-md-6">
            <div class="float-right">
              <b-pagination
                v-model="page"
                :total-rows="outlets.meta.total"
                :per-page="outlets.meta.per_page"
                aria-controls="outlets"
                v-if="outlets.data && outlets.data.length > 0"
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
      // field untuk b-table, pastikan keynya sesuai dengan field database
      // agar otomatis di render
      fields: [
        { key: "code", label: "Kode Outlet" },
        { key: "name", label: "Nama Outlet" },
        { key: "address", label: "Alamat" },
        { key: "phone", label: "Telp" },
        { key: "status", label: "Status" },
        { key: "actions", label: "Actions" },
      ],
      search: "",
    };
  },
  created() {
    // sebelum componen diload, request data dari server
    this.getOutlets();
  },
  computed: {
    //   mengambil data outlets dari state outlets
    ...mapState("outlet", {
      outlets: (state) => state.outlets,
    }),
    page: {
      get() {
        // mengambil value page dari vuex module outlet
        return this.$store.state.outlet.page;
      },
      set(val) {
        // apabila terjadi perubahan value dari page, maka state page
        // di vuex juga akan di ubah
        this.$store.commit("outlet/SET_PAGE", val);
      },
    },
  },
  watch: {
    page() {
      //   apabila value dari page brubah akan req data dari server
      this.getOutlets();
    },
    search() {
      //apabila value dari search berubha
      //   maka akan req berdasarkan data search
      this.getOutlets(this.search);
    },
  },
  methods: {
    //   mengambil fungsi dari vuex module outlet
    ...mapActions("outlet", ["getOutlets", "removeOutlet"]),

    // ketika tombol remove/delete/hapus di klik, aka akan menjalankan method ini
    deleteOutlet(id) {
      // tampilkan konfirmasi
      this.$swal({
        title: "Are you sure?",
        text: "this action will delete permanently",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Confirm",
      }).then((result) => {
        //   jika setujui
        if (result.value) {
          // jalankan fungsi removeoutlet
          this.removeOutlet(id).then(() => {
            this.$swal({
              toast: true,
              position: "top-end",
              icon: "success",
              title: "Item has been successfully deleted",
              //   title: "Success",
              //   text: "Item has been successfully deleted",
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
              width: 400,
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
