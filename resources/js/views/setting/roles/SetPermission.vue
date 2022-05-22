<template>
  <div class="col-md-12">
    <div class="row">
      <div class="col-md-5">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Assing Role to User</h3>
          </div>
          <div class="card-body">
            <!-- alert -->
            <form @submit.prevent="setRole">
              <div class="form-group">
                <label for="roleUser">Role User</label>
                <select name="roleUser" id="roleUser" class="form-control">
                  <option value="">Select Role</option>
                </select>
              </div>
              <div class="form-group">
                <label for="user">User</label>
                <select name="user" id="user" class="form-control">
                  <option value="">Select User</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-sm btn-primary" type="submit"></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="col md-7">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Set Permission</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="setPermission">
              <div class="form-group">
                <label for="role">Role</label>
                <select name="role" id="role" class="form-control">
                  <option value="">Select Role</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn sm" @click="checkPermission">
                  {{ loading ? "Loading..." : "Check" }}
                </button>
              </div>
              <div class="form-group"></div>
              <div class="form-group">
                <button class="btn btn-sm btn-primary" type="submit">
                  <i class="fas fa-save fa-fw mr-1"></i>
                  Save & Set Permission
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      role_user: {
        role: "",
        user_id: "",
      },
      role_selected: "",
      new_permissions: [],
      loading: false,
      alert_permission: false,
      alert_role: false,
    };
  },
  created() {},
  computer: {},
  methods: {},
};
</script>

<style type="text/css" scoped>
.tab-pane {
  height: 150px;
  overflow-y: scroll;
}
</style>
