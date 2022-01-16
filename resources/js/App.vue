<template>
  <div class="wrapper">
    <Navbar v-if="isAuth" />
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <Footer v-if="isAuth" />
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapState(["token"]),
    ...mapGetters(["isAuth"]),
  },
};
</script>

<style>
</style>
