<template>
  <div class="login-page">
    <div class="login-box">
      <div class="card card-outline card-primary">
        <div class="card-header text-center">
          <router-link :to="{ name: 'Home' }" class="h1">Laundry</router-link>
        </div>
        <div class="card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <div class="alert alert-danger" v-if="errors.invalid">
            {{ errors.invalid }}
          </div>

          <div
            class="alert alert-danger"
            v-if="errors.email || errors.password"
          >
            <span v-if="errors.email">{{ errors.email[0] }}</span>
            <br />
            <span v-if="errors.password">{{ errors.password[0] }}</span>
          </div>

          <form @submit.prevent="login">
            <div class="form-group">
              <div class="input-group mb-3">
                <input
                  type="email"
                  v-model="loginForm.email"
                  class="form-control"
                  placeholder="Email"
                  :class="{ 'is-invalid': errors.email }"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="input-group mb-3">
                <input
                  type="password"
                  v-model="loginForm.password"
                  class="form-control"
                  placeholder="Password"
                  :class="{ 'is-invalid': errors.password }"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input
                    type="checkbox"
                    id="remember"
                    v-model="loginForm.remember_me"
                  />
                  <label for="remember"> Remember Me </label>
                </div>
              </div>
              <div class="col-4">
                <button
                  type="submit"
                  class="btn btn-block bg-gradient-primary text-white"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
        remember_me: false,
      },
    };
  },
  created() {
    if (this.isAuth) {
      this.$router.push({ name: "home" });
    }
  },
  computed: {
    ...mapGetters(["isAuth"]),
    ...mapState(["errors"]),
  },
  methods: {
    ...mapActions("auth", ["submit"]),
    ...mapMutations(["CLEAR_ERRORS"]),

    login() {
      this.submit(this.loginForm).then(() => {
        if (this.isAuth) {
          this.CLEAR_ERRORS();
          this.$router.push({ name: "Home" });
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
