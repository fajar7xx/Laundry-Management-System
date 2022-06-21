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

            <div class="alert alert-primary" role="alert" v-if="alert_role">
              Role has been added
            </div>

            <form @submit.prevent="setRole">
              <div class="form-group">
                <label for="roleUser">Role User</label>
                <select
                  name="roleUser"
                  id="roleUser"
                  class="form-control"
                  v-model="role_user.role"
                >
                  <option value="">Select Role</option>
                  <option
                    v-for="(row, index) in roles"
                    :key="index"
                    :value="row.name"
                  >
                    {{ row.name }}
                  </option>
                </select>
                <div class="invalid-feedback" v-if="errors.role_id">
                  {{ errors.role_id[0] }}
                </div>
              </div>
              <div class="form-group">
                <label for="user">User</label>
                <select
                  name="user"
                  id="user"
                  class="form-control"
                  v-model="role_user.user_id"
                >
                  <option value="">Select User</option>
                  <option
                    v-for="(row, index) in users"
                    :key="index"
                    :value="row.id"
                  >
                    {{ row.name }} - {{ row.email }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-sm btn-primary" type="submit">
                  Set Role
                </button>
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
                <select
                  name="role"
                  id="role"
                  class="form-control"
                  v-model="role_selected"
                >
                  <option value="">Select Role</option>
                  <option
                    v-for="(row, index) in roles"
                    :key="index"
                    :value="row.id"
                  >
                    {{ row.name }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn sm" @click="checkPermission">
                  {{ loading ? "Loading..." : "Check" }}
                </button>
              </div>
              <div class="form-group">
                <div
                  class="alert alert-primary"
                  role="alert"
                  v-if="alert_permission"
                >
                  Permission Has been assigned
                </div>

                <div class="nav-tab-custom">
                  <ul class="nav nav-tabs" id="permissiontab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a
                        href="#tab_1"
                        class="nav-link active"
                        id="tab1"
                        data-toggle="tab"
                        role="tab"
                        aria-controls="tab1"
                        aria-selected="true"
                        >Permission</a
                      >
                    </li>
                  </ul>

                  <div class="tab-content" id="myPermissionTab">
                    <div
                      class="tab-pane fade show active"
                      id="tab_1"
                      role="tabpanel"
                      aria-labelledby="tab-1"
                    >
                      <template v-for="(row, index) in permissions">
                        <input
                          type="checkbox"
                          class="minimal-red"
                          :key="index"
                          :value="row.name"
                          :checked="
                            role_permission.findIndex(
                              (x) => x.name == row.name
                            ) != -1
                          "
                          @click="addPermission(row.name)"
                        />{{ row.name }} <br :key="'row' + index" />
                        <br
                          :key="'enter' + index"
                          v-if="(index + 1) % 4 === 0"
                        />
                      </template>
                    </div>
                  </div>
                </div>
              </div>
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
  created() {
    this.getRoles(), this.getAllPermissions(), this.getUserLists();
  },
  computed: {
    ...mapState(["errors"]),
    ...mapsState([
      "user",
      {
        users: (state) => state.users,
        roles: (state) => state.roles,
        permissions: (state) => state.permissions,
        role_permission: (state) => state.role_permission,
      },
    ]),
  },
  methods: {
    ...mapMutations("user", ["CLEAR_ROLE_PERMISSION"]),
    setRole() {
      this.setRoleUser(this.role_user).then(() => {
        this.alert_role = true;
        setTimeout(() => {
          this.role_user = {
            role: "",
            user_id: "",
          };
          this.alert_role = false;
        }, 1000);
      });
    },
    addPermission(name) {
      let index = this.new_permission.findIndex((x) => x == name);

      if (index == -1) {
        this.new_permission.push(name);
      } else {
        this.new_permission.splice(index, 1);
      }
    },
    checkPermission() {
      this.loading = true;
      this.getRolePermission(this.role_selected).then(() => {
        this.loading = false;
        this.new_permission = this.role_permission;
      });
    },
    setPermission() {
      this.setRolePermission({
        role_id: this.role_selected,
        permissions: this.new_permission,
      }).then(() => {
        if (res.status == "success") {
          this.alert_permission = true;
          setTimeout(() => {
            this.role_selected = "";
            this.new_permission = [];
            this.loading = false;
            this.alert_permission = false;
            this.CLEAR_ROLE_PERMISSION();
          }, 1000);
        }
      });
    },
  },
};
</script>

<style type="text/css" scoped>
.tab-pane {
  height: 150px;
  overflow-y: scroll;
}
</style>
