<template>
  <div class="wrapper">
    <!-- <Navbar v-if="isAuth" />
    <Sidebar v-if="isAuth" />
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
    <Footer v-if="isAuth" /> -->
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Sidebar from "./components/Sidebar";
const DEFAULTLAYOUT = "default";
export default {
  //   components: {
  //     Navbar,
  //     Footer,
  //     Sidebar,
  //   },

  created() {
    // console.log(JSON.stringify(localStorage.getItem("token")));
  },
  computed: {
    ...mapState(["token"]),
    ...mapGetters(["isAuth"]),
    layout() {
      return (this.$route.meta.layout || DEFAULTLAYOUT) + "-layout";
    },
  },
};
</script>

<style lang=css>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,700|Material+Icons");
</style>
