<template>
  <div class="wrapper">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
const DEFAULT_LAYOUT = "default";
export default {
  created() {
    console.log("app started");
  },
  computed: {
    ...mapState(["token"]),
    ...mapGetters(["isAuth"]),
    layout() {
      return (this.$route.meta.layout || DEFAULT_LAYOUT) + "-layout";
    },
  },
};
</script>

<style lang=css>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,700|Material+Icons");
</style>
