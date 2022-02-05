<template>
  <div>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <a href="#" class="brand-link">
        <img
          src="/theme/dist/img/AdminLTELogo.png"
          alt="Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light">Laundry</span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img
              src="/theme/dist/img/user2-160x160.jpg"
              class="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul
            class="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item">
              <router-link to="/" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'OutletData' }" class="nav-link">
                <i class="nav-icon fas fa-store"></i>
                <p>Outlets</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'CourierData' }" class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>Courier</p>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="logout" role="button">
                <i class="fas fa-sign-out-alt nav-icon"></i>
                <p>Logout</p>
              </a>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      //   console.log("logout out");
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>

<style>
</style>
